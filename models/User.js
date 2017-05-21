const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

let schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    company: { type: String, required: true },
    cellphone: { type: String, required: true },
    password: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true },
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("User", schema);