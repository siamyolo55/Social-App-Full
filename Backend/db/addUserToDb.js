// dependencies
const mongoose = require('mongoose')
const User = require('./User')

// connect to mongoose
mongoose.connect('mongodb://127.0.0.1:27017/Data',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// uuid generator
let uuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    })
}

const addUserTodDb = async (body) => {
    try{
        const user = await User.create({
            id: uuid(),
            name: body.name,
            email: body.email,
            password: body.password
        })
        await user.save()
    }
    catch(e){
        console.log(e)
    }
}

module.exports = addUserTodDb