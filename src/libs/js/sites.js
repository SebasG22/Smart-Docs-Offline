let indexDb = require("./indexedDb");
module.exports = {
    "sites" : [],
    "getAllSites": function(){
        let reference = this;
        return reference.sites;
    },
    updateSiteExternal: function(){
        return new Promise(function(resolve,reject){
            $.get("https://smart-docs.herokuapp.com/sites/", function (sitesResponse) {
                        for (let site of sitesResponse) {
                            indexDb.addSite(site.siteId,site.name,site.fmOffice,site.project);
                        }
                        indexDb.getSites().then(function(resolve,reject){
                            resolve();
                        });
                    })
        });
    }
}