const express = require("express");
var router = express.Router();
const Template = require("./../models/Template");

router.use('/', function(req, res, next) {
    jwt.verify(req.query.token, 'SDLHW', function(err, decoded) {
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

router.post('/', function (req, res, next) {
    var template = new Template({
        templateId: req.body.templateId,
        name: req.body.name,
        project: req.body.project,
        taskType:req.body.taskType,
        icon: req.body.icon,
        content: req.body.content,
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