const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

let schema = new Schema({
    fullname: { type: String, required: true },
    role: { type: String, required: true },
    company: { type: String, required: true },
    cellphone: { type: String, required: true },
    password: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    region: {type: Array, required: true},
    project: {type: Array, required: true}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("User", schema);