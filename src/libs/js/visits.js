let indexDb = require("./indexedDb");

module.exports = {
    "visits": [],
    "visitSelected": {},
    "getVisits": function () {
        let reference = this;
        return new Promise(function (resolve, reject) {
            indexDb.getVisits().then(function (visitsResponse) {
                reference.visits = visitsResponse;
                resolve(reference.visits);
            });
        }).catch(function (err) {
            reject(err);
        });
    },
    "uploadVisitsToCloud": function () {
        console.log("Upload to Visit on Action");
        let reference = this;
        reference.getVisits().then(function (visits) {
            let cont = 0
            let visitsToUpdate = [];
            for (let visitsToUpd of reference.visits) {
                if (!visitsToUpd.cloud) {
                    this["visitsToUpdate" + cont] = reference.uploadVisit({
                        name: visitsToUpd.name,
                        siteId: visitsToUpd.siteId,
                        visitId: visitsToUpd.visitId,
                        author: visitsToUpd.author,
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
        });

    },
    "uploadVisit": function (dataToUpdate) {
        let updateVisitLocal = new Promise(function (resolve, reject) {
            indexDb.updateVisit(dataToUpdate.visitId).then(function () {
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
                .done(function (visitSavedCloud) {
                    let cont = 0;
                    let updateVisits = [];
                    for (let siteRes of visitSavedCloud) {
                        this["updateVisit" + cont] = indexDb.addVisit(siteRes.visitId, siteRes.siteId, siteRes.name, siteRes.author, true, siteRes.creationDate);
                        updateVisits.push(this["updateVisit" + cont]);
                        cont++;
                    }
                    if (updateVisits.length > 0) {
                        Promise.all(updateVisits).then(function () {
                            resolve();
                        });
                    }
                    else {
                        resolve();
                    }
                });
        });
    },
    /*
    updateLocalVisits: function () {
        let reference = this;
        let cont = 0;
        let updateVisits = [];
        reference.getVisits().then(function (visits) {
            for (let siteRes of reference.visits) {
                this["updateVisit" + cont] = indexDb.addVisit(siteRes.visitId, siteRes.siteId, siteRes.name, siteRes.author, true, siteRes.creationDate);
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
        })

    }
    */
}