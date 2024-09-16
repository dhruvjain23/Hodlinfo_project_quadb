const express = require('express')
const mongoose = require('mongoose')

const app = express()

const Route = require('./routes/Route.js')


app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))


app.set('view engine', 'ejs')

const dbURI = "Your Mongo URl"
const PORT = process.env.PORT || 3500

mongoose.connect(dbURI)
  .then((result) => {
    console.log('DB connected.......')
    console.log(`port no : ${PORT}`)
    app.listen(PORT)
  })
  .catch((err) => {
    console.log(err)
  })

app.use('',Route)

app.use((req, res) => {
    res.status(404).send("404 not found")
  })



  // FvH6QiX4f23hF9NH password mongodb
  // djain01d userid
