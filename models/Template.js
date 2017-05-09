const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require("mongoose-unique-validator");


let schema = new Schema({
    templateId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    icon: { type: String, required: true },
    project: { type: String, required: true },
    content: { type: Object, required: true },
    taskType: {type: String, required: false},
    creationDate: { type: String, required: true },
    lastModification: { type: String, required: false },
    user: { type: Schema.Types.ObjectId, ref: "User" }
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("Templates", schema);