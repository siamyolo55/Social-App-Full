const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id : String,
    name : String,
    email : String,
    password : String,
    dp: String, // link to photo
    about: String,
    birthday: String,
    friends: Array
})

module.exports = mongoose.model("Users",userSchema)