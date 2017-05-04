let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
let dataBase;
module.exports = {
    "startIndexedDB": function () {
    dataBase = indexedDB.open("SmartDocsOffline");
    dataBase.onupgradeneeded = function (e) {
        let active = dataBase.result;
        let templates = active.createObjectStore("templates", { keyPath: 'templateId', autoIncrement:true });
        templates.createIndex("by_templateId", "templateId", { unique : true });
        templates.createIndex("by_creation_date","creation_date",{unique:false});
        templates.createIndex("by_project","project",{unique : false});

        let reports = active.createObjectStore("reports",{keyPath:'reportId', autoIncrement:true});
        reports.createIndex("by_reportId","reportId",{unique:true});
        reports.createIndex("by_creation_date","creation_date",{unique:false});
        reports.createIndex("by_lastUpdate","lastUpdate",{unique:false});

        let reportsLog = active.createObjectStore("reportsLog",{keyPath:'reportLogId',autoIncrement:true});
        reportsLog.createIndex("by_reportLogId","reportLogId",{unique:true});
        reportsLog.createIndex("by_creation_date","creation_date",{unique:false});
        reportsLog.createIndex("by_operation","operation",{unique:false});
    }

    dataBase.onsuccess = function (e) {
        console.log("Smart Docs Offline DB was loaded");
    }

    dataBase.onerror = function (e) {
        console.error("An error ocurred " + e);
    }
},
"getTemplates":function() {
    let active = dataBase.result;
    let data = active.transaction(["templates"], "readOnly");
    let object = data.objectStore("templates");
    var elements = [];

    object.openCursor().onsuccess = function (e) {
        var result = e.target.result;
        if (result === null) {
            result;
        }
        else {
            elements.push(result.value);
            result.continue();
        }
    }

    data.oncomplete = function (e) {
        console.log(elements);
    }
}
}