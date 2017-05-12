module.exports = {
    "visits": [],
    "visitSelected": {},
    "getVisits": function () {
        let reference = this;
        return reference.visits;
    },
    showVisitsSaveonCloud: function () {
        return new Promise(function (resolve, reject) {
            $.ajax({
                method: "GET",
                url: "https://smart-docs.herokuapp.com/visits/",
            })
                .done(function (res) {
                    alert("Visits on DB: " + res);
                });
        });
    }
}