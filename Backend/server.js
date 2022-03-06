// dependencies
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const addUserTodDb  = require('./db/addUserToDb')
const { validateLogin, user } = require('./db/validateLogin')

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
app.post('/login', (req,res) => {
    if(validateLogin(req.body.email, req.body.password)){
        res.status(201).json({

        })
    }
})

// signup request
app.post('/signup', (req,res) => {
    // send token on later versions
    // store to database
    addUserTodDb(req.body)

    // send response
    res.status(201).json({ 
        name: req.body.name,
        email: req.body.email
    })
})


app.listen(4000)