const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require("mongoose-unique-validator");

let schema = new Schema({
    idReport: { type: String, required: true },
    templateId: { type: String },
    visitId: { type: String },
    status: { type: String },
    lastModification: { type: String },
    author: { type: String },
    checkbox_answer: { type: String },
    completedDate: { type: String },
    creationDate: { type: String },
    date_answer: { type: Array },
    datetime_answer: { type: Array },
    list_answer: { type: Array },
    month_answer: { type: Array },
    multiselect_answer: { type: Array },
    number_answer: { type: Array },
    radio_answer: { type: Array },
    select_answer: { type: Array },
    table_answer: { type: Array },
    text_answer: { type: Array },
    textarea_answer: { type: Array },
    time_answer: { type: Array },
    week_answer: { type: Array }
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("Reports", schema);