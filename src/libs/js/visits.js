let indexDb = require("./indexedDb");

module.exports = {
    "visits": [],
    "visitSelected": {},
    "getVisits": function () {
        let reference = this;
        return new Promise(function(resolve,reject){
            indexDb.getVisits().then(function(){
                resolve(reference.visits);
            });
        }).catch(function(err){
            reject(err);
        });
    },
    "uploadVisitsToCloud": function () {
        console.log("Upload to Visit on Action");
        let reference = this;
        let cont = 0
        let visitsToUpdate = [];
        for (let visitsToUpd of reference.getVisits()) {
            if (!visitsToUpd.cloud) {
                this["visitsToUpdate" + cont] = reference.uploadVisit({
                    siteId: visitsToUpd.siteId,
                    visitId: visitsToUpd.visitId,
                    author: visitsToUpd.user,
                    creationDate: visitsToUpd.creationDate
                });
                visitsToUpdate.push(this["visitsToUpdate" + cont]);
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
    },
    "uploadVisit": function (dataToUpdate) {
        let updateVisitLocal = new Promise(function (resolve, reject) {
            indexDb.updateVisit(dataToUpdate.visitId).then(function (resolve, reject) {
                resolve();
            });
        });

        let updateVisitCloud = new Promise(function (resolve, reject) {
            $.post("https://smart-docs.herokuapp.com/visits/", dataToUpdate)
                .done(function (data) {
                    resolve(data);
                });
        });

        return new Promise(function (resolve, reject) {
            Promise.all([updateVisitLocal, updateVisitCloud]).then(function () {
                resolve();
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    getVisitsSaveonCloud: function () {
        let reference = this;
        return new Promise(function (resolve, reject) {
            $.ajax({
                method: "GET",
                url: "https://smart-docs.herokuapp.com/visits/",
            })
                .done(function (sitesSavedCloud) {
                    reference.visits = sitesSavedCloud;
                    resolve();
                });
        });
    },
    updateLocalVisits: function () {
        let reference = this;
        let cont = 0;
        let updateVisits = [];
        for (let siteRes of reference.getVisits()) {
            this["updateVisit" + cont] = indexDb.addVisit(siteRes.visitId,siteRes.siteId, siteRes.name, siteRes.author, true, siteRes.creationDate);
            updateVisits.push(this["updateVisit" + cont]);
            cont++;
        }
        return new Promise(function (resolve, reject) {
            if (updateVisits.length > 0) {
                Promise.all(updateVisits).then(function () {
                    resolve();
                });
            }
            else {
                resolve();
            }
        });

}
}