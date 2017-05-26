const express = require("express");
var router = express.Router();
const Visit = require("./../models/Visits");
const Report = require("./../models/Report");
const ReportImage = require("./../models/ReportImages");

router.use('/', function (req, res, next) {
    jwt.verify(req.query.token, 'SDLHW', function (err, decoded) {
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
    var decoded = jwt.decode(req.query.token);
    Visit.find({author:decoded.user._id}).then(function (visits) {
        res.send(visits);
    });
});

router.get('/basicInformation', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Visit.find({author:user,}, function(visits){
        let visitsToSend = [];
        for (let visit of visits) {
            visitsToSend.push({ visitId: visit.visitId });
        }
        res.send(visitsToSend);
    });
});

router.post('/', function (req, res, next) {

    Visit.findOne({ siteId: '' + req.body.siteId, author: req.body.author }, function (err, visitResponse) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            });
        }
        if (!visitResponse) {
            //Not founded
            var visitEntry = new Visit({
                siteId: req.body.siteId,
                name: req.body.name,
                visitId: req.body.visitId,
                author: req.body.author,
                creationDate: req.body.creationDate
            });

            visitEntry.save(function (err, result) {
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
        }
        else {
            //Founded

            visitResponse.siteId = req.body.siteId;
            visitResponse.visitId = req.body.visitId;
            visitResponse.author = req.body.author;
            visitResponse.creationDate = req.body.creationDate;

            visitResponse.save(function (err, visitRes) {
                res.status(201).json({
                    message: 'Visit already exits was modified',
                    obj: visitRes
                });
            });
        }
    })
});

router.delete('/:visitId', function (req, res, next) {

    Visit.findOneAndRemove({ visitId: req.params.visitId }, function (err) {
        if (err) {
            res.status(500).json({
                title: 'An error ocurred',
                error: err
            });
        }

        Report.find({ visitId: req.params.visitId }, function (err, reportsRes) {

            let reports = [];
            for (let reportItem of reportsRes) {
                reports.push(reportItem.reportId);
            }

            ReportImage.remove({ reportId: { $in: reports } }, function (err) {
                if (err) {
                    res.status(500).json({
                        title: 'An error ocurred',
                        error: err
                    });
                }
                Report.remove({ visitId: { $in: [req.params.visitId] } }, function (err) {
                    if (err) {
                        res.status(500).json({
                            title: 'An error ocurred',
                            error: err
                        });
                    }
                    res.status(201).json({
                        message: 'The visit was deleted',
                    });
                });
            });

        });
    });

    /*deleteVisits(req.params.visitId).then(function () {
        res.status(201).json({
            message: 'The visit was deleted',
            obj: result
        });
    }).catch(function (err) {
        res.status(500).json({
            title: 'An error ocurred',
            error: err
        });
    });
    */


    /*
        Visit.find({ visitId: req.params.visitId }, function (err, visit) {
            if (err) {
                return res.status(500).json({
                    title: 'An error ocurred',
                    error: err
                });
            }
    
            if (!visit) {
                return res.status(500).json({
                    title: 'No Visit Founded',
                    error: { message: "Visit not found" }
                });
            }
    
            Report.find({ visitId: req.params.visitId }, function (err, reportsRes) {
                if (err) {
                    return res.status(500).json({
                        title: 'An error ocurred',
                        error: err
                    });
                }
    
                if (!reportRes) {
                    return res.status(500).json({
                        title: 'No Reports Founded',
                        error: { message: "Reports not found" }
                    });
                }
                for (reportToDelete of reportsRes) {
    
    
    
                    reportRes.remove(function (err, result) {
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
                    });
                }
            });
    
            visit.remove(function (err, result) {
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
        */
});

function deleteVisits(visitId) {
    return new Promise(function (resolve, reject) {
        findVisitsRelated(visitId)
            .then(function (visits) {
                resolve();
            }).catch(function (err) {
                reject(err);
            })

    });
}

function findVisitsRelated(visitId) {
    return new Promise(function (resolve, reject) {
        Visit.find({ visitId: visitId }, function (err, visits) {
            if (err) {
                reject("Error en findVisitsRelated" + err);
            }
            if (visits.length == 0) {
                resolve();
            }
            else {
                removeVisitRelated(visits[0]).then(function () {
                    resolve();
                })
                    .catch(function (err) {
                        reject(err);
                    });
            }
        });
    });
}

function removeVisitRelated(visit) {
    return new Promise(function (resolve, reject) {
        visit.remove(function (err, res) {
            if (err) {
                reject("Error en RemoveVisitRelated" + err);
            }
            findReportsRelated(visit.visitId).then(function () {
                resolve();
            });
        });
    });
}

/* Find Reports Related */
function findReportsRelated(visitId) {
    return new Promise(function (resolve, reject) {
        Report.find({ visitId: visitId }, function (err, reports) {
            if (err) {
                reject("Error en findReportsRelated" + err);
            }
            if (reports.length == 0) {
                resolve();
            }
            else {
                removeAllReportsRelated(reports).then(function () {
                    resolve();
                });
            }
        });
    });
};

function removeReportsRelated(report) {
    return new Promise(function (resolve, reject) {
        report.remove(function (err, res) {
            if (err) {
                reject("Error en removeReportsRelated " + err);
            }
            else {
                resolve();
            }
        });
    });
};

function removeAllReportsRelated(reports) {
    let promisesRemove = [];
    let promisesFind = [];
    for (reportToDelete of reports) {
        promisesRemove.push(removeReportsRelated(reportToDelete));
    }
    return new Promise(function (resolve, reject) {
        Promise.all(promisesRemove).then(function () {
            resolve();
        }).catch(function (err) {
            reject("Error en RemoveAllReportsRelated" + err);
        });
    });
}

/* Find Images Reports */
function findImagesReportsRelated(reportId) {
    return new Promise(function (resolve, reject) {
        ReportImage.find({ reportId: reportId }, function (err, reportImages) {
            if (err) {
                reject(err);
            }
            if (reportImages == 0) {
                resolve();
            }
            else {
                removeAllImagesReportsRelated(reportImages).then(function () {
                    resolve(reportsImages);
                });
            }
        });
    });
}
function removeImagesReportsRelated(reportImage) {
    return new Promise(function (resolve, reject) {
        reportImage.remove(function (err, res) {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
}
function removeAllImagesReportsRelated(reportImages) {
    let promisesRemove = [];
    for (reportImagesToDelete of reportImages) {
        promisesRemove.push(removeImagesReportsRelated(reportImagesToDelete));
    }
    return new Promise(function (resolve, reject) {
        Promise.all(promisesRemove).then(function () {
            resolve();
        }).catch(function (err) {
            reject(err);
        });
    });
}

module.exports = router;