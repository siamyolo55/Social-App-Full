const mongoose = require('mongoose')
const User = require('./User')

let uuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    })
}

mongoose.connect('mongodb://127.0.0.1:27017/Data',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const submitPost = async (data) => {
    try{
        let time = new Date().toLocaleString()
        let by = data.id
        let text = data.post
        let likes = 0
        let newObj = {
            uniq: uuid(),
            time, by, text,
            likes, comments : []
        }
        const user = await User.find({id:data.id})
        user[0].id = data.id
        user[0].name =  data.name
        user[0].email = user[0].email
        user[0].password = user[0].password
        user[0].about = user[0].about
        user[0].birthday = user[0].birthday
        user[0].friends = user[0].friends
        user[0].posts.push(newObj)
        user[0].dp = user[0].dp
        await user[0].save()
        return
    }
    catch(e){
        console.log(e)
    }
}

module.exports = submitPost