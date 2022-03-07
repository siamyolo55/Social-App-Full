const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id : String,
    name : String,
    email : String,
    password : String,
    dp: String, // link to photo
    about: String,
    birthday: String,
    friends: [{ id : String}],
    posts: [
        {
            uniq: String,
            time: String,
            by: String,
            text: String,
            likes: Number,
            comments: [
                {
                    uniq: String,
                    by: String,
                    time: String,
                    text: String
                }
            ]
        }
    ]
})

module.exports = mongoose.model("Users",userSchema)