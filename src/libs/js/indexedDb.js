let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
let dataBase;
let visitsConnection = require("./visits");
let templatesConnection = require("./templates");
let reportsConnection = require("./reports");
let siteConnection = require("./sites");

module.exports = {
    "dataBase": "",
    "startIndexedDB": function () {
        let reference = this;
        return new Promise(function (resolve, reject) {
            reference.dataBase = indexedDB.open("SmartDocsOffline", 3);
            reference.dataBase.onupgradeneeded = function (e) {
                let active = reference.dataBase.result;
                let sites = active.createObjectStore("sites", { keyPath: 'siteId' });
                sites.createIndex("by_siteId", "siteId", { unique: true });
                sites.createIndex("by_project", "project", { unique: false });
                sites.createIndex("by_fmOffice", "fmOffice", { unique: false });
                sites.createIndex("by_creationDate", "creationDate", { unique: false });
                sites.createIndex("by_lastModification", "lastModification", { unique: false });

                let visits = active.createObjectStore("visits", { keyPath: 'visitId', autoIncrement: true });
                visits.createIndex("by_visitId", "visitId", { unique: true });
                visits.createIndex("by_site", "site", { unique: false });
                visits.createIndex("by_user", "user", { unique: false });
                visits.createIndex("by_creationDate", "creationDate", { unique: false });


                let templates = active.createObjectStore("templates", { keyPath: 'templateId' });
                templates.createIndex("by_templateId", "templateId", { unique: true });
                templates.createIndex("by_creationDate", "creationDate", { unique: false });
                templates.createIndex("by_lastModification", "lastModification", { unique: false });
                templates.createIndex("by_taskType", "taskType", { unique: false })
                templates.createIndex("by_project", "project", { unique: false });

                let reports = active.createObjectStore("reports", { keyPath: 'reportId', autoIncrement: true });
                reports.createIndex("by_reportId", "reportId", { unique: true });
                reports.createIndex("by_site", "site", { unique: false });
                reports.createIndex("by_creation_date", "creationDate", { unique: false });
                reports.createIndex("by_lastModification", "lastModification", { unique: false });

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
    "addSite": function (siteId, name, fmOffice, project) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            var active = reference.dataBase.result;
            var data = active.transaction(["sites"], "readwrite");
            var object = data.objectStore("sites");

            var request = object.put({
                siteId: siteId,
                name: name,
                fmOffice: fmOffice,
                project: project,
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
    "getSites": function () {
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
                    elements.push(result.value);
                    console.log(elements);
                    result.continue();
                }
            }

            data.oncomplete = function (e) {
                console.log("elements", elements);
                siteConnection.sites = elements;
                resolve();
            }
        });
    },
    "addVisit": function (siteId, name, author , cloud , creationDate = "" + new Date(),) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            var active = reference.dataBase.result;
            var data = active.transaction(["visits"], "readwrite");
            var object = data.objectStore("visits");

            var request = object.put({
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
                visitsConnection.visitSelected.visitId = e.target.result;
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
                data.cloud = yes;
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
                visitsConnection.visits = elements;
                resolve();
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
    "addReport": function (templateId, visitId, status, checkbox_answer,
        date_answer, datetime_answer, list_answer, month_answer,multiselect_answer,
        number_answer, radio_answer, select_answer, table_answer, text_answer,
        textarea_answer, time_answer, week_answer ) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["reports", "reportsLog"], "readwrite");
            let object = data.objectStore("reports");
            let request = object.put({
                visitId: visitId,
                templateId: templateId,
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
                week_answer: week_answer,
                update: 'yes',
                author: '',
                completedDate: status == 'SM-Status002' ? "" + new Date() : "",
                creationDate: "" + new Date(),
                lastModification: "" + new Date(),
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
    "updateReport": function (reportId, status, content) {
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
                data.content = content;
                data.status = status;
                data.lastModification = "" + new Date()

                // Put this updated object back into the database.
                var requestUpdate = objectStore.put(data);
                requestUpdate.onerror = function (event) {
                    // Do something with the error
                    reject(requestUpdate.error.name);
                };
                requestUpdate.onsuccess = function (event) {
                    // Success - the data is updated!
                    reference.addReportLog(reportId, "Actualizacion", status).then(function () {
                        resolve();
                    });
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
                reportsConnection.reports = elements;
                resolve();
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
    getReportsLog: function () {
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
                reportsConnection.reportsLog = elements;
                resolve();
            }
        });
    }
}