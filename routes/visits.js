const express = require("express");
var router = express.Router();
const Visit = require("./../models/Visits");

router.get('/', function (req, res, next) {
    Visit.find().then(function (sites) {
        res.send(sites);
    });
});

router.post('/', function (req, res, next) {
    var visit = new Visit({
        siteId: req.body.siteId,
        visitId: req.body.visitId,
        author: req.body.author,
        creationDate: req.body.creationDate
    });

    visit.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            })
        }

        res.status(201).json({
            message: 'Visit was saved',
            obj: result
        })
    })
});

router.delete('/:id', function (req, res, next) {
    Visit.findById(req.params.id, function (err, template) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            });
        }

        if (!template) {
            return res.status(500).json({
                title: 'No Visit Founded',
                error: { message: "Visit not found" }
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
                message: 'The visit was deleted',
                obj: result
            });
        })
    });
});

module.exports = router;