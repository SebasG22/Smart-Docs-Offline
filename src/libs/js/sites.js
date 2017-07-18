let message = require("./messages");

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
    },
    /**
 * Method: Find Sites depeding on user properties like region and project
 *  Make a GET request to https://smart-docs.herokuapp.com/sites/findMySites with the token query parameter
 *  Return an array of sites based on the user preferences 
 *  If the token isn't valid rwill prompt a error. Solution: Get a new token, login again.
 * @author Sebastian Guevara <outs.sebastian.velasquez@huawei.com>
 * @since Added for perfomance reasons, Doesn't download all the sites, only some of them based on the user preferences. 
 * @version 1.0.0
 * date  07/18/2017 DD-MM-YYYY
 */
    "getSitesOnCloudByUserPreferences": function () {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: 'https://smart-docs.herokuapp.com/sites/findMySites/?token=' + localStorage.getItem('token'),
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