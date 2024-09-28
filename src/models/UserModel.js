const DB = require("../Config/db");
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {type:'string' , required:true},
    email: {type: 'string' , required: true},
    password: {type: 'string', required: true}
})

const UserModel = mongoose.model('Guyst' , UserSchema)

module.exports = UserModel