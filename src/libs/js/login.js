let message = require("./messages");

module.exports = {
    "signin": function (username,password) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: 'https://smart-docs.herokuapp.com/user/signin',
                type: 'POST',
                dataType: 'json',
                data: { username: username, password: password },
                statusCode: {
                    500: function (msgRes) {
                        message.launchErrorModal(msgRes.responseJSON.title,msgRes.responseJSON.error.message, " Revisa tus credenciales");
                    }
                },
                error: function () {
                    reject();
                },
                complete: function (data) {
                    localStorage.setItem("user",JSON.stringify(data.user));
                    localStorage.setItem("token",data.token);
                    resolve();
                }
            })
        });

    }
}