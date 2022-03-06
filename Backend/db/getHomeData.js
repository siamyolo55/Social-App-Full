const mongoose = require('mongoose')
const User = require('./User')

mongoose.connect('mongodb://127.0.0.1:27017/Data',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const getHomeData = async (email,password) => {
    try{
        const user = await User.find({email,password})
        console.log(user)
    }
    catch(e){
        console.log(e)
    }
}

module.exports = getHomeData