module.exports = {
    "templateSelected": "",
    "templates": [],
    "getTemplates": function () {
        let reference = this;
        return reference.templates;
    },
    "getTemplatesOnCloud": function () {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: 'https://smart-docs.herokuapp.com/user/signin?token=' + localStorage.getItem('token'),
                type: 'GET',
                dataType: 'json',
                statusCode: {
                    401: function () {
                        message.launchErrorModal("La sesion ha caducado", "El token de seguridad que se te ha asignado ya no es valido", "Solucion: Inicia de nuevo Sesion");
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
    "updateTemplatesLocally": function (templatesOnCloud) {
        let templatesToUpdate = [];
        for (let template of templatesOnCloud) {
            templatesToUpdate.push(indexDb.addTemplate(template.templateId, template.name, template.project, template.taskType, template.icon, template.content));
        }
        return new Promise(function(resolve,reject){
            Promise.all(templatesToUpdate).then(function(){
              resolve();  
            }).catch(function(err){
                reject(err);
            });
        });
    }

}