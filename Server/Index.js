const express = require('express')
const app = express()
const regRoute = require('./RegRoute.js')
const loginRoute = require('./LoginRoute.js')
const feedFormRoute = require('./FeedFormRoute')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())
app.use('/register',regRoute)
app.use('/login',loginRoute)
// app.use('/feedback-form',feedFormRoute)
app.listen(8084)


mongoose.connect('mongodb://localhost:27017/mydb2',(err)=>{
    if (err) {
        throw err
    }
})