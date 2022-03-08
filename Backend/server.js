// dependencies
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const addUserTodDb  = require('./db/addUserToDb')
const validateLogin = require('./db/validateLogin')
const getHomeData = require('./db/getHomeData')
const updateUserData = require('./db/updateUserData')
const submitPost = require('./db/submitPost')
const getName = require('./db/getName')
const getPosts = require('./db/getPosts')

// uuid generator , move to other files later on


// mongoose connection
mongoose.connect('mongodb://127.0.0.1:27017/Data',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})


// cors origin issue
app.use(cors({ origin: "*" }))

//body json parser
app.use(express.json({extended : true}))

// login request
app.post('/login', async (req,res) => {
    if(validateLogin(req.body.email, req.body.password)){
        let data = await getHomeData(req.body.email,req.body.password)
        res.status(201).json({
            data
        })
    }
})

// signup request
app.post('/signup', async (req,res) => {
    // send token on later versions
    // store to database
    await addUserTodDb(req.body)

    // send response
    res.status(201).json({ 
        name: req.body.name,
        email: req.body.email
    })
})

// update user data request
app.put('/updateUserData', async (req,res) => {
    await updateUserData(req.body)
    res.status(201)
    res.end()
})

app.post('/submitPost', async (req,res) => {
    await submitPost(req.body)
    res.status(201)
    res.end()
})

app.post('/getName', async (req,res) => {
    let name = await getName(req.body.by)
    res.status(201).json({
        name
    })
})

app.post('/getUserPosts', async (req,res) => {
    let posts = await getPosts(req.body.id)
    res.status(201).json({
        posts
    })
})


app.listen(4000)