const express = require("express");
var router = express.Router();
const Report = require("./../models/Report");

router.get('/', function (req, res, next) {
    Report.find().then(function (reports) {
        res.send(reports);
    });
});


router.post('/', function (req, res, next) {

    var report = new Report({
        idReport: req.body.idReport,
        templateId: req.body.templateId,
        visitId: req.body.visitId,
        status: req.body.status,
        lastModification: req.body.lastModification,
        author: req.body.author,
        completedDate: req.body.completedDate,
        creationDate: req.body.creationDate,
    });

    report.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            })
        }

        res.status(201).json({
            message: 'Report was saved',
            obj: result
        })
    });

});

router.post('/update/checkbox_answer', function (req, res, next) {

    Report.findOne({ idReport: req.body.idReport }, function (err, reportResponse) {
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
            reportResponse.checkbox_answer = req.body.checkbox_answer;
            reportResponse.save(function (err, result) {
                res.status(201).json({
                    message: 'Report was update - checkbox Answer',
                    obj: result
                });
            });
        }
    })

});

router.post('/update/date_answer', function (req, res, next) {

   Report.findOne({ idReport: req.body.idReport }, function (err, reportResponse) {
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
            reportResponse.date_answer = req.body.date_answer;
            reportResponse.save(function (err, result) {
                res.status(201).json({
                    message: 'Report was update - Date Answer',
                    obj: result
                });
            });
        }
    });
});

router.post('/update/datetime_answer', function (req, res, next) {

    Report.findOne({ idReport: req.body.idReport }, function (err, reportResponse) {
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
            reportResponse.datetime_answer = req.body.datetime_answer;
            reportResponse.save(function (err, result) {
                res.status(201).json({
                    message: 'Report was update - Date Time Answer',
                    obj: result
                });
            });
        }
    });
});

router.post('/update/list_answer', function (req, res, next) {

    Report.findOne({ idReport: req.body.idReport }, function (err, reportResponse) {
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
            reportResponse.list_answer = req.body.list_answer;
            reportResponse.save(function (err, result) {
                res.status(201).json({
                    message: 'Report was update - List Answer',
                    obj: result
                });
            });
        }
    });
    
});

router.post('/update/month_answer', function (req, res, next) {

    Report.findOne({ idReport: req.body.idReport }, function (err, reportResponse) {
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
            reportResponse.month_answer = req.body.month_answer;
            reportResponse.save(function (err, result) {
                res.status(201).json({
                    message: 'Report was update - Month Answer',
                    obj: result
                });
            });
        }
    });

});

router.post('/update/multiselect_answer', function (req, res, next) {

    Report.findOne({ idReport: req.body.idReport }, function (err, reportResponse) {
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
            reportResponse.multiselect_answer = req.body.multiselect_answer;
            reportResponse.save(function (err, result) {
                res.status(201).json({
                    message: 'Report was update - Multi Select Answer',
                    obj: result
                });
            });
        }
    });
});

router.post('/update/number_answer', function (req, res, next) {

    Report.findOne({ idReport: req.body.idReport }, function (err, reportResponse) {
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
            reportResponse.number_answer = req.body.number_answer;
            reportResponse.save(function (err, result) {
                res.status(201).json({
                    message: 'Report was update - Number Answer',
                    obj: result
                });
            });
        }
    });
});

router.post('/update/radio_answer', function (req, res, next) {

    Report.findOne({ idReport: req.body.idReport }, function (err, reportResponse) {
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
            reportResponse.radio_answer = req.body.radio_answer;
            reportResponse.save(function (err, result) {
                res.status(201).json({
                    message: 'Report was update - Radio Answer',
                    obj: result
                });
            });
        }
    });
});

router.post('/update/select_answer', function (req, res, next) {

    Report.findOne({ idReport: req.body.idReport }, function (err, reportResponse) {
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
            reportResponse.select_answer = req.body.select_answer;
            reportResponse.save(function (err, result) {
                res.status(201).json({
                    message: 'Report was update - Select Answer',
                    obj: result
                });
            });
        }
    });
});

router.post('/update/table_answer', function (req, res, next) {

    Report.findOne({ idReport: req.body.idReport }, function (err, reportResponse) {
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
            reportResponse.table_answer = req.body.table_answer;
            reportResponse.save(function (err, result) {
                res.status(201).json({
                    message: 'Report was update - Table Answer',
                    obj: result
                });
            });
        }
    });
});

router.post('/update/text_answer', function (req, res, next) {

    Report.findOne({ idReport: req.body.idReport }, function (err, reportResponse) {
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
            reportResponse.select_answer = req.body.select_answer;
            reportResponse.save(function (err, result) {
                res.status(201).json({
                    message: 'Report was update - Text Answer',
                    obj: result
                });
            });
        }
    });
});

router.post('/update/textarea_answer', function (req, res, next) {

    Report.findOne({ idReport: req.body.idReport }, function (err, reportResponse) {
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
            reportResponse.textarea_answer = req.body.textarea_answer;
            reportResponse.save(function (err, result) {
                res.status(201).json({
                    message: 'Report was update - Textarea Answer',
                    obj: result
                });
            });
        }
    });
});

router.post('/update/time_answer', function (req, res, next) {

    Report.findOne({ idReport: req.body.idReport }, function (err, reportResponse) {
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
            reportResponse.time_answer = req.body.time_answer;
            reportResponse.save(function (err, result) {
                res.status(201).json({
                    message: 'Report was update - Time Answer',
                    obj: result
                });
            });
        }
    });
});

router.post('/update/week_answer', function (req, res, next) {

    Report.findOne({ idReport: req.body.idReport }, function (err, reportResponse) {
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
            reportResponse.week_answer = req.body.week_answer;
            reportResponse.save(function (err, result) {
                res.status(201).json({
                    message: 'Report was update - Week Answer',
                    obj: result
                });
            });
        }
    });
});

router.delete('/:id', function (req, res, next) {
    Report.findById(req.params.id, function (err, template) {
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
                message: 'The report was deleted',
                obj: result
            });
        })
    });
});


module.exports = router;