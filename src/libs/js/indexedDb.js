let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
let dataBase;
let templatesConnection = require("./templates");
let siteConnection = require("./sites");

module.exports = {
    "dataBase": "",
    "startIndexedDB": function () {
        let reference = this;
        return new Promise(function (resolve, reject) {
            reference.dataBase = indexedDB.open("SmartDocsOffline", 6);
            reference.dataBase.onupgradeneeded = function (e) {
                let active = reference.dataBase.result;
                let sites = active.createObjectStore("sites", { keyPath: 'siteId' });
                sites.createIndex("by_siteId", "siteId", { unique: true });
                sites.createIndex("by_project", "project", { unique: false });
                sites.createIndex("by_fmOffice", "fmOffice", { unique: false });
                sites.createIndex("by_creationDate", "creationDate", { unique: false });
                sites.createIndex("by_lastModification", "lastModification", { unique: false });

                let visits = active.createObjectStore("visits", { keyPath: 'visitId' });
                visits.createIndex("by_visitId", "visitId", { unique: true });
                visits.createIndex("by_site", "site", { unique: false });
                visits.createIndex("by_author", "author", { unique: false });
                visits.createIndex("by_creationDate", "creationDate", { unique: false });

                let templates = active.createObjectStore("templates", { keyPath: 'templateId' });
                templates.createIndex("by_templateId", "templateId", { unique: true });
                templates.createIndex("by_creationDate", "creationDate", { unique: false });
                templates.createIndex("by_lastModification", "lastModification", { unique: false });
                templates.createIndex("by_taskType", "taskType", { unique: false })
                templates.createIndex("by_project", "project", { unique: false });

                let reports = active.createObjectStore("reports", { keyPath: 'reportId' });
                reports.createIndex("by_reportId", "reportId", { unique: true });
                reports.createIndex("by_site", "site", { unique: false });
                reports.createIndex("by_creation_date", "creationDate", { unique: false });
                reports.createIndex("by_lastModification", "lastModification", { unique: false });

                let reportsImages = active.createObjectStore("reportsImage", { keyPath: 'reportImgId' });
                reportsImages.createIndex("by_reportId", "reportId", { unique: false });
                reportsImages.createIndex("by_lastModification", "lastModification", { unique: false });

                let reportsLog = active.createObjectStore("reportsLog", { keyPath: 'reportLogId', autoIncrement: true });
                reportsLog.createIndex("by_reportLogId", "reportLogId", { unique: true });
                reportsLog.createIndex("by_reportId", "reportId", { unique: false });
                reportsLog.createIndex("by_site", "site", { unique: false });
                reportsLog.createIndex("by_creation_date", "creationDate", { unique: false });
                reportsLog.createIndex("by_operation", "operation", { unique: false });
                reportsLog.createIndex("by_operationDate", "operationDate", { unique: false });

            }

            reference.dataBase.onsuccess = function (e) {
                console.log("Smart Docs Offline DB was loaded");
                resolve();
            }

            reference.dataBase.onerror = function (e) {
                console.error("An error ocurred " + e);
                reject(e);
            }
        });
    },
    "addSite": function (siteId, name, fmOffice, project, portafolio, anchorTenant, region, city) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            var active = reference.dataBase.result;
            var data = active.transaction(["sites"], "readwrite");
            var object = data.objectStore("sites");

            var request = object.put({
                siteId: siteId,
                name: name,
                project: project,
                portafolio: portafolio,
                anchorTenant: anchorTenant,
                region: region,
                fmOffice: fmOffice,
                city: city,
                creationDate: "" + new Date(),
                lastModification: "" + new Date()
            });

            request.onerror = function (e) {
                console.log("An error occurred " + request.error.name + " \n\n " + request.error.message);
                reject(request.error.name);
            }

            data.oncomplete = function (e) {
                console.log("The Site was register on SmartDocsOffline");
                resolve();
            }
        });
    },
    /**
* Method: Get Sites from indexed db - Database create on the user device
*  Make a request to sites objectstore, and iterate between the sites.
*  Get the total sites saved and change the modal text
* @author Sebastian Guevara <outs.sebastian.velasquez@huawei.com>
* @since Added for perfomance reasons, Doesn't download all the sites, only some of them based on the user preferences. 
* @version 1.0.0
* date  07/18/2017 DD-MM-YYYY
*/
    "getSites": function () {
        let cont = 0;
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["sites"], "readonly");
            let object = data.objectStore("sites");
            let elements = [];

            object.openCursor().onsuccess = function (e) {
                var result = e.target.result;
                if (result === null) {
                    result;
                } else {
                    $("#sync_information_status").html('Se han cargado ' + cont + 'de ' + localStorage.getItem('totalSitesSM') + ' Sitios');
                    elements.push(result.value);
                    console.log(elements);
                    result.continue();
                }
            }

            data.oncomplete = function (e) {
                console.log("elements", elements);
                siteConnection.sites = elements;
                resolve(elements);
            }
        });
    },
    "addVisit": function (visitId, siteId, name, author, cloud, creationDate = "" + new Date()) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            var active = reference.dataBase.result;
            var data = active.transaction(["visits"], "readwrite");
            var object = data.objectStore("visits");

            var request = object.put({
                visitId: visitId,
                siteId: siteId,
                name: name,
                author: author,
                cloud: cloud,
                creationDate: creationDate
            });

            request.onerror = function (e) {
                console.log("An error occurred " + request.error.name + " \n\n " + request.error.message);
                reject(request.error.name);
            }

            request.onsuccess = function (e) {
                console.log("Visit Selected ", e.target.result);
            }

            data.oncomplete = function (e) {
                console.log("The Visit was register on SmartDocsOffline");
                resolve();
            }
        });
    },
    "updateVisit": function (visitId, cloud = true) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            var objectStore = active.transaction(["visits"], "readwrite").objectStore("visits");
            var request = objectStore.get(visitId);
            request.onerror = function (event) {
                // Handle errors!
                reject(request.error.name);
            };
            request.onsuccess = function (event) {
                // Get the old value that we want to update
                var data = request.result;

                // update the value(s) in the object that you want to change
                data.cloud = cloud;
                // Put this updated object back into the database.
                var requestUpdate = objectStore.put(data);
                requestUpdate.onerror = function (event) {
                    // Do something with the error
                    reject(requestUpdate.error.name);
                };
                requestUpdate.onsuccess = function (event) {
                    // Success - the data is updated!
                    resolve();
                };
            };
        });
    },
    "getVisits": function () {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["visits"], "readonly");
            let object = data.objectStore("visits");
            let elements = [];

            object.openCursor().onsuccess = function (e) {
                var result = e.target.result;
                if (result === null) {
                    result;
                } else {
                    elements.push(result.value);
                    console.log(elements);
                    result.continue();
                }
            }

            data.oncomplete = function (e) {
                console.log("elements", elements);
                resolve(elements);
            }
        });
    },
    "getVisitByVisitId": function (visitId) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["visits"], "readonly");
            let object = data.objectStore("visits");
            let request = object.get("Fri Jun 02 2017 22:14:53 GMT-0500 (SA Pacific Standard Time)");
            request.onsuccess = function () {
                if (request.result !== undefined) {
                    resolve(request.result);
                }
            }
        });
    },
    "deleteVisit": function (visitId) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["visits"], "readwrite");
            let object = data.objectStore("visits");
            let index = object.index("by_visitId");
            var objectStoreRequest = index.openCursor(IDBKeyRange.only(visitId.toString()));

            objectStoreRequest.onsuccess = function (e) {
                let cursor = objectStoreRequest.result;
                if (cursor) {
                    cursor.delete();
                    cursor.continue();
                }

            }
            objectStoreRequest.onerror = function (e) {
                reject(e.error.name);
            }

            data.oncomplete = function (e) {
                resolve();
            }
        });
    },
    "deleteAllVisits": function () {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["visits"], "readwrite");
            let object = data.objectStore("visits");
            var objectStoreRequest = object.clear();

            objectStoreRequest.onsuccess = function (e) {
                resolve();
                console.log("Reports DB was cleared");
            }
            objectStoreRequest.onerror = function (e) {
                reject(e.error.name);
            }
        });
    },
    "deleteAllVisitsByAuthor": function (author) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["visits"], "readwrite");
            let object = data.objectStore("visits");

            object.openCursor().onsuccess = function (e) {
                var cursor = event.target.result;
                if (cursor) {
                    if (cursor.value.author !== author.toString()) {
                        var request = cursor.delete();
                        request.onsuccess = function () {
                            console.log('One Visit Founded and was deleted');
                        };
                    }
                    cursor.continue();
                }
            }
            data.oncomplete = function (e) {
                console.log("The visits by author was completed");
                resolve();
            }

            data.onerror = function (e) {
                console.log("An error occurred " + data.error.name + " \n\n " + data.error.message);
                reject(data.error.name);
            }


        });
    },
    "addTemplate": function (templateId, name, project, taskType, icon, content) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            var active = reference.dataBase.result;
            var data = active.transaction(["templates"], "readwrite");
            var object = data.objectStore("templates");

            var request = object.put({
                templateId: templateId,
                name: name,
                project: project,
                taskType: taskType,
                icon: icon,
                content: content,
                creationDate: "" + new Date(),
                lastModification: "" + new Date()
            });

            request.onerror = function (e) {
                console.log("An error occurred " + request.error.name + " \n\n " + request.error.message);
                reject(request.error.name);
            }

            data.oncomplete = function (e) {
                console.log("The template was added to SmartDocsOffline");
                resolve();
            }
        });
    },
    "getTemplates": function () {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["templates"], "readonly");
            let object = data.objectStore("templates");
            let elements = [];

            object.openCursor().onsuccess = function (e) {
                var result = e.target.result;
                if (result === null) {
                    result;
                } else {
                    elements.push(result.value);
                    console.log(elements);
                    result.continue();
                }
            }

            data.oncomplete = function (e) {
                console.log("elements", elements);
                templatesConnection.templates = elements;
                resolve();
            }
        });
    },
    "getTemplateByTemplateId": function (templateId) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["templates"], "readonly");
            let object = data.objectStore("templates");
            let request = object.get(templateId);
            request.onsuccess = function () {
                if (request.result !== undefined) {
                    resolve(request.result);
                }
            }
        });
    },
    "addReportAllProperties": function (reportId, templateId, visitId, status, author, cloud,
        creationDate, completedDate, lastModification, checkbox_answer, date_answer, datetime_answer,
        list_answer, month_answer, multiselect_answer, number_answer, radio_answer, select_answer, table_answer,
        text_answer, textarea_answer, time_answer, week_answer) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["reports", "reportsLog"], "readwrite");
            let object = data.objectStore("reports");
            let request = object.put({
                reportId: reportId,
                visitId: visitId,
                templateId: templateId,
                cloud: cloud,
                status: status,
                author: author,
                completedDate: completedDate,
                creationDate: creationDate,
                lastModification: lastModification,
                checkbox_answer: checkbox_answer,
                date_answer: date_answer,
                datetime_answer: datetime_answer,
                list_answer: list_answer,
                month_answer: month_answer,
                multiselect_answer: multiselect_answer,
                number_answer: number_answer,
                radio_answer: radio_answer,
                select_answer: select_answer,
                table_answer: table_answer,
                text_answer: text_answer,
                textarea_answer: textarea_answer,
                time_answer: time_answer,
                week_answer: week_answer
            });

            request.onerror = function (e) {
                console.log("An error occurred " + request.error.name + " \n\n " + request.error.message);
                reject(e);
            }

            request.onsuccess = function (e) {
                reference.addReportLog(e.target.result, "Modificacion", status);
            }

            data.oncomplete = function (e) {
                console.log("The report was added to SmartDocsOffline", e);
                resolve();
            }
        });
    },
    "addReport": function (reportId, templateId, visitId, status, author, creationDate = "" + new Date(), cloud = false) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["reports", "reportsLog"], "readwrite");
            let object = data.objectStore("reports");
            let request = object.put({
                reportId: reportId,
                visitId: visitId,
                templateId: templateId,
                cloud: cloud,
                status: status,
                author: author,
                completedDate: status == 'SM-Status002' ? "" + new Date() : "",
                creationDate: creationDate,
                lastModification: "" + new Date(),
                checkbox_answer: [],
                date_answer: [],
                datetime_answer: [],
                list_answer: [],
                month_answer: [],
                multiselect_answer: [],
                number_answer: [],
                radio_answer: [],
                select_answer: [],
                table_answer: [],
                text_answer: [],
                textarea_answer: [],
                time_answer: [],
                week_answer: []
            });

            request.onerror = function (e) {
                console.log("An error occurred " + request.error.name + " \n\n " + request.error.message);
                reject(e);
            }

            request.onsuccess = function (e) {
                reference.addReportLog(e.target.result, "Creacion", status);
            }

            data.oncomplete = function (e) {
                console.log("The report was added to SmartDocsOffline", e);
                resolve();
            }
        });
    },
    "updateReport": function (reportId, property, propValue) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            var objectStore = active.transaction(["reports"], "readwrite").objectStore("reports");
            var request = objectStore.get(reportId);
            request.onerror = function (event) {
                // Handle errors!
                reject(request.error.name);
            };
            request.onsuccess = function (event) {
                // Get the old value that we want to update
                var data = request.result;

                // update the value(s) in the object that you want to change
                data[property] = propValue;

                // Put this updated object back into the database.
                var requestUpdate = objectStore.put(data);
                requestUpdate.onerror = function (event) {
                    // Do something with the error
                    reject(requestUpdate.error.name);
                };
                requestUpdate.onsuccess = function (event) {
                    // Success - the data is updated!
                    resolve();
                };
            };
        });
    },
    "getReports": function () {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["reports"], "readonly");
            let object = data.objectStore("reports");
            let elements = [];

            object.openCursor().onsuccess = function (e) {
                let result = e.target.result;
                if (result === null) {
                    result;
                } else {
                    elements.push(result.value);
                    console.log(elements);
                    result.continue();
                }
            }

            data.oncomplete = function (e) {
                console.log("elements", elements);
                resolve(elements);
            }
        });
    },
    "deleteReports": function (reportId) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["reports"], "readwrite");
            let object = data.objectStore("reports");
            let index = object.index("by_reportId");
            var objectStoreRequest = index.openCursor(IDBKeyRange.only(reportId.toString()));

            objectStoreRequest.onsuccess = function (e) {
                let cursor = objectStoreRequest.result;
                if (cursor) {
                    cursor.delete();
                    cursor.continue();
                }

            }
            objectStoreRequest.onerror = function (e) {
                reject(e.error.name);
            }

            data.oncomplete = function (e) {
                resolve();
            }
        });
    },
    "deleteAllReports": function () {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["reports"], "readwrite");
            let object = data.objectStore("reports");
            var objectStoreRequest = object.clear();

            objectStoreRequest.onsuccess = function (e) {
                resolve();
                console.log("Reports DB was cleared");
            }
            objectStoreRequest.onerror = function (e) {
                reject(e.error.name);
            }
        });
    },
    "deleteAllReportsByAuthor": function (author) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["reports"], "readwrite");
            let object = data.objectStore("reports");

            object.openCursor().onsuccess = function (e) {
                var cursor = event.target.result;
                if (cursor) {
                    if (cursor.value.author !== author.toString()) {
                        var request = cursor.delete();
                        request.onsuccess = function () {
                            console.log('One Report Founded and was deleted');
                        };
                    }
                    cursor.continue();
                }
            }
            data.oncomplete = function (e) {
                console.log("The reports by author was completed");
                resolve();
            }

            data.onerror = function (e) {
                console.log("An error occurred " + data.error.name + " \n\n " + data.error.message);
                reject(data.error.name);
            }


        });
    },
    "addReportImages": function (reportImgId, reportId, images, author, image_1 = [], cloud = false) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["reportsImage"], "readwrite");
            let object = data.objectStore("reportsImage");
            let request = object.put({
                reportImgId: reportImgId,
                reportId: reportId,
                images: images,
                image_1: image_1,
                cloud: cloud,
                author: author,
                lastModification: "" + new Date()
            });

            request.onerror = function (e) {
                console.log("An error occurred " + request.error.name + " \n\n " + request.error.message);
                reject(e);
            }

            request.onsuccess = function (e) {
                //reference.addReportLog(e.target.result, "Creacion", status);
            }

            data.oncomplete = function (e) {
                console.log("The image was added to SmartDocsOffline", e);
                resolve();
            }
        });
    },
    "updateReportImages": function (reportImgId, property, propValue) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            var objectStore = active.transaction(["reportsImage"], "readwrite").objectStore("reportsImage");
            var request = objectStore.get(reportImgId);
            request.onerror = function (event) {
                // Handle errors!
                reject(request.error.name);
            };
            request.onsuccess = function (event) {
                // Get the old value that we want to update
                var data = request.result;

                // update the value(s) in the object that you want to change
                data[property] = propValue;

                // Put this updated object back into the database.
                var requestUpdate = objectStore.put(data);
                requestUpdate.onerror = function (event) {
                    // Do something with the error
                    reject(requestUpdate.error.name);
                };
                requestUpdate.onsuccess = function (event) {
                    // Success - the data is updated!
                    resolve();
                };
            };
        });
    },
    "getReportsImages": function () {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["reportsImage"], "readonly");
            let object = data.objectStore("reportsImage");
            let elements = [];

            object.openCursor().onsuccess = function (e) {
                let result = e.target.result;
                if (result === null) {
                    result;
                } else {
                    elements.push(result.value);
                    console.log(elements);
                    result.continue();
                }
            }

            data.oncomplete = function (e) {
                console.log("elements", elements);
                resolve(elements);
            }
        });
    },
    "getReportImagesByReportId": function (reportId) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["reportsImage"], "readonly");
            let object = data.objectStore("reportsImage");
            let elements = [];

            object.openCursor().onsuccess = function (e) {
                let result = e.target.result;
                if (result === null) {
                    result;
                } else {
                    if (result.value.reportId == reportId) {
                        elements.push(result.value);
                        console.log(elements);
                    }
                    result.continue();
                }
            }
            data.oncomplete = function (e) {
                console.log("elements", elements);
                resolve(elements);
            }
        });
    },
    "deleteReportsImage": function (reportId) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["reportsImage"], "readwrite");
            let object = data.objectStore("reportsImage");
            let index = object.index("by_reportId");
            var objectStoreRequest = index.openCursor(IDBKeyRange.only(reportId.toString()));

            objectStoreRequest.onsuccess = function (e) {
                let cursor = objectStoreRequest.result;
                if (cursor) {
                    cursor.delete();
                    cursor.continue();
                }

            }
            objectStoreRequest.onerror = function (e) {
                reject(e.error.name);
            }

            data.oncomplete = function (e) {
                resolve();
            }
        });
    },
    "deleteAllReportsImage": function () {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["reportsImage"], "readwrite");
            let object = data.objectStore("reportsImage");
            var objectStoreRequest = object.clear();

            objectStoreRequest.onsuccess = function (e) {
                resolve();
                console.log("Reports Img DB was cleared");
            }
            objectStoreRequest.onerror = function (e) {
                reject(e.error.name);
            }
        });
    },
    "deleteAllReportsImageByAuthor": function (author) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["reportsImage"], "readwrite");
            let object = data.objectStore("reportsImage");

            object.openCursor().onsuccess = function (e) {
                var cursor = event.target.result;
                if (cursor) {
                    if (cursor.value.author !== author.toString()) {
                        var request = cursor.delete();
                        request.onsuccess = function () {
                            console.log('One ReportImg Founded and was deleted');
                        };
                    }
                    cursor.continue();
                }
            }
            data.oncomplete = function (e) {
                console.log("The reportsImg by author was completed");
                resolve();
            }

            data.onerror = function (e) {
                console.log("An error occurred " + data.error.name + " \n\n " + data.error.message);
                reject(data.error.name);
            }


        });
    },
    "addReportLog": function (reportId, operation, status) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["reportsLog"], "readwrite");
            let object = data.objectStore("reportsLog");
            let request = object.put({
                reportId: reportId,
                operation: operation,
                status: status,
                operationDate: "" + new Date(),
            });

            request.onerror = function (e) {
                console.log("An error occurred " + request.error.name + " \n\n " + request.error.message);
                reject(e);
            }

            data.oncomplete = function (e) {
                console.log("The report was added to the Log");
                resolve();
            }
        });
    },
    "getReportsLog": function () {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["reportsLog"], "readonly");
            let object = data.objectStore("reportsLog");
            let elements = [];

            object.openCursor().onsuccess = function (e) {
                let result = e.target.result;
                if (result === null) {
                    result;
                } else {
                    elements.push(result.value);
                    console.log(elements);
                    result.continue();
                }
            }

            data.oncomplete = function (e) {
                console.log("elements", elements);
                resolve(elements);
            }
        });
    },
    "deleteAllReportsLog": function () {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["reportsLog"], "readwrite");
            let object = data.objectStore("reportsLog");
            var objectStoreRequest = object.clear();

            objectStoreRequest.onsuccess = function (e) {
                resolve();
                console.log("Reports Log was cleared");
            }
            objectStoreRequest.onerror = function (e) {
                reject(e.error.name);
            }
        });
    }
}