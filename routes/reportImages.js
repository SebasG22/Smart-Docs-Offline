const express = require("express");
var router = express.Router();
const ReportImages = require("./../models/ReportImages");

router.get('/', function (req, res, next) {
    ReportImages.find().then(function (reportImages) {
        res.send(reportImages);
    });
});

router.post('/', function (req, res, next) {
    let reportImages = new ReportImages({
        reportImgId: req.body.reportImgId,
        reportId: req.body.reportId,
        images: JSON.parse(req.body.images),
        author: req.body.author,
        lastModification: req.body.lastModification
    });

    reportImages.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            })
        }

        res.status(201).json({
            message: 'ReportImg was saved',
            obj: result
        })
    });
});

router.patch('/update', function (req, res, next) {

    Report.findOne({ reportImgId: req.body.reportImgId , reportId: req.body.reportId }, function (err, reportResponse) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            });
        }
        if (!reportResponse) {
            //Not founded
            return res.status(500).json({
                title: 'Report Not Found',
                error: reportResponse
            })

        }
        else {
            //Founded
            reportResponse.image_1 = JSON.parse(req.body.image_1);
            reportResponse.save(function (err, result) {
                res.status(201).json({
                    message: 'Report Image was update',
                    obj: result
                });
            });
        }
    })

});

module.exports = router;