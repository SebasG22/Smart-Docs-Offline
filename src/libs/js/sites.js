module.exports = {
    "sites": [],
    "getAllSites": function () {
        let reference = this;
        return reference.sites;
    },
    "getSitesOnCloud": function () {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: 'https://smart-docs.herokuapp.com/sites/?token=' + localStorage.getItem('token'),
                type: 'GET',
                dataType: 'json',
                statusCode: {
                    401: function () {
                        message.launchErrorNotAuthenthicateModal("La sesion ha caducado", "El token de seguridad que se te ha asignado ya no es valido", "Solucion: Inicia de nuevo Sesion");
                        localStorage.clear();
                    }
                },
                error: function () {
                    reject();
                },
                complete: function (msgRes) {
                    resolve(msgRes.responseJSON);
                }
            });
        });
    }
}