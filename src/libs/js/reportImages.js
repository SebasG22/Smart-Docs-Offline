let indexDb = require("./indexedDb");
module.exports = {
    "reportsImages": [],
    "getReportsImages": function () {
        let reference = this;
        return new Promise(function (resolve, rejec) {
            indexDb.getReportsImages().then(function (reportsImageResponse) {
                reference.reportsImages = reportsImageResponse;
                resolve(reportsImageResponse);
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    uploadReportsImages: function () {
        let reference = this;
        let reportsToImgCreate = [];
        reference.getReportsImages().then(function () {
            for (let reportImgToCreate of reference.reportsImages) {
                this["reportImgToCreateUpd" + cont] = reference.uploadReportCreate({
                    reportImgId: reportImgToCreate.reportImgId,
                    reportId: reportImgToCreate.reportId,
                    images: reportImgToCreate.images,
                    author: reportImgToCreate.author,
                    lastModification: reportImgToCreate
                });
                reportsToImgCreate.push(this["reportImgToCreateUpd" + cont]);
            }
        });
        return Promise(function (resolve, reject) {
            Promise.all(reportsToImgCreate).then(function () {
                reference.uploadReportsImages1().then(function () {
                    resolve();
                });
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    uploadReportsImages1: function () {
        let reference = this;
        let reportsToImgCreate = [];
        reference.getReportsImages().then(function () {
            for (let reportImgToCreate of reference.reportsImages) {
                this["reportImgToCreateUpd" + cont] = reference.uploadReportUpdate({
                    reportImgId: reportImgToCreate.reportImgId,
                    reportId: reportImgToCreate.reportId,
                    images_1: reportImgToCreate.images_1,
                });
                reportsToImgCreate.push(this["reportImgToCreateUpd" + cont]);
            }
        });
        return Promise(function (resolve, reject) {
            Promise.all(reportsToImgCreate).then(function () {
                resolve();
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    uploadReportCreate: function (dataToUpdate) {
        return new Promise(function (resolve, reject) {
            $.post("https://smart-docs.herokuapp.com/reportsImg/", {
                reportImgId: dataToUpdate.reportImgId,
                reportId: dataToUpdate.reportId,
                images: dataToUpdate.images,
                author: dataToUpdate.author,
                lastModification: dataToUpdate.lastModification
            }).done(function () {
                resolve();
            });
        });
    },
    uploadReportUpdate: function (dataToUpdate) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: 'https://smart-docs.herokuapp.com/reportsImg/update/' + prop,
                type: 'PATCH',
                data: { reportImgId: dataToUpdate.reportImgId, reportId: dataToUpdate.reportId, image_1: dataToUpdate.image_1 },
                dataType:'json',
                error: function (jqXHR, textStatus, errorThrown) {
                    // log the error to the console
                    console.log("The following error occured: " + textStatus, errorThrown);
                    reject();
                },
                complete: function () {
                    resolve();
                }
            });
        });
    }

}