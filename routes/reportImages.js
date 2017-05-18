const express = require("express");
var router = express.Router();
const ReportImages = require("./../models/ReportImages");

router.get('/', function (req, res, next) {
    ReportImages.find().then(function (reportImages) {
        res.send(reportImages);
    });
});

router.get('/:reportId', function (req, res, next) {
    ReportImages.find().then(function (reportImages) {
        let reportsImgFiltered = reports.filter(function (reportImg) {
            return reportImg.reportId == req.params.reportId;
        });
        res.send(reportsImgFiltered);
    });
});

router.post('/', function (req, res, next) {

    ReportImages.findOne({ reportImgId: req.body.reportImgId, reportId: req.body.reportId }, function (err, reportResponse) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            });
        }
        if (!reportResponse) {
            //Not founded
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
        }
        else {
            //Founded
            reportResponse.images = JSON.parse(req.body.images);
            reportResponse.author = req.body.author;
            reportResponse.lastModification = req.body.lastModification;
            reportResponse.save(function (err, result) {
                res.status(201).json({
                    message: 'Report Image was update',
                    obj: result
                });
            });
        }
    });
});

router.patch('/update', function (req, res, next) {

    ReportImages.findOne({ reportImgId: req.body.reportImgId, reportId: req.body.reportId }, function (err, reportResponse) {
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
    });

});

router.delete('/:id', function (req, res, next) {
    ReportImages.findById(req.params.id, function (err, template) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            });
        }

        if (!template) {
            return res.status(500).json({
                title: 'No Report Founded',
                error: { message: "Report not found" }
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
                message: 'The reportImg was deleted',
                obj: result
            });
        })
    });
});

module.exports = router;