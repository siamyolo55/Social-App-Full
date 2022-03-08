const mongoose = require('mongoose')
const User = require('./User')


mongoose.connect('mongodb://127.0.0.1:27017/Data',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let getName = async (by) => {
    try{
        const user = await User.find({id:by})
        return user[0].name
    }
    catch(e){
        console.log(e)
    }
}

module.exports = getName