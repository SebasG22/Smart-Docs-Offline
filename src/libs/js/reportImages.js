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
        console.log("Upload Reports Images on Action");
        let reference = this;
        let reportsToImgCreate = [];
        let cont = 0;
        reference.getReportsImages().then(function () {
            for (let reportImgToCreate of reference.reportsImages) {
                this["reportImgToCreateUpd" + cont] = reference.uploadReportCreate({
                    reportImgId: reportImgToCreate.reportImgId,
                    reportId: reportImgToCreate.reportId,
                    images: JSON.stringify(reportImgToCreate.images),
                    author: reportImgToCreate.author,
                    lastModification: reportImgToCreate.lastModification
                });
                reportsToImgCreate.push(this["reportImgToCreateUpd" + cont]);
            }
        });
        return new Promise(function (resolve, reject) {
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
        let cont = 0;
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
        return new Promise(function (resolve, reject) {
            Promise.all(reportsToImgCreate).then(function () {
                resolve();
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    uploadReportCreate: function (dataToUpdate) {
        return new Promise(function (resolve, reject) {
            $.post("https://smart-docs.herokuapp.com/reportsImg/", 
                dataToUpdate
            ).done(function () {
                resolve();
            });
        });
    },
    uploadReportUpdate: function (dataToUpdate) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: 'https://smart-docs.herokuapp.com/reportsImg/update/',
                type: 'PATCH',
                data: { reportImgId: dataToUpdate.reportImgId, reportId: dataToUpdate.reportId, image_1: JSON.stringify(dataToUpdate.image_1) },
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