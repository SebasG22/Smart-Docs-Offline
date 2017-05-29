module.exports = {
    addMessageLoder: function (selector, location) {
        $(location).addClass("loader");
        $(location).append("<div id='loader' class='loader-container text-center color-white'><div><i style='color:white' class='fa fa-spinner fa-pulse fa-3x'></i></div><div style='color:white'><h4>Smart Docs <br> <small> Cargando Recursos <div id='" + selector + "'> </div> </small> <br><small>... Se esta preparando para ti ...</small></h4><h5>Desarollado por: Huawei Colombia  <br> OSS IT Team </h5></div></div>");
    },
    changeMessageLoader: function (selector, msg) {
        console.log("Selector: " + selector);
        console.log("Message: " + msg);
        $("#" + selector).text(msg);
    },
    removeMessageLoader: function (location) {
        $("#loader").remove();
        $(location).removeClass("loader");
    },
    launchProcessImageModal: function () {
        $("#process_image_modal").remove();
        $("body").append("<div class='fade modal modal-warning'aria-hidden=true aria-labelledby=myModalLabel1 id=process_image_modal role=dialog style=display:block tabindex=-1><div class=modal-dialog><div class=modal-content><div class=modal-header><h4 class=modal-title id=myModalLabel13>La imagen esta siendo procesada </h4></div><div class=modal-body> <img src='/img/mapIcon.svg' style='margin-left:auto;margin-right:auto;display:block' width='150px'><h4 style='text-align:center'> Espera un momento, este proceso puede tomar algunos segundos dependiendo de tu conexion</h4></div></div></div></div>");
        $("#process_image_modal").modal({ backdrop: 'static', keyboard: false });
    },
    removeProcessImageModal: function () {
        $("#process_image_modal").modal('hide');
    },
    launchErrorModal: function (title, description, recomendation) {
        $("#error_modal").remove();
        $("body").append("<div class='fade modal modal-danger'aria-hidden=true aria-labelledby=myModalLabel1 id=error_modal role=dialog style=display:none tabindex=-1><div class=modal-dialog><div class=modal-content><div class=modal-header><h4 class=modal-title id=myModalLabel9> " + title + " </h4></div><div class=modal-body><img src='/img/errorIcon.svg' style=margin-left:auto;margin-right:auto;display:block width=150px><h4 style=text-align:center> " + description + " </h4><h5 style=text-align:center> " + recomendation + " </h5></div><div class=modal-footer><input class='btn btn-danger'data-dismiss=modal type=button value='Lo entiendo'></div></div></div></div>");
        $("#error_modal").modal('show');
    },
    launchErrorNotAuthenthicateModal: function (title, description, recomendation) {
        $("#errorAuth_modal").remove();
        $("body").append("<div class='fade modal modal-danger'aria-hidden=true aria-labelledby=myModalLabel1 id=errorAuth_modal role=dialog style=display:none tabindex=-1><div class=modal-dialog><div class=modal-content><div class=modal-header><h4 class=modal-title id=myModalLabel9> " + title + " </h4></div><div class=modal-body><img src='/img/errorIcon.svg' style=margin-left:auto;margin-right:auto;display:block width=150px><h4 style=text-align:center> " + description + " </h4><h5 style=text-align:center> " + recomendation + " </h5></div><div class=modal-footer><input id='initApplication' class='btn btn-primary' data-dismiss=modal type=button value='Iniciar Sesion></div></div></div></div>");
        $("#initApplication").click(function(){
            window.location.replace("https://smart-docs.herokuapp.com/?#no-back-button");
        });
        $("#errorAuth_modal").modal({ backdrop: 'static', keyboard: false });
    },
    launchChooseConnection: function () {
        return new Promise(function (resolve, reject) {
            $("#connection_modal").remove();
            $("body").append("<div class='fade modal modal-warning' aria-hidden=true aria-labelledby=myModalLabel1 id=connection_modal role=dialog style=display:none tabindex=-1><div class=modal-dialog><div class=modal-content><div class=modal-header><h4 class=modal-title id=myModalLabel9> Selecciona el tipo de conexion </h4></div><div class=modal-body><img src='/img/internetIcon.svg' style=margin-left:auto;margin-right:auto;display:block width=150px><h4 style=text-align:center> Actualmente estas conectado a Internet </h4><h5 style=text-align:center> Deseas sincronizar todo tu trabajo ? </h5></div><div class=modal-footer><input id='yesConnection' class='btn btn-warning' type=button value='Si'><input id='noConnection' class='btn btn-warning' type=button value='No'></div></div></div></div>");
            $("#connection_modal").modal({ backdrop: 'static', keyboard: false });

            $("#yesConnection").click(function () {
                resolve(true);
                $("#connection_modal").modal('hide');
            });

            $("#noConnection").click(function () {
                resolve(false);
                $("#connection_modal").modal('hide');
            });
        });
    },
    launchSyncModal: function () {
        let reference = this;
        $("#sync_information_modal").remove();
        $("body").append("<div class='fade modal modal-warning'aria-hidden=true aria-labelledby=myModalLabel1 id=sync_information_modal role=dialog style=display:block tabindex=-1><div class=modal-dialog><div class=modal-content><div class=modal-header><h4 class=modal-title id=myModalLabel13>Sincronizacion en Curso </h4></div><br><div style='float:none;margin: 0 auto;text-align:center'><i style='color:black' class='fa fa-spinner fa-pulse fa-3x text-center'></i></div><h4 style='text-align:center'>Por favor no cierres la aplicacion, estamos sincronizando tu progreso . </h4><br><h5 style='text-align:center'><b> Estado : </b><div id='sync_information_status'></div></h5></div></div></div></div>");
        $("#sync_information_modal").modal({ backdrop: 'static', keyboard: false });
    },
    changeSyncModalText: function (msg) {
        $("#sync_information_status").html(msg);
    },
    removeSyncModal: function () {
        $("#sync_information_modal").modal('hide');
    },
}