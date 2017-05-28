const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require("mongoose-unique-validator");

let schema = new Schema({
    siteId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    project: { type: String, required: true },
    porfatolio: { type: String, required: true },
    assetTower: { type: String, required: true },
    anchorTenant: { type: String, required: true },
    region: { type: String, required: true },
    fmOffice: { type: String, required: true },
    city: { type: String, required: true }  ,
    creationDate: { type: String, required: true },
    lastModification: { type: String, required: true }
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("Sites", schema);