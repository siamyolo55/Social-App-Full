const mongoose = require('mongoose')
const User = require('./User')


mongoose.connect('mongodb://127.0.0.1:27017/Data',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let getPosts = async (id) => {
    try{
        console.log(id)
        const user = await User.find({id:id})
        console.log(user[0].posts)
        return user[0].posts
    }
    catch(e){
        console.log(e,1)
    }
}

module.exports = getPosts