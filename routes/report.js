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

    var report = new Report({
        idReport: req.body.idReport,
        date_answer: req.body.date_answer
    });

    report.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            })
        }

        res.status(201).json({
            message: 'Report was updated - Date Answer',
            obj: result
        })
    })
});

router.post('/update/datetime_answer', function (req, res, next) {

    var report = new Report({
        idReport: req.body.idReport,
        datetime_answer: req.body.datetime_answer
    });

    report.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            })
        }

        res.status(201).json({
            message: 'Report was updated - Datetime Answer',
            obj: result
        })
    })
});

router.post('/updateList_answer', function (req, res, next) {

    var site = new Report({
        id_report: { type: String, required: true },
        list_answer: { type: String }
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

router.post('/updateMonth_answer', function (req, res, next) {

    var site = new Report({
        id_report: { type: String, required: true },
        month_answer: { type: String }
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

router.post('/updateMultiselect_answer', function (req, res, next) {

    var site = new Report({
        id_report: { type: String, required: true },
        multiselect_answer: { type: String }
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

router.post('/updateNumber_answer', function (req, res, next) {

    var site = new Report({
        id_report: { type: String, required: true },
        number_answer: { type: String }
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

router.post('/updateRadio_answer', function (req, res, next) {

    var site = new Report({
        id_report: { type: String, required: true },
        radio_answer: { type: String }
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

router.post('/updateSelect_answer', function (req, res, next) {

    var site = new Report({
        id_report: { type: String, required: true },
        select_answer: { type: String }
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

router.post('/updateTable_answer', function (req, res, next) {

    var site = new Report({
        id_report: { type: String, required: true },
        table_answer: { type: String }
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

router.post('/updateText_answer', function (req, res, next) {

    var site = new Report({
        id_report: { type: String, required: true },
        text_answer: { type: String }
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

router.post('/updateTextarea_answer', function (req, res, next) {

    var site = new Report({
        id_report: { type: String, required: true },
        textarea_answer: { type: String }
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

router.post('/updateTime_answer', function (req, res, next) {

    var site = new Report({
        id_report: { type: String, required: true },
        time_answer: { type: String }
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

router.post('/updateWeek_answer', function (req, res, next) {

    var site = new Report({
        id_report: { type: String, required: true },
        week_answer: { type: String }
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