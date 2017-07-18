const express = require("express");
var router = express.Router();
const Template = require("./../models/Template");
var jwt = require("jsonwebtoken");

/**
 * Method: Apply Auth Middleware to the templates routes
 * @param {Object} Request - Request Object contains data about the user request
 * @param {Object} Response - Using the obejct you can send a response to the user
 * @param {function} next - Callback to continue with the next line
 * Validate the token with SDLHW security code
 * If the Token is valid continue finding the route, if not
 * send a 401 code error.
 * @author Sebastian Guevara <outs.sebastian.velasquez@huawei.com>
 * @since Added for security reasons, when access to the API. 
 * @version 1.0.0
 * date  07/18/2017 DD-MM-YYYY
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


router.get('/', function (req, res, next) {
    Template.find().then(function (templates) {
        res.send(templates);
    });
});

/**
 * Method: Find Templates depeding on user properties like project
 * @param {Object} Request - Request Object contains data about the user request
 * @param {Object} Response - Using the obejct you can send a response to the user
 * @param {function} next - Callback to continue with the next line
 * Decode de token that the request contain
 * Based on the user properties like project  find on the templates database and retrieve the templates that match with the filters.
 * If no one match return and empty Array
 * @author Sebastian Guevara <outs.sebastian.velasquez@huawei.com>
 * @since Added for perfomance reasons, Doesn't download all the templates, only some of them based on the user preferences. 
 * @version 1.0.0
 * date  07/18/2017 DD-MM-YYYY
 */

router.get('/findMyTemplates', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    console.log("Decoded: ", decoded);
    Template.find({ project: { $in: decoded.project }}).then(function (templatesRetrieved) {
        let templatesToSend = {"templates": templatesRetrieved, "total":templatesRetrieved.length};
        res.send(templatesToSend);
    });
});

router.post('/', function (req, res, next) {
    var template = new Template({
        templateId: req.body.templateId,
        name: req.body.name,
        project: req.body.project,
        taskType: req.body.taskType,
        icon: req.body.icon,
        content: req.body.content,
        pdfContent: req.body.pdfContent,
        creationDate: new Date(),
        lastModification: new Date()
    });

    template.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            })
        }

        res.status(201).json({
            message: 'Template was saved',
            obj: result
        })
    })
});

router.delete('/:id', function (req, res, next) {
    Template.findById(req.params.id, function (err, template) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            });
        }

        if (!template) {
            return res.status(500).json({
                title: 'No Template Founded',
                error: { message: '"Template not found"' }
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
                message: 'The template was deleted',
                obj: result
            });
        })
    });
});

module.exports = router;