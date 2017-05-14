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
    "uploadReportToCloud": function () {
        console.log("Upload reports to Cloud on Action");
        let reference = this;
        reference.getReports().then(function (reportsResponse) {
            let cont = 0;
            let reportsToUpdate = [];
            for (let reportToUpd of reference.reports) {
                if (!reportToUpd.cloud) {
                    this["reportToUpdate" + cont] = reference.uploadReport({
                        idReport: reportToUpd.idReport,
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
                Promise.all(visitsToUpdate).then(function (values) {
                    console.log("Visits Update ", values);
                    resolve();
                }).catch(function (err) {
                    reject(err);
                })
            });
        });
    },
    "uploadReport": function (dataToUpdate) {
        let reference = this;
        let updateReportLocal = new Promise(function (resolve, reject) {
            indexDb.updateReport(dataToUpdate.reportId, "cloud", true).then(function () {
                resolve();
            });
        });
        let updateReportCloud = new Promise(function (resolve, reject) {
            $.post("https://smart-docs.herokuapp.com/reports/", {
                idReport: dataToUpdate.idReport,
                templateId: dataToUpdate.templateId,
                visitId: dataToUpdate.visitId,
                status: dataToUpdate.status,
                lastModification: dataToUpdate.lastModification,
                author: dataToUpdate.author,
                completedDate: dataToUpdate.completedDate,
                creationDate: dataToUpdate.creationDate,
            })
                .done(function () {
                    updateReportProCloud.then(function(){
                        resolve();
                    });
                });
        });

        let updateReportProCloud = new Promise(function (resolve, reject) {
            let answerDate = reference.uploadReportProp(dataToUpdate.idReport, "date_answer", dataToUpdate.date_answer);
            let answerDateTime = reference.uploadReportProp(dataToUpdate.idReport, "datetime_answer", dataToUpdate.date_answer);
            let answerWeek = reference.uploadReportProp(dataToUpdate.idReport, "week_answer", dataToUpdate.date_answer);
            let answerMonth = reference.uploadReportProp(dataToUpdate.idReport, "month_answer", dataToUpdate.date_answer);
            let answerText = reference.uploadReportProp(dataToUpdate.idReport, "text_answer", dataToUpdate.date_answer);
            let answerTextArea = reference.uploadReportProp(dataToUpdate.idReport, "textarea_answer", dataToUpdate.date_answer);
            let answerNumber = reference.uploadReportProp(dataToUpdate.idReport, "number_answer", dataToUpdate.date_answer);
            let answerTime = reference.uploadReportProp(dataToUpdate.idReport, "time_answer", dataToUpdate.date_answer);
            let answerRadio = reference.uploadReportProp(dataToUpdate.idReport, "radio_answer", dataToUpdate.date_answer);
            let answerCheckbox = reference.uploadReportProp(dataToUpdate.idReport, "checkbox_answer", dataToUpdate.date_answer);
            let answerSelect = reference.uploadReportProp(dataToUpdate.idReport, "select_answer", dataToUpdate.date_answer);
            let answerMultiSelect = reference.uploadReportProp(dataToUpdate.idReport, "multiselect_answer", dataToUpdate.date_answer);
            let answerList = reference.uploadReportProp(dataToUpdate.idReport, "list_answer", dataToUpdate.date_answer);
            let answerTable = reference.uploadReportProp(dataToUpdate.idReport, "table_answer", dataToUpdate.date_answer);

            Promise.all([answerDate, answerDateTime, answerTime, answerWeek, answerMonth, answerText,
                answerTextArea, answerNumber, answerTime, answerRadio, answerCheckbox, answerSelect,
                answerMultiSelect, answerList, answerTable]).then(function(){
                    resolve();
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
    "uploadReportProp": function (idReport, prop, valuePro) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: 'https://smart-docs.herokuapp.com/reports/update/' + prop,
                type: 'PATCH',
                data: { idReport: idReport, prop: valuePro },
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
    getReportsSaveonCloud: function () {
        let reference = this;
        return new Promise(function (resolve, reject) {
            $.ajax({
                method: "GET",
                url: "https://smart-docs.herokuapp.com/reports/",
            })
                .done(function (visitSavedCloud) {
                    let cont = 0;
                    let updateVisits = [];
                    for (let siteRes of visitSavedCloud) {
                        this["updateVisit" + cont] = indexDb.addVisit(siteRes.visitId, siteRes.siteId, siteRes.name, siteRes.author, true, siteRes.creationDate);
                        updateVisits.push(this["updateVisit" + cont]);
                        cont++;
                    }
                    if (updateVisits.length > 0) {
                        Promise.all(updateVisits).then(function () {
                            resolve();
                        });
                    }
                    else {
                        resolve();
                    }
                });
        });
    },
}