const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require("mongoose-unique-validator");

let schema = new Schema({
    siteId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    department: { type: String, required: false },
    fmOffice: { type: String, required: true },
    project: { type: String, required: true },
    portafolio: { type: String, required: false },
    assetTorre: { type: String, required: false },
    anchorTenant: { type: String, required: false },
    regional: { type: String, required: false },
    creationDate: { type: String, required: true },
    lastModification: { type: String, required: true }
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("Sites", schema);