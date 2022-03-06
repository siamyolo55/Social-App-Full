// dependencies
const mongoose = require('mongoose')
const User = require('./User')


// mongoose connnection
mongoose.connect('mongodb://127.0.0.1:27017/Data',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let user

const validateLogin = async (email,password) => {
    try{
        user = await User.find({email,password})
        return (user.length > 0)
    }
    catch(e){
        console.log(e)
    }
}

module.exports = validateLogin
