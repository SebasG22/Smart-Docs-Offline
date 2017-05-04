const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

let schema = new Schema({
    firstName : {type:String,required:true},
    lastName: {type:String,required:true},
    password: {type:String,required:true},
    email: {type:String,required:true,unique:true},
    templates: [{type:Schema.Types.ObjectId,ref:"Templates"}]
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("Templates",schema);