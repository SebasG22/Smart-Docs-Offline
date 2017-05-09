let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
let dataBase;
let visitsConnection = require("./visits");
let templatesConnection = require("./templates");
let reportsConnection = require("./reports");

module.exports = {
    "dataBase": "",
    "startIndexedDB": function () {
        let reference = this;
        reference.dataBase = indexedDB.open("SmartDocsOffline",1);
        reference.dataBase.onupgradeneeded = function (e) {
            let active = reference.dataBase.result;

            let visits = active.createObjectStore("visits", { keyPath: 'visitId', autoIncrement: true });
            visits.createIndex("by_visitId", "visitId", { unique: true });
            visits.createIndex("by_site", "site", { unique: false });
            visits.createIndex("by_creationDate", "creationDate", { unique: false });

            let templates = active.createObjectStore("templates", { keyPath: 'templateId' });
            templates.createIndex("by_templateId", "templateId", { unique: true });
            templates.createIndex("by_creationDate", "creationDate", { unique: false });
            templates.createIndex("by_lastModification", "lastModification", { unique: false });
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
        }

        reference.dataBase.onerror = function (e) {
            console.error("An error ocurred " + e);
        }
    },
    "addVisit": function (site) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            var active = reference.dataBase.result;
            var data = active.transaction(["visits"], "readwrite");
            var object = data.objectStore("visits");

            var request = object.put({
                site: site,
                creationDate: "" + new Date()
            });

            request.onerror = function (e) {
                console.log("An error occurred " + request.error.name + " \n\n " + request.error.message);
                reject(request.error.name);
            }

            request.onsuccess = function (e){
                visitsConnection.visitSelected.visitId = e.target.result;
            }

            data.oncomplete = function (e) {
                console.log("The Visit was register on SmartDocsOffline");
                resolve();
            }
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
                }
                else {
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
    "addTemplate": function (templateId, name, project, icon, content) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            var active = reference.dataBase.result;
            var data = active.transaction(["templates"], "readwrite");
            var object = data.objectStore("templates");

            var request = object.put({
                templateId: templateId,
                name: name,
                project: project,
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
                }
                else {
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
    "addReport": function (templateId, site, answer, status) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["reports", "reportsLog"], "readwrite");
            let object = data.objectStore("reports");
            let request = object.put({
                site: site,
                templateId: templateId,
                content: answer,
                status: status,
                creationDate: "" + new Date(),
                lastModification: "" + new Date()
            });

            request.onerror = function (e) {
                console.log("An error occurred " + request.error.name + " \n\n " + request.error.message);
                reject(e);
            }

            request.onsuccess = function (e) {
                reference.addReportLog(e.target.result ,"Creacion", status);
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
                    reference.addReportLog(reportId ,"Actualizacion", status).then(function () {
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
                }
                else {
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
                }
                else {
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