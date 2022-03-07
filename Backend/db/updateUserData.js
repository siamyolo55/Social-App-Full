const mongoose = require('mongoose')
const User = require('./User')

mongoose.connect('mongodb://127.0.0.1:27017/Data',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const updateUserData = async (data) => {
    try{
        const user = await User.find({id:data.id})
        user[0].id = data.id
        user[0].name =  data.name
        user[0].email = data.email
        user[0].password = data.password
        user[0].about = data.about
        user[0].birthday = data.birthday
        user[0].posts = user[0].posts
        user[0].friends = user[0].friends
        user[0].dp = user[0].dp
        await user[0].save()
        return
    }
    catch(e){
        console.log(e)
    }
}

module.exports = updateUserData