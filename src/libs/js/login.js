let message = require("./messages");

module.exports = {
    "signin": function (username,password) {
        console.log("Sign in Start");
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: 'http://localhost:3000/user/signin',
                type: 'POST',
                dataType: 'json',
                data: { username: username, password: password },
                statusCode: {
                    500: function (msgRes) {
                        message.launchErrorModal(msgRes.responseJSON.title,msgRes.responseJSON.error.message, " Revisa tus credenciales");
                        $("#userpassword").val("");
                    }
                },
                error: function () {
                    reject();
                },
                complete: function (msgRes) {
                    localStorage.setItem("user",JSON.stringify(msgRes.responseJSON.user));
                    localStorage.setItem("token",msgRes.responseJSON.token);
                    resolve(msgRes.responseJSON.user);
                }
            })
        });

    }
}