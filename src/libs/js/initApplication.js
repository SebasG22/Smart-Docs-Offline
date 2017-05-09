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


(function () {
    let smartDocsOffline = {
        initApplication: function () {
            let reference = this;
            $.get("/views/dashboard.html", function (page) {
                $("#mainContent2").html(page);
                notification.sendNotification("Bievenido a Smart Docs","Registra visitas para poder agregar reportes");
                reference.addEventsToMenu();
                reference.loadNavBar();
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
                    indexDb.getVisits().then(function () {
                        reference.fillVisitsPage();
                        reference.loadEventNewVisit();
                    });
                    break;
                case "allReportsRelated":
                    indexDb.getTemplates().then(function () {
                        return indexDb.getReports();
                    }).then(function () {
                        let reportsFiltered = reports.getReports().filter(function (report) {
                            return report.site == visits.visitSelected.visitId;
                        });
                        console.log("Reports Filtered", reportsFiltered);
                        reference.fillBoxesReportsRelated(reportsFiltered);
                    })
                    reference.addEventsReportRelated();
                    break;
                case "allTemplatesBoxes":
                    indexDb.getReports().then(function () {
                        reference.getAllTemplates();
                    });
                    break;
                case "newReport":
                    reference.showTemplate();
                    reference.saveAnswerEvent();
                    if (Object.keys(reports.reportSelected).length != 0) {
                        reference.fillAnswer();
                    }
                    break;
                case "myReports":
                    console.log("Start Fill Reports");
                    indexDb.getReports().then(function () {
                        reference.fillReportsPage();
                    });
                    break;
                case "myReportsLog":
                    indexDb.getReportsLog().then(function () {
                        reference.fillReportsLogPage();
                    });
                    break;
            }
        },
        loadEventNewVisit() {
            let reference = this;
            $("#new_VisitBtn").click(function () {
                $("#new_visit_modal").remove();
                $("body").append("<div class='fade modal modal-info'aria-hidden=true aria-labelledby=myModalLabel1 id=new_visit_modal role=dialog style=display:block tabindex=-1><div class=modal-dialog><div class=modal-content><div class=modal-header><h4 class=modal-title id=myModalLabel13> Registra una nueva visita </h4></div><div class='modal-body'><label class='text-right'>Nombre Sitio : </label><input id='site_name_register' type='text' class='form-control' placeholder='El nombre del sitio debe tener al menos 5 caracteres'><br><p style='text-align: center'><b>Nota:</b> Debes registrar una visita para poder crear reportes del sitio </p></div><div class='modal-footer'><button id='new_visit_register_btn' class='btn btn-info' disabled> Registrar </button> </div> </div></div></div>");
                $("#new_visit_modal").modal({ backdrop: 'static', keyboard: false });

                $("#site_name_register").on("input", function () {
                    let site = $("#site_name_register").val();

                    if (site.length > 5) {
                        $("#new_visit_register_btn").attr("disabled", false);
                    }
                    else {
                        $("#new_visit_register_btn").attr("disabled", true);
                    }
                });

                $("#new_visit_register_btn").click(function () {
                    let site = $("#site_name_register").val();
                    $("#new_visit_modal").modal('hide');
                    indexDb.addVisit(site).then(function () {
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
            }
            else {
                indexDb.getTemplates();
                reference.fillTemplatesPage({});
            }
        },
        fillVisitsPage: function () {
            let reference = this;
            let visitsResponse = visits.getVisits();
            let cont = 0;
            for (let visit of visitsResponse) {
                $("#visitsNotFound").remove();
                $("#allVisitsDiv").append("<div class='col-sm-12 col-md-6 col-lg-6'><div class=pricing-table><div class=pt-header style=background-color:#fff><div class=plan-pricing><div class=pricing style=font-size:1.5em>" + visit.site + "</div><img style='width:100px' src='/img/visitIcon.svg' style=padding:10px><div class=pricing-type><!--<b>Id:</b>" + visit.visitId + "!--></div></div></div><div class=pt-footer><button id='attachReports" + cont + "' class='btn btn-primary' style='margin-right:5px;box-shadow: 2px 2px 2px #888888;' type=button>Ver Visita</button></div></div></div>");
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
            for (let template of templatesResponse) {
                $("#templatesNotFound").remove();
                $("#allTemplatesDiv").append("<div class='col-sm-12 col-md-6 col-lg-6'><div class=pricing-table><div class=pt-header style=background-color:#fff><div class=plan-pricing><div class=pricing style=font-size:1.5em>" + template.name + "</div><img src='" + template.icon + "'style=padding:10px><div class=pricing-type><!--<b>Id:</b>" + template.templateId + "!--></div></div></div><div class=pt-footer><p><b>Ultima Actualizacion: </b> " + template.lastModification.split("GMT")[0] + " </p><button id='createTemplate'class='btn btn-primary' style='margin-right:5px;box-shadow: 2px 2px 2px #888888;' type=button>Crear Reporte</button></div></div></div>");
                $("#createTemplate").on("click", function (event) {
                    reports.reportSelected = {};
                    templates.templateSelected = template;
                    reference.changePage("newReport");
                });
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
                        notification.sendNotification("Smart Docs","Se ha creado un nuevo reporte para la visita " + visits.visitSelected.visitId + " /n Estado: " + status );
                        reference.changePage("allVisits");
                    })
                        .catch(function (err) {
                            console.log(err);
                        });
                }
                else {
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
                $('#allReports' + cont).add('#allReports' + cont + "Details").on("click",
                    { "report": report }, function (event) {
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
        }
    }

    smartDocsOffline.initApplication();
    indexDb.startIndexedDB();

})();