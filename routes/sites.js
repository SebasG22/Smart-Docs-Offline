const express = require("express");
var router = express.Router();
const Site = require("./../models/Sites");

router.get('/', function (req, res, next) {
    Site.find().then(function (sites) {
        res.send(sites);
    });
});

router.post('/', function (req, res, next) {
    var site = new Site({
        siteId: req.body.siteId,
        name: req.body.name,
        fmOffice: req.body.fmOffice,
        project: req.body.project,
        creationDate: new Date(),
        lastModification: new Date()
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