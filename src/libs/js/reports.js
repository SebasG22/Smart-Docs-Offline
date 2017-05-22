let indexDb = require("./indexedDb");
module.exports = {
    "reports": [],
    "reportsLog": [],
    "getReportsLog": function () {
        let reference = this;
        return reference.reportsLog;
    },
    "reportSelected": {},
    "getReports": function () {
        let reference = this;
        console.log("Index Db", indexDb);
        return new Promise(function (resolve, reject) {
            indexDb.getReports().then(function (reportsResponse) {
                reference.reports = reportsResponse;
                resolve(reportsResponse);
            }).catch(function (err) {
                reject(err);
            })
        });
    },
    "uploadReportToCloud": function (reportsResponse) {
        console.log("Upload reports to Cloud on Action");
        let reference = this;
        let cont = 0;
        let reportsToUpdate = [];
        for (let reportToUpd of reportsResponse) {
            if (!reportToUpd.cloud) {
                this["reportToUpdate" + cont] = reference.uploadReport({
                    reportId: reportToUpd.reportId,
                    templateId: reportToUpd.templateId,
                    visitId: reportToUpd.visitId,
                    status: reportToUpd.status,
                    lastModification: reportToUpd.lastModification,
                    author: reportToUpd.author,
                    completedDate: reportToUpd.completedDate,
                    creationDate: reportToUpd.creationDate,
                    checkbox_answer: reportToUpd.checkbox_answer,
                    date_answer: reportToUpd.date_answer,
                    datetime_answer: reportToUpd.datetime_answer,
                    list_answer: reportToUpd.list_answer,
                    month_answer: reportToUpd.month_answer,
                    multiselect_answer: reportToUpd.multiselect_answer,
                    number_answer: reportToUpd.number_answer,
                    radio_answer: reportToUpd.radio_answer,
                    select_answer: reportToUpd.select_answer,
                    table_answer: reportToUpd.table_answer,
                    text_answer: reportToUpd.text_answer,
                    textarea_answer: reportToUpd.textarea_answer,
                    time_answer: reportToUpd.time_answer,
                    week_answer: reportToUpd.week_answer
                });
                reportsToUpdate.push(this["reportToUpdate" + cont]);
                cont += 1;
            }
        }
        return new Promise(function (resolve, reject) {
            Promise.all(reportsToUpdate).then(function (values) {
                console.log("Reports Update ", values);
                resolve();
            }).catch(function (err) {
                reject(err);
            })
        });
    },
    "uploadReport": function (dataToUpdate) {
        console.log("Upload Reports to Cloud");
        let reference = this;
        let updateReportLocal = new Promise(function (resolve, reject) {
            indexDb.updateReport(dataToUpdate.reportId, "cloud", true).then(function () {
                resolve();
            });
        });
        let updateReportCloud = new Promise(function (resolve, reject) {
            $.post("https://smart-docs.herokuapp.com/reports/", {
                reportId: dataToUpdate.reportId,
                templateId: dataToUpdate.templateId,
                visitId: dataToUpdate.visitId,
                status: dataToUpdate.status,
                lastModification: dataToUpdate.lastModification,
                author: dataToUpdate.author,
                completedDate: dataToUpdate.completedDate,
                creationDate: dataToUpdate.creationDate,
            })
                .done(function () {
                    let updateReportProCloud = new Promise(function (resolve, reject) {
                        let answerDate = reference.uploadReportProp(dataToUpdate.reportId, "date_answer", dataToUpdate.date_answer);
                        let answerDateTime = reference.uploadReportProp(dataToUpdate.reportId, "datetime_answer", dataToUpdate.datetime_answer);
                        let answerWeek = reference.uploadReportProp(dataToUpdate.reportId, "week_answer", dataToUpdate.week_answer);
                        let answerMonth = reference.uploadReportProp(dataToUpdate.reportId, "month_answer", dataToUpdate.month_answer);
                        let answerText = reference.uploadReportProp(dataToUpdate.reportId, "text_answer", dataToUpdate.text_answer);
                        let answerTextArea = reference.uploadReportProp(dataToUpdate.reportId, "textarea_answer", dataToUpdate.textarea_answer);
                        let answerNumber = reference.uploadReportProp(dataToUpdate.reportId, "number_answer", dataToUpdate.number_answer);
                        let answerTime = reference.uploadReportProp(dataToUpdate.reportId, "time_answer", dataToUpdate.time_answer);
                        let answerRadio = reference.uploadReportProp(dataToUpdate.reportId, "radio_answer", dataToUpdate.radio_answer);
                        let answerCheckbox = reference.uploadReportProp(dataToUpdate.reportId, "checkbox_answer", dataToUpdate.checkbox_answer);
                        let answerSelect = reference.uploadReportProp(dataToUpdate.reportId, "select_answer", dataToUpdate.select_answer);
                        let answerMultiSelect = reference.uploadReportProp(dataToUpdate.reportId, "multiselect_answer", dataToUpdate.multiselect_answer);
                        let answerList = reference.uploadReportProp(dataToUpdate.reportId, "list_answer", dataToUpdate.list_answer);
                        let answerTable = reference.uploadReportProp(dataToUpdate.reportId, "table_answer", dataToUpdate.table_answer);

                        Promise.all([answerDate, answerDateTime, answerTime, answerWeek, answerMonth, answerText,
                            answerTextArea, answerNumber, answerTime, answerRadio, answerCheckbox, answerSelect,
                            answerMultiSelect, answerList, answerTable]).then(function () {
                                resolve();
                            });
                    });
                    updateReportProCloud.then(function () {
                        resolve();
                    });
                });
        });


        return new Promise(function (resolve, reject) {
            Promise.all([updateReportLocal, updateReportCloud]).then(function () {
                resolve();
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    "uploadReportProp": function (reportId, prop, valuePro) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: 'https://smart-docs.herokuapp.com/reports/update/' + prop,
                type: 'PATCH',
                data: { reportId: reportId, content: JSON.stringify(valuePro) },
                dataType: 'json',
                error: function (jqXHR, textStatus, errorThrown) {
                    // log the error to the console
                    console.log("The following error occured: " + textStatus, errorThrown);
                    reject();
                },
                complete: function () {
                    console.log(prop + " was updated ");
                    resolve();
                }
            });
        });
    },
    deleteReports: function () {
        return new Promise(function (resolve, reject) {
            indexDb.deleteReports().then(function () {
                resolve();
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    "validateReportsLocally": function (reportsOnCloud, reportsLocally) {
        let reference = this;
        let reportsToDelete = [];
        //Iterate on Reports Locally
        for (let reportLocal of reportsLocally) {
            //Filter on reports Cloud
            let reportFiltered = reportsOnCloud.filter(function (report) {
                return report.idReport == reportLocal.idReport;
            });

            if (reportFiltered.length == 0) {
                reportsToDelete.push(indexDb.deleteReports(reportLocal.reportId));
                reportsToDelete.push(indexDb.deleteReportsImage(reportLocal.reportId));
            }
        }

        //Iterate on Reports Cloud
        for (let reportCloud of reportsOnCloud) {
            //Filter on reports Locally
            let reportFiltered = reportsLocally.filter(function (report) {
                return report.idReport == reportCloud.idReport;
            });

            if (reportFiltered.length == 0) {
                reportsToDelete.push(reference.getReportOnCloudToSaveLocally(reportCloud.reportId));
            }
        }

        return new Promise(function (resolve,reject) {
            Promise.all(reportsToDelete).then(function () {
                resolve();
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    "getReportOnCloudToSaveLocally": function (reportId) {
        let reference = this;

        return new Promise(function (resolve, reject) {
            $.ajax({
                method: "GET",
                url: "https://smart-docs.herokuapp.com/reports/getAllFieldsReport/" + reportId,
            })
                .done(function (reportResponse) {
                    reference.saveReportsLocally(reportResponse)
                    .then(function(){
                        resolve();
                    })
                    .catch(function(err){
                        reject(err);
                    });
                });
        });
    },
    "saveReportsLocally": function (reportResponse) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let saveReportLocal = reference.saveReportOnCloudToSaveLocally(reportResponse[0]);
            let saveReportImagesLocal = reference.saveReportImageOnCloudToSaveLocally(reportResponse[0]);

            Promise.all([saveReportLocal,saveReportImagesLocal]).then(function () {
                resolve();
            }).catch(function(err){
                reject(err);
            });
        });
    },
    "saveReportOnCloudToSaveLocally": function (report) {
        return new Promise(function (resolve, reject) {
            indexDb.addReportAllProperties(report.reportId, report.templateId, report.visitId, report.status, report.author, true,
                report.creationDate, report.completedDate, report.lastModification, report.checkbox_answer, report.date_answer, report.datetime_answer,
                report.list_answer, report.month_answer, report.multiselect_answer, report.number_answer, report.radio_answer, report.select_answer, report.table_answer,
                report.text_answer, report.textarea_answer, report.time_answer, report.week_answer).then(function(){
                    resolve();
                }).catch(function(err){
                    reject(err);
                });
        });
    },
    "saveReportImageOnCloudToSaveLocally": function (report) {
        return new Promise(function (resolve, reject) {
            indexDb.addReportImages(report.reportImgId, report.reportId, report.images, report.author, report.image_1, true)
                .then(function () {
                    resolve();
                })
                .catch(function (err) {
                    reject(err);
                })
        });
    },
    getReportsSaveonCloud: function () {
        let reference = this;
        return new Promise(function (resolve, reject) {
            $.ajax({
                method: "GET",
                url: "https://smart-docs.herokuapp.com/reports/",
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log("request failed" + textStatus);
                }
            })
                .done(function (reportsSaveonCloud) {
                    resolve(reportsSaveonCloud);
                });
        });
    },
    saveReportsSaveonCloud: function (reportsSaveOnCloud) {
        console.log("Save reports on the cloud");
        let reference = this;
        return new Promise(function (resolve, reject) {
            let cont = 0;
            let updateReports = [];
            for (let reportRes of reportsSaveOnCloud) {
                this["updateReport" + cont] = indexDb.addReport(reportRes.reportId, reportRes.templateId,
                    reportRes.visitId, reportRes.status, reportRes.author, true);
                updateReports.push(this["updateReport" + cont]);
                cont++;
            }
            if (updateReports.length > 0) {
                Promise.all(updateReports).then(function () {
                    let cont = 0;
                    let updateReportsPro = [];
                    for (let reportRes of reportsSaveOnCloud) {
                        this["updateReportProCheck" + cont] = indexDb.updateReport(reportRes.reportId, "checkbox_answer", reportRes.checkbox_answer);
                        updateReportsPro.push(this["updateReportProCheck" + cont]);
                        this["updateReportProDate" + cont] = indexDb.updateReport(reportRes.reportId, "date_answer", reportRes.date_answer);
                        updateReportsPro.push(this["updateReportProDate" + cont]);
                        this["updateReportProDatetime" + cont] = indexDb.updateReport(reportRes.reportId, "datetime_answer", reportRes.datetime_answer);
                        updateReportsPro.push(this["updateReportProDatetime" + cont]);
                        this["updateReportProTime" + cont] = indexDb.updateReport(reportRes.reportId, "time_answer", reportRes.time_answer);
                        updateReportsPro.push(this["updateReportProTime" + cont]);
                        this["updateReportProWeek" + cont] = indexDb.updateReport(reportRes.reportId, "week_answer", reportRes.week_answer);
                        updateReportsPro.push(this["updateReportProWeek" + cont]);
                        this["updateReportProMonth" + cont] = indexDb.updateReport(reportRes.reportId, "month_answer", reportRes.month_answer);
                        updateReportsPro.push(this["updateReportProMonth" + cont]);
                        this["updateReportProText" + cont] = indexDb.updateReport(reportRes.reportId, "text_answer", reportRes.text_answer);
                        updateReportsPro.push(this["updateReportProText" + cont]);
                        this["updateReportProTextarea" + cont] = indexDb.updateReport(reportRes.reportId, "textarea_answer", reportRes.textarea_answer);
                        updateReportsPro.push(this["updateReportTextarea" + cont]);
                        this["updateReportProNumber" + cont] = indexDb.updateReport(reportRes.reportId, "number_answer", reportRes.number_answer);
                        updateReportsPro.push(this["updateReportProNumber" + cont]);
                        this["updateReportProRadio" + cont] = indexDb.updateReport(reportRes.reportId, "radio_answer", reportRes.radio_answer);
                        updateReportsPro.push(this["updateReportProRadio" + cont]);
                        this["updateReportProSelect" + cont] = indexDb.updateReport(reportRes.reportId, "select_answer", reportRes.select_answer);
                        updateReportsPro.push(this["updateReportProSelect" + cont]);
                        this["updateReportProMultiselect" + cont] = indexDb.updateReport(reportRes.reportId, "multiselect_answer", reportRes.multiselect_answer);
                        updateReportsPro.push(this["updateReportProMultiselect" + cont]);
                        this["updateReportProList" + cont] = indexDb.updateReport(reportRes.reportId, "list_answer", reportRes.list_answer);
                        updateReportsPro.push(this["updateReportProList" + cont]);
                        this["updateReportProTable" + cont] = indexDb.updateReport(reportRes.reportId, "table_answer", reportRes.table_answer);
                        updateReportsPro.push(this["updateReportProTable" + cont]);
                    }
                    Promise.all(updateReportsPro).then(function () {
                        resolve();
                    }).catch(function (err) {
                        reject(err);
                    })
                });
            }
            else {
                resolve();
            }


        });
    },
    changeStatistic: function () {
        let reference = this;
        console.log("Change Statistic");
        return new Promise(function (resolve, reject) {
            indexDb.getReports().then(function (reportsResponse) {
                let totalReports = reportsResponse.length;
                $("#statisticTotal").text(totalReports);
                let draft_reports = reportsResponse.filter(function (report) {
                    return report.status == "SM-Status001"
                });
                $("#statisticDraft").text(draft_reports.length);
                let completed_reports = reportsResponse.filter(function (report) {
                    return report.status == "SM-Status001"
                });
                $("#statisticCompleted").text(completed_reports.length);
                resolve();
            }).catch(function (err) {
                reject(err);
            });
        })
    }
}