const express = require("express");
var router = express.Router();
const Site = require("./../models/Sites");
const jwt = require("jsonwebtoken");

/**
 * Method: Apply Auth Middleware to the sites routes
 * @param {Object} Request - Request Object contains data about the user request
 * @param {Object} Response - Using the obejct you can send a response to the user
 * @param {function} next - Callback to continue with the next line
 * Validate the token with SDLHW security code
 * If the Token is valid continue finding the route, if not
 * send a 401 code error.
 * @author Sebastian Guevara <outs.sebastian.velasquez@huawei.com>
 * @since Added for security reasons, when access to the API. 
 * @version 1.0.0
 * date  07/17/2017 DD-MM-YYYY
 */
router.use('/', function (req, res, next) {
    
    jwt.verify(req.query.token, 'SDLHW', function (err, decoded) {
        if (err) {
            return res.status('401').json({
                message: 'Not Authenticated',
                error: err
            });
        }
        next();
    })

});

/**
 * Method: Find Sites depeding on user properties like region and project
 * @param {Object} Request - Request Object contains data about the user request
 * @param {Object} Response - Using the obejct you can send a response to the user
 * @param {function} next - Callback to continue with the next line
 * Decode de token that the request contain
 * Based on the user properties like project and region find on the sites database and retrieve the sites that mtach with the filters.
 * If no one match return and empty Array
 * @author Sebastian Guevara <outs.sebastian.velasquez@huawei.com>
 * @since Added for perfomance reasons, Doesn't download all the sites, only some of them based on the user preferences. 
 * @version 1.0.1
 * date  07/18/2017 DD-MM-YYYY
 */
router.get('/findMySites', function (req, res, next) {
        var decoded = jwt.decode(req.query.token);
        console.log("Decoded: ", decoded );
        Site.find({ project: { $in: decoded.project } , region: { $in: decoded.region }  }).then(function (sitesRetrieved) {
        let sitesToSend = { sites:sitesRetrieved, total:sitesRetrieved.length};
        console.log("Sites Retrieved", sitesRetrieved);
        res.send(sitesToSend);
    });
});


router.get('/', function (req, res, next) {
    Site.find().then(function (sites) {
        res.send(sites);
    });
});

router.post('/', function (req, res, next) {
    var site = new Site({
        siteId: req.body.siteId,
        name: req.body.name,
        project: req.body.project,
        creationDate: new Date(),
        lastModification: new Date(),
        portafolio: req.body.portafolio,
        anchorTenant: req.body.anchorTenant,
        region: req.body.region,
        fmOffice: req.body.fmOffice,
        city: req.body.city,
    });

    site.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            })
        }

        res.status(201).json({
            message: 'Site was saved',
            obj: result
        })
    })
});

router.delete('/:id', function (req, res, next) {
    Site.findById(req.params.id, function (err, template) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            });
        }

        if (!template) {
            return res.status(500).json({
                title: 'No Site Founded',
                error: { message: "Site not found" }
            });
        }

        template.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error ocurred',
                    error: err
                });
            }
            res.status(201).json({
                message: 'The site was deleted',
                obj: result
            });
        })
    });
});

module.exports = router;