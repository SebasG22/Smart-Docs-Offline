const express = require("express");
var router = express.Router();
const Template = require("./../models/Template");

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

module.exports = router;