const express = require("express");
var router = express.Router();
const Report = require("./../models/Report");
const ReportImages = require("./../models/ReportImages");
router.get('/', function (req, res, next) {
    Report.find().then(function (reports) {
        let reportsToSend = [];
        for(let report of reports){
            reportsToSend.push({reportId:report.reportId});
        }
        res.send(reportsToSend);
    });
});


router.get('/getAllFieldsReport/:reportId', function (req, res, next) {
    Report.find().then(function (reports) {
            let reportImagesToSend = [];
        ReportImages.find().then(function (reportsImages) {
            reportsImages.filter(function (reportImg) {
                if(reportImg.reportId == req.params.reportId){
                    reportImagesToSend.push({
                        reportImgId: reportImg.reportImgId,
                        images: reportImg.images,
                        image_1: reportImg.image_1
                    });
                }
            });
            let reportToSend = [];
            let objToSend = {};
            let reportFiltered = reports.filter(function (report) {
                if (report.reportId == req.params.reportId) {
                    return report;
                }
            });
            objToSend._id = reportFiltered[0]._id;
            objToSend.reportId = reportFiltered[0].reportId;
            objToSend.visitId = reportFiltered[0].visitId;
            objToSend.templateId = reportFiltered[0].templateId;
            objToSend.status = reportFiltered[0].status;
            objToSend.creationDate = reportFiltered[0].creationDate;
            objTosend.completedDate = reportFiltered[0].completedDate;
            objToSend.lastModification = reportFiltered[0].lastModification,
            objToSend.author = reportFiltered[0].author,
            objToSend.checkbox_answer = reportFiltered[0].checkbox_answer,
            objToSend.date_answer = reportFiltered[0].date_answer,
            objToSend.datetime_answer = reportFiltered[0].datetime_answer,
            objToSend.list_answer = reportFiltered[0].list_answer,
            objToSend.month_answer = reportFiltered[0].month_answer,
            objToSend.multiselect_answer = reportFiltered[0].multiselect_answer,
            objToSend.number_answer = reportFiltered[0].number_answer,
            objToSend.radio_answer = reportFiltered[0].radio_answer,
            objToSend.select_answer = reportFiltered[0].select_answer,
            objToSend.table_answer = reportFiltered[0].table_answer,
            objToSend.text_answer = reportFiltered[0].text_answer,
            objToSend.textarea_answer = reportFiltered[0].textarea_answer,
            objToSend.time_answer = reportFiltered[0].time_answer,
            objToSend.week_answer = reportFiltered[0].week_answer,
            objToSend.reportImages = reportImagesToSend
            reportToSend.push(objToSend);
        res.send(reportToSend);
    });
});
});

router.get('/:visitId', function (req, res, next) {
    Report.find().then(function (reports) {
        let reportFiltered = reports.filter(function (report) {
            return report.visitId == req.params.visitId;
        });
        res.send(reportFiltered);
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
                reportId: report.reportId,
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

    Report.findOne({ reportId: req.body.reportId }, function (err, reportResponse) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            });
        }
        if (!reportResponse) {
            //Not founded
            var report = new Report({
                reportId: req.body.reportId,
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

        }
        else {
            //Founded
            reportResponse.status = req.body.status;
            reportResponse.lastModification = req.body.lastModification;
            reportResponse.author = req.body.author;
            reportResponse.completedDate = req.body.completedDate;

            reportResponse.save(function (err, result) {
                res.status(201).json({
                    message: 'Report was update',
                    obj: result
                });
            });
        }
    });
});

router.patch('/update/checkbox_answer', function (req, res, next) {

    Report.findOne({ reportId: req.body.reportId }, function (err, reportResponse) {
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
            reportResponse.checkbox_answer = JSON.parse(req.body.content);
            reportResponse.save(function (err, result) {
                res.status(201).json({
                    message: 'Report was update - checkbox Answer',
                    obj: result
                });
            });
        }
    });
});

router.patch('/update/date_answer', function (req, res, next) {

    Report.findOne({ reportId: req.body.reportId }, function (err, reportResponse) {
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
            reportResponse.date_answer = JSON.parse(req.body.content);
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

    Report.findOne({ reportId: req.body.reportId }, function (err, reportResponse) {
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
            reportResponse.datetime_answer = JSON.parse(req.body.content);
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

    Report.findOne({ reportId: req.body.reportId }, function (err, reportResponse) {
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
            reportResponse.list_answer = JSON.parse(req.body.content);
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

    Report.findOne({ reportId: req.body.reportId }, function (err, reportResponse) {
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
            reportResponse.month_answer = JSON.parse(req.body.content);
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

    Report.findOne({ reportId: req.body.reportId }, function (err, reportResponse) {
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
            reportResponse.multiselect_answer = JSON.parse(req.body.content);
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

    Report.findOne({ reportId: req.body.reportId }, function (err, reportResponse) {
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
            reportResponse.number_answer = JSON.parse(req.body.content);
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

    Report.findOne({ reportId: req.body.reportId }, function (err, reportResponse) {
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
            reportResponse.radio_answer = JSON.parse(req.body.content);
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

    Report.findOne({ reportId: req.body.reportId }, function (err, reportResponse) {
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
            reportResponse.select_answer = JSON.parse(req.body.content);
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

    Report.findOne({ reportId: req.body.reportId }, function (err, reportResponse) {
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
            reportResponse.table_answer = JSON.parse(req.body.content);
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

    Report.findOne({ reportId: req.body.reportId }, function (err, reportResponse) {
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
            reportResponse.text_answer = JSON.parse(req.body.content);
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

    Report.findOne({ reportId: req.body.reportId }, function (err, reportResponse) {
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
            reportResponse.textarea_answer = JSON.parse(req.body.content);
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

    Report.findOne({ reportId: req.body.reportId }, function (err, reportResponse) {
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
            reportResponse.time_answer = JSON.parse(req.body.content);
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

    Report.findOne({ reportId: req.body.reportId }, function (err, reportResponse) {
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
            reportResponse.week_answer = JSON.parse(req.body.content);
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
    Report.findById(req.params.id, function (err, reportRes) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            });
        }

        if (!reportRes) {
            return res.status(500).json({
                title: 'No Report Founded',
                error: { message: "Report not found" }
            });
        }
        
        reportRes.remove(function (err, result) {
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