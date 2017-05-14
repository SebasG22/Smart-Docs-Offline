let indexDb = require("./indexedDb");
module.exports = {
    "reports":[],
    "getReports": function(){
        let reference = this;
        console.log("Index Db" , indexDb);
        return new Promise(function(resolve,reject){
            indexDb.getReports().then(function(reportsResponse){
                reference.reports = reportsResponse;
                resolve(reportsResponse);
            }).catch(function(err){
                reject(err);
            })
        });
    },
    "reportsLog": [],
    "getReportsLog":function(){
        let reference = this;
        return reference.reportsLog;
    },
    "reportSelected":{}
}