const express = require("express");
var router = express.Router();
const Site = require("./../models/Sites");
const jwt = require("jsonwebtoken");

/*
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
*/

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