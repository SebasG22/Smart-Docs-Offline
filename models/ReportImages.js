const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require("mongoose-unique-validator");

let schema = new Schema({
    reportImgId: { type: String, required: true, unique: true },
    reportId: { type: String, required: true },
    images: { type: Array, required: false },
    image_1: { type: Array, required: false },
    author: { type: String, required: false },
    lastModification: { type: String, required: false }
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("ReportImages", schema);