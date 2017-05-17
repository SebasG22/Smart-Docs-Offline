let message = require("./messages");

module.exports = {
    "imgTo64": function (input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            var canvas = $("#canvasRezise")[0];
            var ctx = canvas.getContext('2d');
            var img = new Image();
            reader.onload = function (e) {
                console.log(input.id.replace("Event", ""));
                ctx.drawImage(img, 100, 100, widthSize, heigthSize);

                var widthSize = 768;
                var heigthSize = 1024;
                $('#' + input.id.replace("Event", "")).attr('src', $('#canvasRezise')[0].toDataURL());

            }
            img.src = e.target.result;

            reader.readAsDataURL(input.files[0]);
        }
    },
    "showTable": function (tableId) {
        let reference = this;
        let tableValues = JSON.parse($("#" + tableId + "Value").val());
        //console.log("Show table in action", tableValues);
        $("#" + tableId + "> tbody").html("");
        tableValues.forEach((tableVal, indexBig) => {
            tableVal.forEach((val, index) => {
                if (index == 0) {
                    console.log("Imprimir TR con IndexInterno:" + val);
                    $("#" + tableId + " > tbody").append("<tr id='" + tableId + + tableVal[0] + "' value='" + tableVal + "'><td>" + indexBig + "</td></tr>");
                }
                else {
                    console.log("Imprimir TD con valor :" + val);
                    $("#" + tableId + " > tbody > tr[id='" + tableId + tableVal[0] + "']").append("<td>" + val + "</td>");
                }
                if (index == tableVal.length - 1) {
                    $("#" + tableId + " > tbody > tr[id='" + tableId + tableVal[0] + "']").append("<td><div id='" + tableVal[0] + "Del'> <i class='fa fa-trash-o'></i>Eliminar</div></td>");

                    $("#" + tableVal[0] + "Del").click(function () {
                        let id = this.id;
                        let dataSearch = id.replace("Del", "");
                        let tableData = JSON.parse($("#" + tableId + "Value").val());

                        tableData.forEach((value, indexData) => {
                            if (dataSearch == value[0]) {
                                console.log("I found the value", tableData[indexData]);
                                tableData.splice(indexData, 1);
                                $("#" + tableId + "Value").val(JSON.stringify(tableData));
                                reference.showTable(tableId);
                            }
                        });

                    });

                }

            });

        });

    },
    "addToTable": function (tableId, values, indix) {
        let reference = this;
        //console.log("Add to table in action" + values);
        let tableValues = $("#" + tableId + "Value").val();
        $("#" + tableId + "> tbody").html("");
        if (tableValues != "") {
            tableValues = JSON.parse($("#" + tableId + "Value").val());
            tableValues.push(values);
            $("#" + tableId + "Value").val(JSON.stringify(tableValues));
        }
        else {
            tableValues = [];
            tableValues.push(values);
            $("#" + tableId + "Value").val(JSON.stringify(tableValues));
        }
        let doIt = false;
        let temp = 0;
        tableValues.forEach(function (tableVal, indexBig) {
            tableVal.forEach(function (val, index) {
                if (index == 0) {
                    console.log("Imprimir TR con IndexInterno:" + val);
                    $("#" + tableId + " > tbody").append("<tr id='" + tableId + + tableVal[0] + "' value='" + tableVal + "'><td>" + indexBig + "</td></tr>");
                }
                else {
                    console.log("Imprimir TD con valor :" + val);
                    $("#" + tableId + " > tbody > tr[id='" + tableId + tableVal[0] + "']").append("<td>" + val + "</td>");
                }
                if (index == tableVal.length - 1) {
                    $("#" + tableId + " > tbody > tr[id='" + tableId + tableVal[0] + "']").append("<td><div id='" + tableVal[0] + "Del'> <i class='fa fa-trash-o'></i>Eliminar</div></td>");

                    $("#" + tableVal[0] + "Del").click(function () {
                        let id = this.id;
                        let dataSearch = id.replace("Del", "");
                        let tableData = JSON.parse($("#" + tableId + "Value").val());
                        tableData.forEach(function (value, indexData) {
                            if (dataSearch == value[0]) {
                                console.log("I found the value", tableData[indexData]);
                                tableData.splice(indexData, 1);
                                $("#" + tableId + "Value").val(JSON.stringify(tableData));
                                reference.showTable(tableId);
                            }
                        });

                    });

                }

            });

        });
    },
    allInputs: [],
    "executeEngine": function (template) {
        let reference = this;
        reference.allInputs = [];
        //Variable to generate a id for RadioButtons
        var id_gen = 0;
        //Variable for default image
        var defaultImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAIAAABEtEjdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFRkVFMEI5M0E2QkMxMUU2QjUxMUY2QzdEQUU2NTQ2OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFRkVFMEI5NEE2QkMxMUU2QjUxMUY2QzdEQUU2NTQ2OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVGRUUwQjkxQTZCQzExRTZCNTExRjZDN0RBRTY1NDY4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVGRUUwQjkyQTZCQzExRTZCNTExRjZDN0RBRTY1NDY4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Z8XpDgAAmltJREFUeNrsvQtYXNl1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";

        template.tabs.forEach((valueTab, indexTab) => {
            valueTab.navtab.forEach((valuenavTab, indexnavTab) => {
                //Generating navTabs
                $("#templateNavTabs").append("<li role='" + valueTab.role + "' class='" + valueTab.class + "'>" +
                    "<a href='#" + valuenavTab.location + "' role='" + valuenavTab.role + "' aria-controls='" + valuenavTab.location + "' data-toggle='" + valuenavTab.data_toggle + "' >" + valuenavTab.title + "</a></li>");

                valueTab.panel.forEach(function (valueTabPanel, indexTabPanel) {
                    //Generating the tabPanel
                    $("#templateTabsPanel").append("<div role='" + valueTabPanel.role + "' class='" + valueTabPanel.class + "' id='" + valuenavTab.location + "'></div>");

                    $("#" + valuenavTab.location).append("<div class=''");
                    valueTabPanel.subpanel.forEach(function (valueSubPanel, indexSTabContent) {
                        $("#" + valuenavTab.location).append("<div id='" + valueSubPanel.id + "' class='" + valueSubPanel.class + "'> " +
                            "<div class='panel-heading'><h3 class='panel-title'></h3>" + valueSubPanel.title + "</div>" +
                            "<div class='panel-body'>" + "</div></div>");


                        let typeInside;

                        valueSubPanel.elements.forEach(function (valueSubPanelEle, indexSubPanelEle) {

                            switch (valueSubPanelEle.type) {


                                case "date": case "datetime": case "time": case "month": case "week":

                                    reference.allInputs.push({ 'name': valueSubPanelEle.label.value, 'selector': valueSubPanelEle.id, "type": valueSubPanelEle.type, "required": valueSubPanelEle.required });



                                    switch (valueSubPanelEle.type) {
                                        case "date": typeInside = "date"; break;
                                        case "datetime": typeInside = "datetime-local"; break;
                                        case "time": typeInside = "time"; break;
                                        case "week": typeInside = "week"; break;
                                        case "month": typeInside = "month"; break;
                                    }

                                    //Adding the input 
                                    $("#" + valueSubPanel.id + " > .panel-body ").append("<div id='" + valueSubPanelEle.idDiv + "' class='" + valueSubPanelEle.divClass + "'><label class='" + valueSubPanelEle.label.class + "'>" + valueSubPanelEle.label.value + "</label> <input id='" + valueSubPanelEle.id + "' class='" + valueSubPanelEle.class + "' name='" + valueSubPanelEle.name + "' type='" + typeInside + "'></div>");


                                    //Validate ReadOnly Attribute
                                    if (valueSubPanelEle.readOnly == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > input[type='" + typeInside + "']").prop('readOnly', function () {
                                            return true;
                                        });
                                    }

                                    //Validate Disabled Attribute
                                    if (valueSubPanelEle.disabled == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > input[type='" + typeInside + "']").prop('disabled', function () {
                                            return true;
                                        });
                                    }

                                    //Validate Required Attribute
                                    if (valueSubPanelEle.required == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > .control-label").text("* " + valueSubPanelEle.label.value);
                                        $("#" + valueSubPanelEle.idDiv + " > input[type='" + typeInside + "']").prop('required', function () {
                                            return true;
                                        });
                                    }

                                    //Validate AutoFocus Attribute
                                    if (valueSubPanelEle.autofocus == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > input[type='" + typeInside + "']").prop('autofocus', function () {
                                            return true;
                                        });
                                    }

                                    switch (typeInside) {

                                        case "date":

                                            //Min Date
                                            switch (valueSubPanelEle.min) {
                                                case "today":
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='date']").prop('min', function () {
                                                        return new Date().toJSON().split('T')[0];
                                                    });
                                                    break;
                                                case "tomorrow":
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='date']").prop('min', function () {
                                                        var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
                                                        var day = currentDate.getDate();
                                                        var month = currentDate.getMonth() + 1;
                                                        var year = currentDate.getFullYear();
                                                        if (day < 10) {
                                                            day = 0 + "" + day;
                                                        }
                                                        return "" + year + "-" + month + "-" + day;
                                                    });
                                                    break;
                                                default:
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='date']").prop('min', function () {
                                                        return valueSubPanelEle.min;
                                                    });
                                                    break;
                                            }

                                            //Max Date
                                            switch (valueSubPanelEle.max) {
                                                case "today":
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='date']").prop('max', function () {
                                                        return new Date().toJSON().split('T')[0];
                                                    });
                                                    break;
                                                case "tomorrow":
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='date']").prop('max', function () {
                                                        var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
                                                        var day = currentDate.getDate();
                                                        var month = currentDate.getMonth() + 1;
                                                        var year = currentDate.getFullYear();
                                                        if (day < 10) {
                                                            day = 0 + "" + day;
                                                        }
                                                        return "" + year + "-" + month + "-" + day;
                                                    });
                                                    break;
                                                default:
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='date']").prop('max', function () {
                                                        return valueSubPanelEle.max;
                                                    });
                                                    break;
                                            }

                                            break;

                                        case "datetime-local":

                                            //Min Date
                                            switch (valueSubPanelEle.min) {
                                                case "today":
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='datetime-local']").prop('min', function () {
                                                        var str = new Date().toJSON().split('.')[0];
                                                        return str.split('T')[0] + "T00:00:00";
                                                    });
                                                    break;
                                                case "tomorrow":
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='datetime-local']").prop('min', function () {
                                                        var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
                                                        var day = currentDate.getDate();
                                                        var month = currentDate.getMonth() + 1;
                                                        var year = currentDate.getFullYear();
                                                        if (day < 10) {
                                                            day = 0 + "" + day;
                                                        }
                                                        return "" + year + "-" + month + "-" + day + "T00:00:00";
                                                    });
                                                    break;
                                                default:
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='datetime-local']").prop('min', function () {
                                                        return valueSubPanelEle.min;
                                                    });
                                                    break;
                                            }

                                            //Validate Max Date
                                            switch (valueSubPanelEle.max) {
                                                case "today":
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='datetime-local']").prop('max', function () {
                                                        return new Date().toJSON().split('.')[0];
                                                    });
                                                    break;
                                                case "tomorrow":
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='datetime-local']").prop('max', function () {
                                                        var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
                                                        var day = currentDate.getDate();
                                                        var month = currentDate.getMonth() + 1;
                                                        var year = currentDate.getFullYear();
                                                        if (day < 10) {
                                                            day = 0 + "" + day;
                                                        }
                                                        return "" + year + "-" + month + "-" + day + "T12:00";
                                                    });
                                                    break;
                                                default:
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='datetime-local']").prop('max', function () {
                                                        return valueSubPanelEle.max;
                                                    });
                                                    break;
                                            }

                                            break;

                                        case "month":
                                            switch (valueSubPanelEle.min) {
                                                case "TM":
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='month']").prop('min', function () {
                                                        date = new Date().toJSON().split('-');
                                                        return date[0] + "-" + date[1];
                                                    });
                                                    break;
                                                case "NM":
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='month']").prop('min', function () {
                                                        var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
                                                        var month = currentDate.getMonth() + 1;
                                                        var year = currentDate.getFullYear();
                                                        if (parseInt(month) == 12) {
                                                            return "" + parseInt(year + 1) + "-01";
                                                        }
                                                        else {
                                                            return "" + year + "-" + parseInt(month + 1);
                                                        }
                                                    });
                                                    break;
                                                default:
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='month']").prop('min', function () {
                                                        return valueSubPanelEle.min;
                                                    });
                                                    break;
                                            }
                                            //Validate Max Date
                                            switch (valueSubPanelEle.max) {
                                                case "TM":
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='month']").prop('max', function () {
                                                        date = new Date().toJSON().split('-');
                                                        return date[0] + "-" + date[1];
                                                    });
                                                    break;
                                                case "NM":
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='month']").prop('max', function () {
                                                        var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
                                                        var month = currentDate.getMonth() + 1;
                                                        var year = currentDate.getFullYear();
                                                        if (parseInt(month) == 12) {
                                                            return "" + parseInt(year + 1) + "-01";
                                                        }
                                                        else {
                                                            return "" + year + "-" + parseInt(month + 1);
                                                        }
                                                    });
                                                    break;
                                                default:
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='month']").prop('max', function () {
                                                        return valueSubPanelEle.max;
                                                    });
                                                    break;
                                            }
                                            break;

                                            break;
                                    }


                                    //Validate Step Attribute
                                    if (valueSubPanelEle.step != undefined) {
                                        $("#" + valueSubPanelEle.idDiv + " > input[type='" + typeInside + "']").prop('step', function () {
                                            return valueSubPanelEle.step;
                                        });
                                    }

                                    break;

                                case "text": case "textArea":

                                    reference.allInputs.push({ 'name': valueSubPanelEle.label.value, selector: valueSubPanelEle.id, "type": valueSubPanelEle.type, "required": valueSubPanelEle.required });

                                    let textSelector;

                                    switch (valueSubPanelEle.type) {
                                        case "text":
                                            //Adding the input
                                            $("#" + valueSubPanel.id + " > .panel-body ").append("<div id='" + valueSubPanelEle.idDiv + "' class='" + valueSubPanelEle.divClass + "'><label class='" + valueSubPanelEle.label.class + "'>" + valueSubPanelEle.label.value + "</label> <input id='" + valueSubPanelEle.id + "' class='" + valueSubPanelEle.class + "' name='" + valueSubPanelEle.name + "' type='text'> </div>");

                                            textSelector = " > input[type='text']";

                                            break;

                                        case "textArea":
                                            //Adding the input
                                            $("#" + valueSubPanel.id + " > .panel-body ").append("<div id='" + valueSubPanelEle.idDiv + "' class='" + valueSubPanelEle.divClass + "'><label class='" + valueSubPanelEle.label.class + "'>" + valueSubPanelEle.label.value + "</label> <textarea id='" + valueSubPanelEle.id + "' class='" + valueSubPanelEle.class + "' name='" + valueSubPanelEle.name + "'> </textarea></div>");

                                            textSelector = " > textArea";

                                            break;
                                    }


                                    //Validate ReadOnly Attribute
                                    if (valueSubPanelEle.readOnly == true) {
                                        $("#" + valueSubPanelEle.idDiv + textSelector).prop('readOnly', function () {
                                            return true;
                                        });
                                    }

                                    //Validate Disabled Attribute
                                    if (valueSubPanelEle.disabled == true) {
                                        $("#" + valueSubPanelEle.idDiv + textSelector).prop('disabled', function () {
                                            return true;
                                        });
                                    }

                                    //Validate Required Attribute
                                    if (valueSubPanelEle.required == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > .control-label").text("* " + valueSubPanelEle.label.value);
                                        $("#" + valueSubPanelEle.idDiv + textSelector).prop('required', function () {
                                            return true;
                                        });
                                    }

                                    //Validate AutoFocus Attribute
                                    if (valueSubPanelEle.autofocus == true) {
                                        $("#" + valueSubPanelEle.idDiv + textSelector).prop('autofocus', function () {
                                            return true;
                                        });
                                    }

                                    //Validate MaxLength Attribute
                                    if (valueSubPanelEle.maxLenght > 0) {
                                        $("#" + valueSubPanelEle.idDiv + textSelector).prop('maxLength', function () {
                                            return valueSubPanelEle.maxLenght;
                                        });
                                    }

                                    break;

                                case "number":

                                    $("#" + valueSubPanel.id + " > .panel-body ").append("<div id='" + valueSubPanelEle.idDiv + "' class='" + valueSubPanelEle.divClass + "'><label class='" + valueSubPanelEle.label.class + "'>" + valueSubPanelEle.label.value + "</label> <input id='" + valueSubPanelEle.id + "'class='" + valueSubPanelEle.class + "' name='" + valueSubPanelEle.name + "' type='number'> </div>");

                                    reference.allInputs.push({ 'name': valueSubPanelEle.label.value, 'selector': valueSubPanelEle.id, "type": valueSubPanelEle.type, "required": valueSubPanelEle.required });

                                    //Validate ReadOnly Attribute
                                    if (valueSubPanelEle.readOnly == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > input[type='number']").prop('readOnly', function () {
                                            return true;
                                        });
                                    }

                                    //Validate Disabled Attribute
                                    if (valueSubPanelEle.disabled == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > input[type='number']").prop('disabled', function () {
                                            return true;
                                        });
                                    }

                                    //Validate Required Attribute
                                    if (valueSubPanelEle.required == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > .control-label").text("* " + valueSubPanelEle.label.value);
                                        $("#" + valueSubPanelEle.idDiv + " > input[type='number']").prop('required', function () {
                                            return true;
                                        });
                                    }

                                    //Validate AutoFocus Attribute
                                    if (valueSubPanelEle.autofocus == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > input[type='number']").prop('autofocus', function () {
                                            return true;
                                        });
                                    }

                                    //Validate MaxLength Attribute
                                    if (valueSubPanelEle.min > 0) {
                                        $("#" + valueSubPanelEle.idDiv + " > input[type='number']").prop('min', function () {
                                            return valueSubPanelEle.min;
                                        });
                                    }

                                    //Validate MaxLength Attribute
                                    if (valueSubPanelEle.max > 0) {
                                        $("#" + valueSubPanelEle.idDiv + " > input[type='number']").prop('max', function () {
                                            return valueSubPanelEle.max;
                                        });
                                    }

                                    break;


                                case "radio": case "checkbox":

                                    reference.allInputs.push({ 'name': valueSubPanelEle.label.value, 'selector': valueSubPanelEle.name, "type": valueSubPanelEle.type, "required": valueSubPanelEle.required });

                                    switch (valueSubPanelEle.type) {

                                        case "radio": typeInside = "radio"; break;
                                        case "checkbox": typeInside = "checkbox"; break;

                                    }

                                    $("#" + valueSubPanel.id + " > .panel-body ").append("<div id='" + valueSubPanelEle.idDiv + "' class='" + valueSubPanelEle.divClass + "'><label class='" + valueSubPanelEle.label.class + "'>" + valueSubPanelEle.label.value + "</label> </div>");

                                    valueSubPanelEle.options.forEach(function (listItem, indexList) {
                                        $("#" + valueSubPanelEle.idDiv).append("<div class='" + valueSubPanelEle.class + "'>" +
                                            "<input type='" + typeInside + "' id='id" + id_gen + "' name='" + valueSubPanelEle.name + "'  value='" + listItem.value + "'> <label for='id" + id_gen + "'> " + listItem.label + "</label></div>");

                                        //Validate ReadOnly Attribute
                                        if (valueSubPanelEle.readOnly == true) {
                                            $("#id" + id_gen).prop('readOnly', function () {
                                                return true;
                                            });
                                        }

                                        //Validate Disabled Attribute
                                        if (valueSubPanelEle.disabled == true) {
                                            $("#id" + id_gen).prop('disabled', function () {
                                                return true;
                                            });
                                        }

                                        //Validate Required Attribute
                                        if (valueSubPanelEle.required == true) {
                                            $("#" + valueSubPanelEle.idDiv + " > .control-label").text("* " + valueSubPanelEle.label.value);
                                            $("#id" + id_gen).prop('required', function () {
                                                return true;
                                            });
                                        }

                                        //Validate AutoFocus Attribute
                                        if (valueSubPanelEle.autofocus == true) {
                                            $("#id" + id_gen).prop('autofocus', function () {
                                                return true;
                                            });
                                        }


                                        id_gen += 1;

                                    });


                                    break;


                                case "select":

                                    $("#" + valueSubPanel.id + " > .panel-body ").append("<div id='" + valueSubPanelEle.idDiv + "' class='" + valueSubPanelEle.divClass + "'><label class='" + valueSubPanelEle.label.class + "'>" + valueSubPanelEle.label.value + "</label> <select id='" + valueSubPanelEle.id + "' class='" + valueSubPanelEle.class + "' name='" + valueSubPanelEle.name + "'> </select></div>");

                                    reference.allInputs.push({ 'name': valueSubPanelEle.label.value, 'selector': valueSubPanelEle.id, "type": valueSubPanelEle.type, "required": valueSubPanelEle.required });

                                    valueSubPanelEle.options.forEach(function (valueOption, indexOption) {
                                        $("#" + valueSubPanelEle.id).append("<option value='" + valueOption.value + "'>" + valueOption.label + "</option>");
                                    });

                                    if (valueSubPanelEle.service.name == "") {
                                        MessageProcessor.process({
                                            serviceId: valueSubPanelEle.service.name,
                                            data: valueSubPanelEle.service.params,
                                            success: function (data) {
                                                data.results.forEach(function (valueOption, indexOption) {
                                                    $("#" + valueSubPanelEle.id).append("<option value='" + valueOption[valueSubPanelEle.service.radio] + "'>" + valueOption[valueSubPanelEle.service.label] + "</option>");
                                                });
                                            }
                                        });
                                    }

                                    //Validate ReadOnly Attribute
                                    if (valueSubPanelEle.readOnly == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > select").prop('readOnly', function () {
                                            return true;
                                        });
                                    }

                                    //Validate Disabled Attribute
                                    if (valueSubPanelEle.disabled == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > select").prop('disabled', function () {
                                            return true;
                                        });
                                    }

                                    //Validate Required Attribute
                                    if (valueSubPanelEle.required == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > .control-label").text("* " + valueSubPanelEle.label.value);
                                        $("#" + valueSubPanelEle.idDiv + " > select").prop('required', function () {
                                            return true;
                                        });
                                    }

                                    //Validate AutoFocus Attribute
                                    if (valueSubPanelEle.autofocus == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > select").prop('autofocus', function () {
                                            return true;
                                        });
                                    }

                                    break;

                                case "multiSelect":

                                    $("#" + valueSubPanel.id + " > .panel-body ").append("<div id='" + valueSubPanelEle.idDiv + "' class='" + valueSubPanelEle.divClass + "'><label class='" + valueSubPanelEle.label.class + "'>" + valueSubPanelEle.label.value + "</label> <select multiple id='" + valueSubPanelEle.id + "' class='" + valueSubPanelEle.class + "' name='" + valueSubPanelEle.name + "'> </select></div>");

                                    reference.allInputs.push({ 'name': valueSubPanelEle.label.value, 'selector': valueSubPanelEle.id, "type": valueSubPanelEle.type, "required": valueSubPanelEle.required });

                                    valueSubPanelEle.options.forEach(function (valueOption, indexOption) {
                                        $("#" + valueSubPanelEle.id).append("<option value='" + valueOption.value + "'>" + valueOption.label + "</option>");
                                    });

                                    if (valueSubPanelEle.service.name == "") {
                                        MessageProcessor.process({
                                            serviceId: valueSubPanelEle.service.name,
                                            data: valueSubPanelEle.service.params,
                                            success: function (data) {
                                                data.results.forEach(function (valueOption, indexOption) {
                                                    $("#" + valueSubPanelEle.id).append("<option value='" + valueOption[valueSubPanelEle.service.radio] + "'>" + valueOption[valueSubPanelEle.service.label] + "</option>");
                                                });
                                            }
                                        });
                                    }

                                    //Validate ReadOnly Attribute
                                    if (valueSubPanelEle.readOnly == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > select").prop('readOnly', function () {
                                            return true;
                                        });
                                    }

                                    //Validate Disabled Attribute
                                    if (valueSubPanelEle.disabled == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > select").prop('disabled', function () {
                                            return true;
                                        });
                                    }

                                    //Validate Required Attribute
                                    if (valueSubPanelEle.required == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > .control-label").text("* " + valueSubPanelEle.label.value);
                                        $("#" + valueSubPanelEle.idDiv + " > select").prop('required', function () {
                                            return true;
                                        });
                                    }

                                    //Validate AutoFocus Attribute
                                    if (valueSubPanelEle.autofocus == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > select").prop('autofocus', function () {
                                            return true;
                                        });
                                    }

                                    break;

                                case "list":

                                    $("#" + valueSubPanel.id + " > .panel-body ").append("<div id='" + valueSubPanelEle.idDiv + "' class='" + valueSubPanelEle.divClass + "'><label class='" + valueSubPanelEle.label.class + "'>" + valueSubPanelEle.label.value + "</label> <input list='" + valueSubPanelEle.id + "' id='" + valueSubPanelEle.id + "List' class='" + valueSubPanelEle.class + "' name='" + valueSubPanelEle.name + "'><datalist id='" + valueSubPanelEle.id + "'></datalist><input type='hidden' id='" + valueSubPanel.id + "ValList'></div>");

                                    reference.allInputs.push({ 'name': valueSubPanelEle.label.value, 'selector': valueSubPanelEle.id + 'List', "type": valueSubPanelEle.type, "required": valueSubPanelEle.required });

                                    valueSubPanelEle.options.forEach(function (valueOption, indexOption) {
                                        $("#" + valueSubPanelEle.id).append("<option value='" + valueOption.value + "'>" + valueOption.label + "</option>");
                                    });

                                    //Validate ReadOnly Attribute
                                    if (valueSubPanelEle.readOnly == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > input[name='" + valueSubPanelEle.name + "']").prop('readOnly', function () {
                                            return true;
                                        });
                                    }

                                    //Validate Disabled Attribute
                                    if (valueSubPanelEle.disabled == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > input[name='" + valueSubPanelEle.name + "']").prop('disabled', function () {
                                            return true;
                                        });
                                    }

                                    //Validate Required Attribute
                                    if (valueSubPanelEle.required == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > .control-label").text("* " + valueSubPanelEle.label.value);
                                        $("#" + valueSubPanelEle.idDiv + " > input[name='" + valueSubPanelEle.name + "']").prop('required', function () {
                                            return true;
                                        });
                                    }

                                    //Validate AutoFocus Attribute
                                    if (valueSubPanelEle.autofocus == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > input[name='" + valueSubPanelEle.name + "']").prop('autofocus', function () {
                                            return true;
                                        });
                                    }

                                    //Get the answer and show it in the console
                                    $("input[id='" + valueSubPanelEle.id + "List']").on('focusout', function (e) {
                                        var opt = $('option[value="' + $(this).val() + '"]');
                                        if (opt.length) {
                                            console.log(opt.attr('value'));
                                            $("#" + valueSubPanelEle.id + "ValList").val(opt.attr('value'));
                                        } else {
                                            $("input[id='" + valueSubPanelEle.id + "List']").val("");
                                            console.log("Invalid Option");
                                            $("#invalidOpt").modal('show');
                                            $("#")
                                        }
                                    });

                                    break;

                                case "table":

                                    $("#" + valueSubPanel.id + " > .panel-body ").append("<div id='" + valueSubPanelEle.idDiv + "' class='col-sm-12 col-md-12 co-lg-12 table-responsive'><hr><table class='" + valueSubPanelEle.class + "' id='" + valueSubPanelEle.id + "'><thead>" + "<tr></tr></thead><tbody></tbody></table></div>");
                                    $("#" + valueSubPanel.id + " > .panel-body").append("<input type='hidden' id='" + valueSubPanelEle.id + "Value'>");
                                    $("#" + valueSubPanel.id + " > .panel-body").append("<input type='hidden' id='" + valueSubPanelEle.id + "Index' value='0'> ");

                                    reference.allInputs.push({ 'name': valueSubPanelEle.name, 'selector': valueSubPanelEle.id, "type": valueSubPanelEle.type, "required": valueSubPanelEle.required });

                                    $("#" + valueSubPanelEle.id + "> thead > tr").append("<th> # </th>");

                                    valueSubPanelEle.elements.forEach(function (valueEle, indexEle) {

                                        switch (valueEle.type) {

                                            case "text":

                                                $("#" + valueSubPanel.id + " > .panel-body >").append("<div  id='" + valueEle.idDiv + "' class='" + valueEle.divClass + "'><input id= '" + valueEle.id + "'class='" + valueEle.class + "' name='" + valueEle.name + "' type='text' placeholder='" + valueEle.label.value + "'></div>");

                                                //Validate ReadOnly Attribute
                                                if (valueEle.readOnly == true) {
                                                    $("#" + valueEle.idDiv + " > input[type='text']").prop('readOnly', function () {
                                                        return true;
                                                    });
                                                }

                                                //Validate Disabled Attribute
                                                if (valueEle.disabled == true) {
                                                    $("#" + valueEle.idDiv + " > input[type='text']").prop('disabled', function () {
                                                        return true;
                                                    });
                                                }

                                                //Validate Required Attribute
                                                if (valueEle.required == true) {
                                                    $("#" + valueEle.idDiv + " > .control-label").text("* " + valueEle.label.value);
                                                    $("#" + valueEle.idDiv + " > input[type='text']").prop('required', function () {
                                                        return true;
                                                    });
                                                }

                                                //Validate AutoFocus Attribute
                                                if (valueEle.autofocus == true) {
                                                    $("#" + valueEle.idDiv + " > input[type='text']").prop('autofocus', function () {
                                                        return true;
                                                    });
                                                }

                                                //Validate MaxLength Attribute
                                                if (valueEle.maxLenght > 0) {
                                                    $("#" + valueEle.idDiv + " > input[type='text']").prop('maxLength', function () {
                                                        return valueSubPanelEle.maxLenght;
                                                    });
                                                }

                                                break;

                                            case "number":

                                                $("#" + valueSubPanel.id + " > .panel-body >").append("<div  id='" + valueEle.idDiv + "' class='" + valueEle.divClass + "'><input id='" + valueEle.id + "' class='" + valueEle.class + "' name='" + valueEle.name + "' type='number' placeholder='" + valueEle.label.value + "'></div>");

                                                //Validate ReadOnly Attribute
                                                if (valueEle.readOnly == true) {
                                                    $("#" + valueEle.idDiv + " > input[type='number']").prop('readOnly', function () {
                                                        return true;
                                                    });
                                                }

                                                //Validate Disabled Attribute
                                                if (valueEle.disabled == true) {
                                                    $("#" + valueEle.idDiv + " > input[type='number']").prop('disabled', function () {
                                                        return true;
                                                    });
                                                }

                                                //Validate Required Attribute
                                                if (valueEle.required == true) {
                                                    $("#" + valueEle.idDiv + " > .control-label").text("* " + valueEle.label.value);
                                                    $("#" + valueEle.idDiv + " > input[type='number']").prop('required', function () {
                                                        return true;
                                                    });
                                                }

                                                //Validate AutoFocus Attribute
                                                if (valueEle.autofocus == true) {
                                                    $("#" + valueEle.idDiv + " > input[type='number']").prop('autofocus', function () {
                                                        return true;
                                                    });
                                                }

                                                //Validate MaxLength Attribute
                                                if (valueEle.maxLenght > 0) {
                                                    $("#" + valueEle.idDiv + " > input[type='number']").prop('maxLength', function () {
                                                        return valueSubPanelEle.maxLenght;
                                                    });
                                                }

                                                break;

                                            case "list":

                                                //WORK ON THIS> INCOMPLETE SERVICE CALLED
                                                $("#" + valueSubPanel.id + " > .panel-body >").append("<div  id='" + valueEle.idDiv + "' class='" + valueEle.divClass + "'><input id='" + valueEle.id + "' list='" + valueEle.id + "Opt'class='" + valueEle.class + "' name='" + valueEle.name + "' placeholder='" + valueEle.label.value + "'> <datalist id='" + valueEle.id + "Opt'></datalist><input type='hidden' id='" + valueEle.id + "ValList'></div>");

                                                valueEle.options.forEach(function (valueOption, indexOption) {
                                                    $("#" + valueEle.id + "Opt").append("<option value='" + valueOption.value + "'>" + valueOption.label + "</option>");
                                                });

                                                //Get the answer and show it in the console
                                                $("input[id='" + valueEle.id + "']").on('focusout', function (e) {
                                                    var opt = $('option[value="' + $(this).val() + '"]');
                                                    if (opt.length) {
                                                        console.log(opt.attr('value'));
                                                        $("#" + valueEle.id + "ValList").val(opt.attr('value'));
                                                    } else {
                                                        $("input[id='" + valueEle.id + "']").val("");
                                                        $("#" + valueEle.id + "ValList").val(opt.attr(""));
                                                        console.log("Invalid Option");
                                                        $("#invalidOpt").modal('show');
                                                        $("#")
                                                    }
                                                });

                                                break;

                                            case "button":

                                                $("#" + valueSubPanel.id + " > .panel-body >").append("<div  id='" + valueEle.idDiv + "' class='" + valueEle.divClass + "'><button id='" + valueEle.id + "' class='" + valueEle.class + "' name='" + valueEle.name + "'>" + valueEle.label.value + "</button></div>");
                                                $("button[id='" + valueEle.id + "']").click(function () {

                                                    var values = [];
                                                    var qtyEle = 0;

                                                    values.push(($("#" + valueSubPanelEle.id + "Index").val() == "") ? 0 : parseInt($("#" + valueSubPanelEle.id + "Index").val()));
                                                    valueSubPanelEle.elements.forEach(function (valueEle2, indexEle2) {

                                                        switch (valueEle2.type) {

                                                            case "list":
                                                                qtyEle += 1;
                                                                if ($("input[id='" + valueEle2.id + "ValList']").val() != "") {
                                                                    values.push($("input[id='" + valueEle2.id + "ValList']").val());
                                                                }
                                                                break;

                                                            case "number":
                                                                qtyEle += 1;
                                                                if ($("input[id='" + valueEle2.id + "']").val() != "") {
                                                                    values.push($("input[id='" + valueEle2.id + "']").val());
                                                                }
                                                                break;

                                                            case "text":
                                                                qtyEle += 1;
                                                                if ($("input[id='" + valueEle2.id + "']").val() != "") {
                                                                    values.push($("input[id='" + valueEle2.id + "']").val());
                                                                }
                                                                break;
                                                        }
                                                    });
                                                    console.log("Value sent" + values);
                                                    if (values.length == qtyEle + 1) {
                                                        $("#" + valueSubPanelEle.id + "Index").val(($("#" + valueSubPanelEle.id + "Index").val() == "") ? 1 : parseInt($("#" + valueSubPanelEle.id + "Index").val()) + 1);
                                                        var index = parseInt($("#" + valueSubPanelEle.id + "Index").val());
                                                        reference.addToTable(valueSubPanelEle.id, values, index);
                                                    }
                                                    else {
                                                        $("#invalidTable").modal('show');
                                                    }
                                                });
                                                break;
                                        }

                                        if (valueEle.type != "button") {
                                            $("#" + valueSubPanelEle.id + "> thead > tr").append("<th> " + valueEle.label.value + "</th>");
                                        }
                                        else {
                                            $("#" + valueSubPanelEle.id + "> thead > tr").append("<th> </th>");
                                        }

                                    });


                                    break;

                                case "image2Labels":

                                    $("#" + valueSubPanel.id + "> .panel-body").append("<div id='" + valueSubPanelEle.idDiv + "' class='" + valueSubPanelEle.divClass + "'>" +
                                        "<div id='" + valueSubPanelEle.idDiv + "'class='thumbnail' align='center'>" +
                                        "<h3>" + valueSubPanelEle.labels.firstLabel + "<a class='anchorjs-link' href='#thumbnail-label'><span class='anchorjs-icon'></span></a></h3>" +
                                        "<img width='450' height='450' style='width: 450px;height: 450px' src='" + defaultImg + "' class='" + valueSubPanelEle.class + "' id='" + valueSubPanelEle.id + "'>" +
                                        "<div class='caption'> <h3>" + valueSubPanelEle.labels.secondLabel + "<a class='anchorjs-link' href='#thumbnail-label'><span class='anchorjs-icon'></span></a></h3> " +
                                        " <p><input type='file' id='" + valueSubPanelEle.id + "Event' accept='image/*' capture='camera'></p></div> </div>" +
                                        "</div>");



                                    reference.allInputs.push({ 'name': valueSubPanelEle.label.value, 'selector': valueSubPanelEle.id, "type": valueSubPanelEle.type, "required": valueSubPanelEle.required });

                                    $("#" + valueSubPanelEle.id + "Event").on('change', function (event) {

                                        message.launchProcessImageModal();
                                        var myCanvas = $('#canvasRezise')[0];
                                        var ctx = myCanvas.getContext('2d');
                                        var img = new Image();

                                        img.onload = function () {

                                            myCanvas.width = 450;
                                            myCanvas.height = 600;
                                            ctx.drawImage(img, 0, 0, 450, 600);

                                            ctx.font = "bold 8pt sans-serif";
                                            ctx.shadowColor = 'black';
                                            ctx.fillStyle = "white";
                                            ctx.shadowBlur = 7;

                                            ctx.fillText('SDM Ticket : Offline Version ', 10, (myCanvas.height - 150));
                                            ctx.fillText('Sitio: Offline Version ', 10, (myCanvas.height - 130));
                                            ctx.fillText('Hora Actual: ' + new Date().toString().split("GMT")[0], 10, (myCanvas.height - 110));
                                            ctx.font = "bold 8pt sans-serif";
                                            ctx.shadowColor = 'black';
                                            ctx.fillStyle = "white";
                                            ctx.shadowBlur = 7;

                                            navigator.geolocation.getCurrentPosition(function (position) {
                                                ctx.fillText('Latitud : ' + position.coords.latitude, 10, (myCanvas.height - 90));
                                                ctx.fillText('Longitud : ' + position.coords.longitude, 10, (myCanvas.height - 70));
                                                ctx.fillText('Precision : Aprox. ' + position.coords.accuracy + ' Metros', 10, (myCanvas.height - 50));

                                                ctx.fillText('Direccion: ' + 'Offline Version', (myCanvas.width / 2) - 80, (myCanvas.height - 10));
                                                ctx.font = "italic 8pt sans-serif";
                                                ctx.shadowColor = 'black';
                                                ctx.fillStyle = "white";
                                                ctx.shadowBlur = 7;
                                                ctx.fillText('Este Imagen fue cargada en Smart Docs', 10, (myCanvas.height - 30));
                                                ctx.fillText('Huawei @OWS', 80, (myCanvas.height - 10));
                                                $("#" + valueSubPanelEle.id).attr("src", myCanvas.toDataURL());
                                                message.removeProcessImageModal();
                                            });


                                            function get(url) {
                                                return new Promise(function (resolve, reject) {

                                                    var xhttp = new XMLHttpRequest();
                                                    xhttp.open("POST", url, true);
                                                    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                                                    xhttp.onreadystatechange = function () {//Call a function when the state changes.
                                                        if (xhttp.readyState == 4 && xhttp.status == 200) {
                                                            resolve(JSON.parse(xhttp.response));
                                                        }
                                                    }
                                                    xhttp.onerror = function () {
                                                        reject(xhttp.statusText);
                                                    };
                                                    xhttp.send();
                                                })
                                            }

                                            console.log("The Image changes");


                                        };

                                        img.src = URL.createObjectURL(event.target.files[0]);
                                    });

                                    break;

                                case "image1Label":


                                    $("#" + valueSubPanel.id + "> .panel-body").append("<div id='" + valueSubPanelEle.idDiv + "' class='" + valueSubPanelEle.divClass + "'>" +
                                        "<div id='" + valueSubPanelEle.idDiv + "' class='thumbnail' align='center'>" +
                                        "<img width='450' height='450' style='width: 450px;height: 450px' src='" + defaultImg + "' class='" + valueSubPanelEle.class + "' id='" + valueSubPanelEle.id + "'>" +
                                        "<div class='caption'> <h3>" + valueSubPanelEle.labels.firstLabel + "<a class='anchorjs-link' href='#thumbnail-label'><span class='anchorjs-icon'></span></a></h3> " +
                                        " <p><input type='file' id='" + valueSubPanelEle.id + "Event' accept='image/*'     capture='camera'></p></div> </div>" +
                                        "</div>");

                                    reference.allInputs.push({ 'name': valueSubPanelEle.label.value, 'selector': valueSubPanelEle.id, "type": valueSubPanelEle.type, "required": valueSubPanelEle.required });

                                    $("#" + valueSubPanelEle.id + "Event").on('change', function (event) {

                                        message.launchProcessImageModal();
                                        var myCanvas = $('#canvasRezise')[0];
                                        var ctx = myCanvas.getContext('2d');
                                        var img = new Image();

                                        img.onload = function () {

                                            myCanvas.width = 600;
                                            myCanvas.height = 800;
                                            ctx.drawImage(img, 0, 0, 600, 800);

                                            ctx.font = "bold 8pt sans-serif";
                                            ctx.shadowColor = 'black';
                                            ctx.fillStyle = "white";
                                            ctx.shadowBlur = 7;

                                            ctx.fillText('SDM Ticket : ' + 'Offline Version', 10, (myCanvas.height - 150));
                                            ctx.fillText('Sitio: ' + 'Offline Version', 10, (myCanvas.height - 130));
                                            ctx.fillText('Hora Actual: ' + new Date().toString().split("GMT")[0], 10, (myCanvas.height - 110));
                                            ctx.font = "bold 8pt sans-serif";
                                            ctx.shadowColor = 'black';
                                            ctx.fillStyle = "white";
                                            ctx.shadowBlur = 7;

                                            navigator.geolocation.getCurrentPosition(function (position) {
                                                ctx.fillText('Latitud : ' + position.coords.latitude, 10, (myCanvas.height - 90));
                                                ctx.fillText('Longitud : ' + position.coords.longitude, 10, (myCanvas.height - 70));
                                                ctx.fillText('Precision : Aprox. ' + position.coords.accuracy + ' Metros', 10, (myCanvas.height - 50));
                                                ctx.fillText('Direccion: ' + 'Offline Version', (myCanvas.width / 2) - 80, (myCanvas.height - 10));
                                                ctx.font = "italic 8pt sans-serif";
                                                ctx.shadowColor = 'black';
                                                ctx.fillStyle = "white";
                                                ctx.shadowBlur = 7;
                                                ctx.fillText('Este Imagen fue cargada en Smart Docs', 10, (myCanvas.height - 30));
                                                ctx.fillText('Huawei @OWS', 80, (myCanvas.height - 10));
                                                $("#" + valueSubPanelEle.id).attr("src", myCanvas.toDataURL());
                                                message.removeProcessImageModal();
                                            });


                                            function get(url) {
                                                return new Promise(function (resolve, reject) {

                                                    var xhttp = new XMLHttpRequest();
                                                    xhttp.open("POST", url, true);
                                                    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                                                    xhttp.onreadystatechange = function () {//Call a function when the state changes.
                                                        if (xhttp.readyState == 4 && xhttp.status == 200) {
                                                            resolve(JSON.parse(xhttp.response));
                                                        }
                                                    }
                                                    xhttp.onerror = function () {
                                                        reject(xhttp.statusText);
                                                    };
                                                    xhttp.send();
                                                })
                                            }

                                            console.log("The Image changes");


                                        };

                                        img.src = URL.createObjectURL(event.target.files[0]);
                                    });
                                    //reference.imgTo64(this, '' + valueSubPanelEle.id)
                                    //reference.imgTo64(this);


                                    break;
                            }

                        })

                    });
                });
            });
        });
    },
    allInputsFilled: [],
    "validateField": function (name, type, selector) {
        let reference = this;
        var defaultImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAIAAABEtEjdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFRkVFMEI5M0E2QkMxMUU2QjUxMUY2QzdEQUU2NTQ2OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFRkVFMEI5NEE2QkMxMUU2QjUxMUY2QzdEQUU2NTQ2OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVGRUUwQjkxQTZCQzExRTZCNTExRjZDN0RBRTY1NDY4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVGRUUwQjkyQTZCQzExRTZCNTExRjZDN0RBRTY1NDY4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Z8XpDgAAmltJREFUeNrsvQtYXNl1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";
        switch (type) {

            case "image1Label": case "image2Labels":
                if ($("#" + selector).attr('src') == defaultImg) {
                    reference.allInputsFilled.push({ 'name': name, 'sel': selector, 'type': type, 'val': defaultImg });
                }
                else {
                    reference.allInputsFilled.push({ 'name': name, 'sel': selector, 'type': type, 'val': $("#" + selector).attr('src') });
                }
                return true;
                break;


            case "textArea": case "text":

                if ($("#" + selector).val().length < 1) {
                    //Contain Blank Spaces
                    reference.allInputsFilled.push({ 'name': name, 'sel': selector, 'type': type, 'val': "" });
                    return false;
                }
                else {
                    //No Contain Blanck Spaces
                    reference.allInputsFilled.push({ 'name': name, 'sel': selector, 'type': type, 'val': $("#" + selector).val() });
                    return true;
                }

                break;

            case "table":

                if ($("#" + selector + "Value").val()) {
                    reference.allInputsFilled.push({ 'name': name, 'sel': selector, 'type': type, 'val': $("#" + selector + "Value").val(), 'indix': $("#" + selector + "Index").val() });
                }
                else {
                    reference.allInputsFilled.push({ 'name': name, 'sel': selector, 'type': type, 'val': "", 'indix': "" });
                }
                return true;

                break;
            case "radio":
                if ($("input[name='" + selector + "']:checked") != null) {
                    reference.allInputsFilled.push({ 'name': name, 'sel': selector, 'type': type, 'val': $("input[name='" + selector + "']:checked").val() });
                    return true;
                }
                else {
                    reference.allInputsFilled.push({ 'name': name, 'sel': selector, 'type': type, 'val': '' });
                    return false;
                }
                break;
            default:
                if ($("#" + selector).val()) {
                    reference.allInputsFilled.push({ 'name': name, 'sel': selector, 'type': type, 'val': $("#" + selector).val() });
                    return true;
                }
                else {
                    reference.allInputsFilled.push({ 'name': name, 'sel': selector, 'type': type, 'val': "" });
                    return false;
                }
                break;

        }
    },
    "saveAnswer": function () {
        let reference = this;
        var allReqComplete = false;
        var arrayAllReqComplete = [];
        reference.allInputsFilled = [];
        var validate;
        var fieldsEmpty;
        let response = {};

        reference.allInputs.forEach((value, index) => {

            validate = reference.validateField(value.name, value.type, value.selector);

            //Validate == false --> It's Empty
            //Validate == true --> Completed

            //If it's required
            if (value.required == true) {

                //If it's empty
                if (validate == false) {
                    allReqComplete = false;
                    arrayAllReqComplete.push({ "name": value.name, "sel": value.selector, "fill": false });
                }
                //If it's not empty
                else {

                    allReqComplete = true;
                    arrayAllReqComplete.push({ "name": value.name, "sel": value.selector, "fill": true });
                }

            }
            //If it's not required
            else {
                allReqComplete = true;
                arrayAllReqComplete.push({ "name": value.name, "sel": value.selector, "fill": true });
            }

        });
        //console.log("Completed", arrayAllReqComplete);

        arrayAllReqComplete.forEach((value, index) => {
            if (value.fill == false) {
                if (fieldsEmpty == undefined) {
                    fieldsEmpty = value.name;
                }
                else {
                    fieldsEmpty += "  -  " + value.name;
                }
                //console.log("Falta completar:" + value.name);
                allReqComplete = false;
            }
        });
        response = { "userAnswer": JSON.stringify(reference.allInputsFilled), "completed": allReqComplete }
        if (allReqComplete == false) {
            $("#emptyFieldsText").text(fieldsEmpty);
            response["fieldsEmpty"] = fieldsEmpty
        }

        return response;
    },
    "matchAnswers": function (allInputsAnswer) {
        let reference = this;
        allInputsAnswer.forEach((value, index) => {

            switch (value.type) {

                case "image2Labels": case "image1Label":
                    $("#" + value.sel).attr('src', value.val);
                    break;

                case "table":

                    $("#" + value.sel + "Index").val(value.indix);
                    $("#" + value.sel + "Value").val(value.val);
                    if (parseInt(value.indix) >= 1) {
                        reference.showTable(value.sel);
                    }
                    break;

                case "radio":
                    $("input:radio[name='"+value.sel+"'][value='"+value.val+"']").prop("checked",true);
                    break;
                default:
                    $("#" + value.sel).val("" + value.val);
                    break;
            }
        })
    },
    "watermark": function (selector) {


    }
}
