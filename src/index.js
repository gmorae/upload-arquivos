const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()
app.use(require('./routes'))

mongoose.connect('mongodb+srv://username:senha@cluster0-w237j.mongodb.net/update?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))


app.listen(3333)