import 'jquery';
import 'bootstrap';
import './../css/flat-blue.css';
import './../css/style.css';
let visits = require("./visits");
let smartEngine = require("./smartEngine");
let templates = require("./templates");
let reports = require("./reports");
let indexDb = require("./indexedDb");
let message = require("./messages");
let notification = require("./notifications");
let sites = require("./sites");

(function () {
    let smartDocsOffline = {
        initApplication: function () {
            let reference = this;
            $.get("/views/dashboard.html", function (page) {
                $("#mainContent2").html(page);
                //notification.sendNotification("Bievenido a Smart Docs", "Registra visitas para poder agregar reportes");
                switch (navigator.onLine) {
                    case true:
                        $("#userStatus").html(" Estado: Online ");
                        $("#userStatus").css("color", "green");
                        break;
                    case false:
                        $("#userStatus").html(" Estado: Offline ");
                        $("#userStatus").css("color", "red");
                        break;
                }
                reference.addEventsToMenu();
                reference.loadNavBar();
                reference.grantPermissionPosition();
                message.addMessageLoder("loaderMessage", "#mainContent2");
                message.changeMessageLoader("loaderMessage", "Consultando Plantillas");
                /**
                 * Detect if the user has an internet connection available
                 * If it's true == Connection Available
                 */
                if (navigator.onLine == true) {
                    message.changeMessageLoader("loaderMessage", "Obteniendo Visitas Almacenadas");

                    indexDb.getVisits().then(function () {
                        message.changeMessageLoader("loaderMessage", "Subiendo Visitas Almacenadas");
                        return visits.uploadVisitsToCloud();
                    }).then(function(){
                        return visits.getVisitsSaveonCloud();
                    }).then(function(){
                        return visits.updateLocalVisits();
                    }).then(function(){
                        return indexDb.getVisits();
                    }).then(function () {
                        console.log("Visits Saved ", visits.getVisits())
                        return reference.updateSiteExternal();
                    }).then(function () {
                        message.changeMessageLoader("loaderMessage", "Actualizando Plantillas");
                        $.get("https://smart-docs.herokuapp.com/templates/", function (templatesResponse) {
                            templates.templates = templatesResponse;
                            for (let template of templates.templates) {
                                indexDb.addTemplate(template.templateId, template.name, template.project, template.taskType, template.icon, template.content);
                            }
                            return indexDb.getTemplates();
                        }).then(function () {
                            message.changeMessageLoader("loaderMessage", "Obteniendo Plantillas Almacenadas");
                            indexDb.getTemplates().then(function () {
                                message.removeMessageLoader("#mainContent2");
                            });
                        });
                    });
                } else {
                    message.changeMessageLoader("Obteniendo Sitios Almacenados");
                    indexDb.getSites().then(function (resolve, reject) {
                        message.changeMessageLoader("Obteniendo Plantillas Almacenadas");
                        return indexDb.getTemplates();
                    }).then(function () {
                        message.removeMessageLoader("#mainContent2");
                    });

                }
            });
        },

        loadNavBar: function () {
            $(function () {
                $(".navbar-expand-toggle").click(function () {
                    $(".app-container").toggleClass("expanded");
                    return $(".navbar-expand-toggle").toggleClass("fa-rotate-90");
                });
                return $(".navbar-right-expand-toggle").click(function () {
                    $(".navbar-right").toggleClass("expanded");
                    return $(".navbar-right-expand-toggle").toggleClass("fa-rotate-90");
                });
            });

            $(function () {
                return $(".side-menu .nav .dropdown").on('show.bs.collapse', function () {
                    return $(".side-menu .nav .dropdown .collapse").collapse('hide');
                });
            });
        },
        hideNavBar: function () {
            $(".app-container").removeClass("expanded");
            $(".navbar-expand-toggle").removeClass("fa-rotate-90");
        },
        launchUserModal: function () {
            let reference = this;
            $("#userModal").remove();
            $("body").append("<div class='fade modal modal-info'aria-hidden=true aria-labelledby=myModalLabel1 id=userModal role=dialog style=display:none tabindex=-1><div class=modal-dialog><div class=modal-content><div class=modal-header><h4 class=modal-title id=myModalLabel8>Ingresa el usuario</h4></div><div class=modal-body><input type='text' class='form-control' placeholder='Ingresa el usuario de Huawei Smart Docs @OWS' id='username'/></div><div class=modal-footer><button id='btnOpenApp'class='btn btn-info' disabled>Ingresar</button></div></div></div></div>");
            $("#userModal").modal({ backdrop: 'static', keyboard: false });

            $("#username").on("input", function () {
                let usernameval = $("#username").val();
                if (usernameval.length > 5) {
                    localStorage.setItem("username", usernameval);
                    $("#btnOpenApp").attr("disabled", false);
                } else {
                    $("#btnOpenApp").attr("disabled", true);
                }
            });

            $("#btnOpenApp").click(function () {
                $("#userModal").modal('hide');
                reference.initApplication();
            });
        },
        grantPermissionPosition: function () {
            let reference = this;
            var options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };

            function success(pos) {
                var crd = pos.coords;
                console.log('Your current position is:');
                console.log('Latitude : ' + crd.latitude);
                console.log('Longitude: ' + crd.longitude);
                console.log('More or less ' + crd.accuracy + ' meters.');

            };

            function error(err) {
                reference.launchErrorPosition();
                console.warn('ERROR(' + err.code + '): ' + err.message);
            };

            navigator.geolocation.getCurrentPosition(success, error, options);
        },
        launchErrorPosition: function () {
            $("#errorPosition").remove();
            $("body").append("<div class='fade modal modal-danger'aria-hidden=true aria-labelledby=myModalLabel2 id=errorPosition role=dialog style=display:block tabindex=-1><div class=modal-dialog><div class=modal-content><div class=modal-header><h4 class=modal-title id=myModalLabel13>No has permitido el acceso a tu localizacion </h4></div><div class=modal-body><img src='https://cdn4.iconfinder.com/data/icons/flatified/128/map.png' style=margin-left:auto;margin-right:auto;display:block width=150px><h4 style=text-align:center> Por favor, configura tu dispositivo correctamente </h4><h5 style=text-align:center>El accesor a la localizacion ha sido bloqueado <br> <b> Solucion> </b> Ingresa a la configuracion del navegador y modifica los permisos de localizacion </h5><div class='text-center'></div></div></div></div></div>");
            $("#errorPosition").modal({ backdrop: 'static', keyboard: false });
        },
        updateSiteExternal: function () {
            return new Promise(function (resolve, reject) {
                $.get("https://smart-docs.herokuapp.com/sites/", function (sitesResponse) {
                    for (let site of sitesResponse) {
                        indexDb.addSite(site.siteId, site.name, site.fmOffice, site.project);
                    }
                    indexDb.getSites().then(function () {
                        resolve();
                    });
                })
            });
        },
        addEventsToMenu: function () {
            let reference = this;
            let items = [
                { id: "itemInicio", page_route: "dashboard" },
                { id: "itemVisitas", page_route: "allVisits" },
                { id: "itemTemplates", page_route: "allTemplatesBoxes" },
                { id: "itemReportes", page_route: "myReports" },
                { id: "itemLogger", page_route: "myReportsLog" },
                { id: "itemFaq", page_route: "" }
            ];

            for (let item of items) {
                $("#" + item.id).click(function () {
                    reference.changePage(item.page_route);
                    reference.changeActiveMenu(item.id);
                    reference.hideNavBar();
                });
            }
        },
        changeActiveMenu: function (id_page) {
            $(".active").removeClass("active");
            $("#" + id_page).addClass("active");
        },
        changePage: function (page_route) {
            let reference = this;
            $.get("/views/" + page_route + ".html", function (page) {
                $("#mainContent2").html(page);
                reference.loadResources(page_route);
            });
        },
        loadResources: function (page_route) {
            let reference = this;
            switch (page_route) {
                case "allVisits":
                    message.addMessageLoder("loaderMessage", "#mainContent2");
                    message.changeMessageLoader("Consultando Sitios Almacenados");
                    indexDb.getSites().then(function () {
                        message.changeMessageLoader("Consultando Visitas Almacenadas");
                        return indexDb.getVisits();
                    }).then(function () {
                        reference.fillVisitsPage();
                        reference.loadEventNewVisit();
                        message.removeMessageLoader("#mainContent2");
                    });
                    break;
                case "allReportsRelated":
                    message.addMessageLoder("loaderMessage", "#mainContent2");
                    message.changeMessageLoader("Consultando Plantillas Almacenadas");
                    indexDb.getTemplates().then(function () {
                        message.changeMessageLoader("Consultando Reportes Relacionados");
                        return indexDb.getReports();
                    }).then(function () {
                        let reportsFiltered = reports.getReports().filter(function (report) {
                            return report.visitId == visits.visitSelected.visitId;
                        });
                        console.log("Reports Filtered", reportsFiltered);
                        reference.fillBoxesReportsRelated(reportsFiltered);
                        message.removeMessageLoader("#mainContent2");
                    })
                    reference.addEventsReportRelated();
                    break;
                case "allTemplatesBoxes":
                    message.addMessageLoder("loaderMessage", "#mainContent2");
                    message.changeMessageLoader("Consultando Plantillas Almacenadas");
                    indexDb.getReports().then(function () {
                        reference.getAllTemplates();
                        message.removeMessageLoader("#mainContent2");
                    });
                    break;
                case "newReport":
                    message.addMessageLoder("loaderMessage", "#mainContent2");
                    message.changeMessageLoader("Cargando Plantilla Seleccionada");
                    reference.showTemplate();
                    reference.saveAnswerEvent();
                    if (Object.keys(reports.reportSelected).length != 0) {
                        message.changeMessageLoader("Cargando Reporte Almacenado");
                        reference.fillAnswer();
                    }
                    message.removeMessageLoader("#mainContent2");
                    break;
                case "myReports":
                    message.addMessageLoder("loaderMessage", "#mainContent2");
                    message.changeMessageLoader("Cargando Plantilla Seleccionada");
                    console.log("Start Fill Reports");
                    indexDb.getReports().then(function () {
                        reference.fillReportsPage();
                        message.removeMessageLoader("#mainContent2");
                    });
                    break;
                case "myReportsLog":
                    message.addMessageLoder("loaderMessage", "#mainContent2");
                    message.changeMessageLoader("Consultando Logger");
                    indexDb.getReportsLog().then(function () {
                        reference.fillReportsLogPage();
                        message.removeMessageLoader("#mainContent2");
                    });
                    break;
            }
        },
        "siteOptSelected": "",
        loadEventNewVisit() {
            let reference = this;
            $("#new_VisitBtn").click(function () {
                $("#new_visit_modal").remove();
                $("body").append("<div class='fade modal modal-info'aria-hidden=true aria-labelledby=myModalLabel1 id=new_visit_modal role=dialog style=display:block tabindex=-1><div class=modal-dialog><div class=modal-content><div class=modal-header><h4 class=modal-title id=myModalLabel13> Registra una nueva visita </h4></div><div class='modal-body'><label class='text-right'>Nombre Sitio : </label><input id='site_list_register' list='sitesList' class='form-control' placeholder='La funcion de autocompletado funciona cuando escribes mas de 3 caracteres'> <datalist id='sitesList'></datalist><br><p style='text-align: center'><b>Nota:</b> Debes registrar una visita para poder crear reportes del sitio </p></div><div class='modal-footer'><button id='new_visit_register_btn' class='btn btn-info' disabled> Registrar </button> </div> </div></div></div>");
                console.log("Sites before Filter", sites.getAllSites())
                for (let siteElement of sites.getAllSites()) {
                    $("#sitesList").append("<option value='" + siteElement.siteId + "' > " + siteElement.name + " </option>");
                }

                $("#new_visit_modal").modal('show');

                $("input[id='site_list_register']").on('focusout', function (e) {
                    var opt = $('option[value="' + $(this).val() + '"]');
                    if (opt.length) {
                        console.log(opt.attr('value'));
                        reference.siteOptSelected = opt.attr('value');
                        $("#new_visit_register_btn").attr("disabled", false);
                    } else {
                        $("input[id='site_list_register']").val("");
                        console.log("Invalid Option");
                        //$("#invalidOpt").modal('show');
                        $("#new_visit_register_btn").attr("disabled", true);
                    }
                });

                $("#new_visit_register_btn").click(function () {
                    let siteFilter = sites.getAllSites().filter(function (siteEle) {
                        return siteEle.siteId == reference.siteOptSelected;
                    });
                    console.log("Site Filter ", siteFilter);

                    $("#new_visit_modal").modal('hide');
                    indexDb.addVisit(siteFilter[0].siteId, siteFilter[0].name + " - " + siteFilter[0].project + " - " + new Date().toDateString(), localStorage.getItem("username"), false).then(function () {
                        reference.changePage("allTemplatesBoxes");
                    });
                });
            });


        },
        addEventsReportRelated: function () {
            let reference = this;
            $("#add_reportBtn").click(function () {
                reference.changePage("allTemplatesBoxes");
            });

            $("#del_reportBtn").click(function () {
                alert("Se ha eliminado la visita");
            });
        },
        getAllTemplates: function () {
            let reference = this;
            if (navigator.onLine) {
                $.get("https://smart-docs.herokuapp.com/templates/", function (templatesResponse) {
                    templates.templates = templatesResponse;
                    for (let template of templates.templates) {
                        indexDb.addTemplate(template.templateId, template.name, template.project, template.taskType, template.icon, template.content);
                    }
                    reference.fillTemplatesPage();
                })
            } else {
                indexDb.getTemplates().then(function () {
                    reference.fillTemplatesPage({});
                });
            }
        },
        fillVisitsPage: function () {
            let reference = this;
            let visitsResponse = visits.getVisits();
            let cont = 0;
            for (let visit of visitsResponse) {
                $("#visitsNotFound").remove();
                $("#allVisitsDiv").append("<div class='col-sm-12 col-md-6 col-lg-6'><div class=pricing-table><div class=pt-header style=background-color:#fff><div class=plan-pricing><div class=pricing style=font-size:1.5em>" + visit.name + "</div><img style='width:100px' src='/img/visitIcon.svg' style=padding:10px><div class=pricing-type><!--<b>Id:</b>" + visit.visitId + "!--></div></div></div><div class=pt-footer><button id='attachReports" + cont + "' class='btn btn-primary' style='margin-right:5px;box-shadow: 2px 2px 2px #888888;' type=button>Ver Visita</button></div></div></div>");
                $("#attachReports" + cont).on("click", function (event) {
                    visits.visitSelected = visit;
                    reference.changePage("allReportsRelated");
                });
                cont++;
            }
        },
        fillBoxesReportsRelated: function (reportsFiltered) {
            let reference = this;
            let templatesResponse = templates.getTemplates();
            message.addMessageLoder("loaderMessage", "#mainContent2");
            message.changeMessageLoader("loaderMessage", "Filtrando Reportes Relacionados");
            let cont = 0;
            for (let report of reportsFiltered) {
                switch (report.status) {
                    case "SM-Status001":
                        report.status_name = "DRAFT";
                        report.status_background = "yellow";
                        report.status_class = "warning";
                        break;
                    case "SM-Status002":
                        report.status_name = "COMPLETED";
                        report.status_background = "blue";
                        report.status_class = "info";
                        break;
                }
                let templateFilter = templatesResponse.filter(function (template) {
                    return template.templateId == report.templateId;
                });
                templateFilter = templateFilter[0];
                console.log("Template Filter ", templateFilter);
                $("#allReportsRelatedDiv").append("<div class='col-sm-12 col-md-6 col-lg-6'><div class='pricing-table " + report.status_background + "'><div class=pt-header><div class=plan-pricing><div class=pricing style=font-size:1.5em>" + templateFilter.name + "</div><div class=pricing-type> Ultima Modificacion: " + report.lastModification.split("GMT")[0] + "</div></div></div><div class=pt-body><h4>" + report.status_name + "</h4><ul class=plan-detail><li><b>Report Id:<br></b>" + report.reportId + "</ul></div><div class=pt-footer><button id='viewReport_" + cont + "' class='btn btn-" + report.status_class + "'type=button>Ver Detalles</button></div></div></div>");
                $("#viewReport_" + cont).on("click", function (event) {
                    reports.reportSelected = report;
                    templates.templateSelected = templateFilter;
                    reference.changePage('newReport');
                });
                cont++;
            }
            $("#sdmTicket").text(reports.reportSelected.ticket_id);
            message.removeMessageLoader("#mainContent2");
        },
        fillTemplatesPage: function () {
            let reference = this;
            let templatesResponse = templates.getTemplates();
            let cont = 0;
            for (let template of templatesResponse) {
                $("#templatesNotFound").remove();
                $("#allTemplatesDiv").append("<div class='col-sm-12 col-md-6 col-lg-6'><div class=pricing-table><div class=pt-header style=background-color:#fff><div class=plan-pricing><div class=pricing style=font-size:1.5em>" + template.name + "</div><img src='" + template.icon + "'style=padding:10px><div class=pricing-type><!--<b>Id:</b>" + template.templateId + "!--></div></div></div><div class=pt-footer><p><b>Ultima Actualizacion: </b> " + template.lastModification.split("GMT")[0] + " </p><button id='createTemplate" + cont + "'class='btn btn-primary' style='margin-right:5px;box-shadow: 2px 2px 2px #888888;' type=button>Crear Reporte</button></div></div></div>");
                $("#createTemplate" + cont).on("click", function (event) {
                    reports.reportSelected = {};
                    templates.templateSelected = template;
                    reference.changePage("newReport");
                });
                cont += 1;
            }
        },
        showTemplate: function () {
            let reference = this;
            smartEngine.executeEngine(templates.templateSelected.content);
            $('#templateNavTabs a:first').tab('show');
        },
        fillAnswer: function () {
            let reference = this;
            smartEngine.matchAnswers(reports.reportSelected.content);
        },
        launchAnswerCompletedModal: function () {
            $("#completedReport").remove();
            $("body").append("<div class='fade modal modal-info'aria-hidden=true aria-labelledby=myModalLabel1 id=completedReport role=dialog style=display:none tabindex=-1><div class=modal-dialog><div class=modal-content><div class=modal-header><h4 class=modal-title id=myModalLabel8>Todos los campos fueron completados</h4></div><div class=modal-body><img src='/img/completed.png' style=margin-left:auto;margin-right:auto;display:block width=150px><h4 style=text-align:center>Todos los campos obligatorios fueron completados.</h4></div><div class=modal-footer><input class='btn btn-info'data-dismiss=modal type=button value='Guardar el reporte'></div></div></div></div>");
            $("#completedReport").modal({ backdrop: 'static', keyboard: false });
        },
        launchAnswerInCompleteModal: function (emptyFields) {
            $("#incompleteReport").remove();
            $("body").append("<div class='fade modal modal-info'aria-hidden=true aria-labelledby=myModalLabel1 id=incompleteReport role=dialog style=display:none tabindex=-1><div class=modal-dialog><div class=modal-content><div class=modal-header><h4 class=modal-title id=myModalLabel7>Algunos campos no fueron completados</h4></div><div class=modal-body><img src='/img/incompleted.png' style=margin-left:auto;margin-right:auto;display:block width=150px><h4 style=text-align:center>Todos los campos obligatorios no fueron completados</h4><h5 id=emptyFieldsText style=text-align:center></h5></div><div class=modal-footer><input class='btn btn-info'data-dismiss=modal type=button value=Entendido></div></div></div></div>");
            $("#emptyFieldsText").text(emptyFields);
            $("#incompleteReport").modal({ backdrop: 'static', keyboard: false });
        },
        saveAnswerEvent: function () {
            let reference = this;
            $("#btnSave").click(function () {
                let answer = smartEngine.saveAnswer();
                console.log("Smart Engine Answer : ", answer);
                let status;
                switch (answer.completed) {
                    case false:
                        status = "SM-Status001";
                        break;
                    case true:
                        status = "SM-Status002";
                        break;
                }

                let answerObj = JSON.parse(answer.userAnswer);

                if (Object.keys(reports.reportSelected).length == 0) {
                    indexDb.addReport(templates.templateSelected.templateId, visits.visitSelected.visitId, answerObj, status).then(function () {
                        if (answer.completed) {
                            reference.launchAnswerCompletedModal();
                        } else {
                            reference.launchAnswerInCompleteModal(answer.fieldsEmpty);
                        }
                        //notification.sendNotification("Smart Docs", "Se ha creado un nuevo reporte para la visita " + visits.visitSelected.visitId + " /n Estado: " + status);
                        reference.changePage("allVisits");
                    })
                        .catch(function (err) {
                            console.log(err);
                        });
                } else {
                    indexDb.updateReport(reports.reportSelected.reportId, status, answerObj).then(function () {
                        reports.reportSelected = {};
                        reference.changePage("allVisits");
                    });
                }
            });
        },
        fillReportsPage: function () {
            let reference = this;
            //let templatesResponse = templates.getTemplates();
            let reportsResponse = reports.getReports();
            console.log("Reports Response", reportsResponse);
            let cont = 0;
            for (let report of reportsResponse) {
                $("#dataTableAllReport > tbody").append("<tr><td style='cursor:pointer' id='allReports" + cont + "'>" + report.reportId + "</td><td> " + report.name + "</td><td>" + report.status + "</td><td>" + report.lastModification.split("GMT")[0] + "</td><td><input id='allReports" + cont + "Details' type='image' name='image' src='/img/eyeIcon.png'></td></tr>");
                $('#allReports' + cont).add('#allReports' + cont + "Details").on("click", { "report": report }, function (event) {
                    reports.reportSelected = event.data.report;
                    indexDb.getTemplateByTemplateId(reports.reportSelected.templateId).then(function (template) {
                        console.log("Get Template By Id : " + template);
                        templates.templateSelected = template;
                        reference.changePage("newReport");
                    });
                });
                cont += 1;
            }
        },
        fillReportsLogPage: function () {
            let reference = this;
            //let templatesResponse = templates.getTemplates();
            let reportsLogResponse = reports.getReportsLog();
            console.log("Reports Log Response", reportsLogResponse);
            let cont = 0;
            for (let reportLog of reportsLogResponse) {
                let background_status;
                switch (reportLog.status) {
                    case "SM-Status001":
                        background_status = "warning";
                        break;
                    case "SM-Status002":
                        background_status = "info";
                        break;
                }
                $("#dataTableAllReportLog > tbody").append("<tr class= '" + background_status + "' ><td>" + reportLog.reportId + "</td><td> " + reportLog.operation + "</td><td>" + reportLog.status + "</td><td>" + reportLog.operationDate.split("GMT")[0] + "</td></tr>");
            }
        },
        "uploadToVisitToDB": function () {
            console.log("Upload to Visit on Action");
            let reference = this;
            let cont = 0
            let promisesUpdate = [];
            for (let visitsToUpd of visits.getVisits()) {
                if (!visitsToUpd.cloud) {
                    this["visitsToUpdate" + cont] = reference.postVisitRequest({
                        siteId: visitsToUpd.siteId,
                        visitId: visitsToUpd.visitId,
                        author: visitsToUpd.user,
                        creationDate: visitsToUpd.creationDate
                    });
                    promisesUpdate.push(this["visitsToUpdate" + cont]);
                    cont += 1;
                }
            }
            return new Promise(function (resolve, reject) {
                Promise.all(promisesUpdate).then(function (values) {
                    console.log("Visits Update ", values);
                    resolve();
                }).catch(function (err) {
                    reject(err);
                })
            });
        },
        "postVisitRequest": function (dataToUpdate) {
            let updateVisitLocal = new Promise(function (resolve, reject) {

            });

            return new Promise(function (resolve, reject) {
                $.post("https://smart-docs.herokuapp.com/visits/", dataToUpdate)
                    .done(function (data) {
                        resolve(data);
                    });
            });
        }
    }


    message.addMessageLoder("loaderMessage", "#mainContent2");
    message.changeMessageLoader("loaderMessage", "Iniciando La Conexion");
    indexDb.startIndexedDB().then(function () {
        message.removeMessageLoader("#mainContent2");
        if (localStorage.getItem("username") == null) {
            smartDocsOffline.launchUserModal();
        } else {
            smartDocsOffline.initApplication();
        }
    });
})();