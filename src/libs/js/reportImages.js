let indexDb = require("./indexedDb");
let message = require("./messages");

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
    uploadReportsImages: function (reportImagesResponse) {
        console.log("Upload Reports Images on Action");
        let reference = this;
        let reportsToImgCreate = [];
        let cont = 0;
        for (let reportImgToCreate of reportImagesResponse) {
            if (!reportImgToCreate.cloud) {
                this["reportImgToCreateUpd" + cont] = reference.uploadReportCreate({
                    reportImgId: reportImgToCreate.reportImgId,
                    reportId: reportImgToCreate.reportId,
                    images: JSON.stringify(reportImgToCreate.images),
                    author: reportImgToCreate.author,
                    lastModification: reportImgToCreate.lastModification
                });
                reportsToImgCreate.push(this["reportImgToCreateUpd" + cont]);
            }
        }
        return new Promise(function (resolve, reject) {
            Promise.all(reportsToImgCreate).then(function () {
                resolve();
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    uploadReportsImages1: function () {
        let reference = this;
        let reportsToImgCreate = [];
        let cont = 0;
        for (let reportImgToCreate of reference.reportsImages) {
            this["reportImgToCreateUpd" + cont] = reference.uploadReportUpdate({
                reportImgId: reportImgToCreate.reportImgId,
                reportId: reportImgToCreate.reportId,
                image_1: reportImgToCreate.image_1,
            });
            reportsToImgCreate.push(this["reportImgToCreateUpd" + cont]);
        }
        return new Promise(function (resolve, reject) {
            Promise.all(reportsToImgCreate).then(function () {
                resolve();
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    uploadReportCreate: function (dataToUpdate) {

        let promiseUpdateLocally = indexDb.updateReportImages(dataToUpdate.reportImgId,"cloud",true);

        let promiseUpdateCloud = new Promise(function(resolve,reject){

            $.ajax({
                url: 'https://smart-docs.herokuapp.com/reportsImg/?token='+ localStorage.getItem(token),
                type: 'POST',
                dataType: 'json',
                data: dataToUpdate,
                statusCode: {
                    401: function () {
                        message.launchErrorNotAuthenthicateModal("La sesion ha caducado", "El token de seguridad que se te ha asignado ya no es valido", "Solucion: Inicia de nuevo Sesion");
                        localStorage.clear();
                    }
                },
                error: function () {
                    reject();
                },
                complete: function (msgRes) {
                    resolve();
                }
            });
        });
        return new Promise(function (resolve, reject) {
            Promise.all([promiseUpdateLocally,promiseUpdateCloud]).then(function(){
                resolve();
            });
        });
    },
    uploadReportUpdate: function (dataToUpdate) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: 'https://smart-docs.herokuapp.com/reportsImg/update/?token='+ localStorage.getItem(token),
                type: 'PATCH',
                data: { reportImgId: dataToUpdate.reportImgId, reportId: dataToUpdate.reportId, image_1: JSON.stringify(dataToUpdate.image_1) },
                dataType: 'json',
                statusCode: {
                    401: function () {
                        message.launchErrorNotAuthenthicateModal("La sesion ha caducado", "El token de seguridad que se te ha asignado ya no es valido", "Solucion: Inicia de nuevo Sesion");
                        localStorage.clear();
                    }
                },
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
    ,
    deleteReportsImg: function () {
        return new Promise(function (resolve, reject) {
            indexDb.deleteReportsImage().then(function () {
                resolve();
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    getReportsImgSaveonCloud: function () {
        let reference = this;
        return new Promise(function (resolve, reject) {
            $.ajax({
                method: "GET",
                url: 'https://smart-docs.herokuapp.com/reportsImg/?token='+ localStorage.getItem(token),
                statusCode: {
                    401: function () {
                        message.launchErrorNotAuthenthicateModal("La sesion ha caducado", "El token de seguridad que se te ha asignado ya no es valido", "Solucion: Inicia de nuevo Sesion");
                        localStorage.clear();
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    // log the error to the console
                    console.log("The following error occured: " + textStatus, errorThrown);
                    reject();
                },
                complete: function (reqRes) {
                    let cont = 0;
                    let updateReportImg = [];
                    for (let reportImgRes of reqRes.responseJSON) {
                        this["updateReportImage" + cont] = indexDb.addReportImages(reportImgRes.reportImgId, reportImgRes.reportId, reportImgRes.images, reportImgRes.author, reportImgRes.image_1);
                        updateReportImg.push(this["updateReportImage" + cont]);
                        cont++;
                    }
                    if (updateReportImg.length > 0) {
                        Promise.all(updateReportImg).then(function () {
                            resolve();
                        });
                    }
                    else {
                        resolve();
                    }
                }
            })
        });
    },
}