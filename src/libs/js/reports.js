let indexDb = require("./indexedDb");
module.exports = {
    "reports":[],
    "getReports": function(){
        return new Promise(function(resolve,reject){
            indexDb.getReports().then(function(reportsResponse){
                resolve(reportsResponse);
            }).catch(function(err){
                reject(err);
            })
        });
        let reference = this;
        return reference.reports;
    },
    "reportsLog": [],
    "getReportsLog":function(){
        let reference = this;
        return reference.reportsLog;
    },
    "reportSelected":{}
}