const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

// use is for adding pl(ugis on the server
app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })


app.get('*', (req, res) => {
    res.send('Chanchito feliz!')
})
module.exports = app
