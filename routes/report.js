const express = require("express");
var router = express.Router();
const Report = require("./../models/Report");

router.get('/', function (req, res, next) {
    Report.find().then(function (reports) {
        res.send(reports);
    });
});

router.get('/checkbox_answer/:id', function (req, res, next) {
    Report.findById(req.params.id, function (err, report) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            });
        }

        if (!report) {
            return res.status(500).json({
                title: 'No Report Founded',
                error: { message: "Report not found" }
            });
        }

        res.status(200).json({
            message: 'Report Founded',
            obj: report.checkbox_answer
        });

    });

});

router.get('/date_answer/:id', function (req, res, next) {
    Report.findById(req.params.id, function (err, report) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            });
        }

        if (!report) {
            return res.status(500).json({
                title: 'No Report Founded',
                error: { message: "Report not found" }
            });
        }

        res.status(200).json({
            message: 'Report Founded',
            obj: report.date_answer
        });

    });

});

router.get('/datetime_answer/:id', function (req, res, next) {
    Report.findById(req.params.id, function (err, report) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            });
        }

        if (!report) {
            return res.status(500).json({
                title: 'No Report Founded',
                error: { message: "Report not found" }
            });
        }

        res.status(200).json({
            message: 'Report Founded',
            obj: report.datetime_answer
        });

    });

});

router.get('/list_answer/:id', function (req, res, next) {
    Report.findById(req.params.id, function (err, report) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            });
        }

        if (!report) {
            return res.status(500).json({
                title: 'No Report Founded',
                error: { message: "Report not found" }
            });
        }

        res.status(200).json({
            message: 'Report Founded',
            obj: report.list_answer
        });

    });

});

router.get('/month_answer/:id', function (req, res, next) {
    Report.findById(req.params.id, function (err, report) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            });
        }

        if (!report) {
            return res.status(500).json({
                title: 'No Report Founded',
                error: { message: "Report not found" }
            });
        }

        res.status(200).json({
            message: 'Report Founded',
            obj: report.month_answer
        });

    });

});

router.get('/multiselect_answer/:id', function (req, res, next) {
    Report.findById(req.params.id, function (err, report) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            });
        }

        if (!report) {
            return res.status(500).json({
                title: 'No Report Founded',
                error: { message: "Report not found" }
            });
        }

        res.status(200).json({
            message: 'Report Founded',
            obj: report.multiselect_answer
        });

    });

});

router.get('/number_answer/:id', function (req, res, next) {
    Report.findById(req.params.id, function (err, report) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            });
        }

        if (!report) {
            return res.status(500).json({
                title: 'No Report Founded',
                error: { message: "Report not found" }
            });
        }

        res.status(200).json({
            message: 'Report Founded',
            obj: report.number_answer
        });

    });

});

router.get('/radio_answer/:id', function (req, res, next) {
    Report.findById(req.params.id, function (err, report) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            });
        }

        if (!report) {
            return res.status(500).json({
                title: 'No Report Founded',
                error: { message: "Report not found" }
            });
        }

        res.status(200).json({
            message: 'Report Founded',
            obj: report.radio_answer
        });

    });

});

router.get('/select_answer/:id', function (req, res, next) {
    Report.findById(req.params.id, function (err, report) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            });
        }

        if (!report) {
            return res.status(500).json({
                title: 'No Report Founded',
                error: { message: "Report not found" }
            });
        }

        res.status(200).json({
            message: 'Report Founded',
            obj: report.select_answer
        });

    });

});

router.get('/table_answer/:id', function (req, res, next) {
    Report.findById(req.params.id, function (err, report) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            });
        }

        if (!report) {
            return res.status(500).json({
                title: 'No Report Founded',
                error: { message: "Report not found" }
            });
        }

        res.status(200).json({
            message: 'Report Founded',
            obj: report.table_answer
        });

    });

});

router.get('/text_answer/:id', function (req, res, next) {
    Report.findById(req.params.id, function (err, report) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            });
        }

        if (!report) {
            return res.status(500).json({
                title: 'No Report Founded',
                error: { message: "Report not found" }
            });
        }

        res.status(200).json({
            message: 'Report Founded',
            obj: report.text_answer
        });

    });

});

router.get('/textarea_answer/:id', function (req, res, next) {
    Report.findById(req.params.id, function (err, report) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            });
        }

        if (!report) {
            return res.status(500).json({
                title: 'No Report Founded',
                error: { message: "Report not found" }
            });
        }

        res.status(200).json({
            message: 'Report Founded',
            obj: report.textarea_answer
        });

    });

});

router.get('/time_answer/:id', function (req, res, next) {
    Report.findById(req.params.id, function (err, report) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            });
        }

        if (!report) {
            return res.status(500).json({
                title: 'No Report Founded',
                error: { message: "Report not found" }
            });
        }

        res.status(200).json({
            message: 'Report Founded',
            obj: report.time_answer
        });

    });

});

router.get('/week_answer/:id', function (req, res, next) {
    Report.findById(req.params.id, function (err, report) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            });
        }

        if (!report) {
            return res.status(500).json({
                title: 'No Report Founded',
                error: { message: "Report not found" }
            });
        }

        res.status(200).json({
            message: 'Report Founded',
            obj: report.week_answer
        });

    });

});

router.get('/basicInf/:id', function (req, res, next) {
    Report.findById(req.params.id, function (err, report) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            });
        }

        if (!report) {
            return res.status(500).json({
                title: 'No Report Founded',
                error: { message: "Report not found" }
            });
        }

        res.status(200).json({
            message: 'Report Founded',
            obj: {
                idReport: report.idReport,
                templateId: report.templateId,
                visitId: report.visitId,
                status: report.status,
                lastModification: report.lastModification,
                author: report.author,
                completedDate: report.completedDate,
                creationDate: report.creationDate
            }
        });

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
        creationDate: req.body.creationDate
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

router.patch('/update/checkbox_answer', function (req, res, next) {

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

router.patch('/update/date_answer', function (req, res, next) {

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

router.patch('/update/datetime_answer', function (req, res, next) {

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

router.patch('/update/list_answer', function (req, res, next) {

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

router.patch('/update/month_answer', function (req, res, next) {

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

router.patch('/update/multiselect_answer', function (req, res, next) {

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

router.patch('/update/number_answer', function (req, res, next) {

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

router.patch('/update/radio_answer', function (req, res, next) {

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

router.patch('/update/select_answer', function (req, res, next) {

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

router.patch('/update/table_answer', function (req, res, next) {

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

router.patch('/update/text_answer', function (req, res, next) {

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

router.patch('/update/textarea_answer', function (req, res, next) {

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

router.patch('/update/time_answer', function (req, res, next) {

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

router.patch('/update/week_answer', function (req, res, next) {

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