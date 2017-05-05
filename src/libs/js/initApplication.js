import './../css/flat-blue.css';
import './../css/style.css';
let smartEngine = require("./smartEngine");
let templates = require("./templates");
let reports = require("./reports");
let indexDb = require("./indexedDb");


(function () {
    let smartDocsOffline = {
        initApplication: function () {
            let reference = this;
            $.get("/views/dashboard.html", function (page) {
                $("#mainContent2").html(page);
            });
            reference.addEventsToMenu();
        },
        addEventsToMenu: function () {
            let reference = this;
            let items = [
                { id: "itemInicio", page_route: "dashboard" },
                { id: "itemTemplates", page_route: "allTemplatesBoxes" },
                { id: "itemReportes", page_route: "myReports" },
                { id: "itemLogger", page_route: "" },
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
                case "allTemplatesBoxes":
                    reference.getAllTemplates();
                    break;
                case "newReport":
                    reference.showTemplate();
                    if(Object.keys(reports.reportSelected).length == 0){
                        $("#btnSave").click(function () {
                        let answer = smartEngine.saveAnswer();
                        let status;
                        switch (answer.completed) {
                            case true:
                                status = "SM-Status001";
                                break;
                            case false:
                                status = "SM-Status002";
                                break;
                        }
                        indexDb.addReport("Test", templates.templateSelected.templateId, JSON.parse(answer.userAnswer), status).then(function(){
                                                    reference.changePage("myReports");
                        })
                        .catch(function(err){
                            console.log(err);
                        });
                    });
                }
                else{
                    smartEngine.matchAnswers(reports.reportSelected.content);
                }
                    break;
                case "myReports":
                console.log("Start Fill Reports");
                    indexDb.getTemplates();
                    indexDb.getReports().then(function(){
                        reference.fillReportsPage();
                    });
                    break;
            }
        },
        getAllTemplates: function () {
            let reference = this;
            if (navigator.onLine) {
                $.get("http://localhost:3000/templates/", function (templatesResponse) {
                    templates.templates = templatesResponse;
                    for (let template of templates.templates) {
                        indexDb.addTemplate(template.templateId, "Test", template.project, template.icon, template.content);
                    }
                    reference.fillTemplatesPage();

                })
            }
            else {
                indexDb.getTemplates();
                reference.fillTemplatesPage({});
            }
        },
        fillTemplatesPage: function () {
            let reference = this;
            let templatesResponse = templates.getTemplates();
            for (let template of templatesResponse) {
                $("#templatesNotFound").remove();
                $("#allTemplatesDiv").append("<div class='col-sm-12 col-md-6 col-lg-6'><div class=pricing-table><div class=pt-header style=background-color:#fff><div class=plan-pricing><div class=pricing style=font-size:1.5em>" + template.name + "</div><img src='" + template.icon + "'style=padding:10px><div class=pricing-type><!--<b>Id:</b>" + template.templateId + "!--></div></div></div><div class=pt-footer><p><b>Ultima Actualizacion: </b> " + template.lastModification + " </p><button id='createTemplate'class='btn btn-primary' style='margin-right:5px;box-shadow: 2px 2px 2px #888888;' type=button>Crear Reporte</button></div></div></div>");
                $("#createTemplate").on("click", function (event) {
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
        fillReportsPage: function () {
            let reference = this;
            let templatesResponse = templates.getTemplates();
            let reportsResponse = reports.getReports();
            console.log("Templates Response",templatesResponse);
            let cont = 0 ;
            for (let report of reportsResponse) {
                $("#dataTableAllReport > tbody").append("<tr><td style='cursor:pointer' id='allReports" + cont + "'>" + report.reportId + "</td><td> " + report.name + "</td><td>" + report.status + "</td><td>" + report.lastModification + "</td><td><input id='allReports" + cont + "Details' type='image' name='image' src='/img/eyeIcon.png'></td></tr>");
                $('#allReports' + cont).add('#allReports' + cont + "Details").on("click",
                    {"report": report }, function (event) {
                        reports.reportSelected = event.data.report;
                        reference.changePage("newReport");
                    });
                cont += 1;
            }
        }
    }

    smartDocsOffline.initApplication();
    indexDb.startIndexedDB();

})();