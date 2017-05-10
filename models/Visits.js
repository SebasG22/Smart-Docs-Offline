const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require("mongoose-unique-validator");

let schema = new Schema({
    siteId: { type: String, required: true, unique: true},
    visitId: { type: String, required: true },
    author: { type: String, required: true },
    creationDate: { type: String, required: true }
    });

module.exports = mongoose.model("Visits", schema);