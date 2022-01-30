//backend make request class upload to json file

const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
let _request = require('./public/request.js');

const app = express()
const port = 8080

// tell express to use the ejs files in '/views'
app.set('view engine', 'ejs');

// Where to store frontend assets
app.use(express.static('public'));

// Allow for req.body to be utilized in '/upvote-joke'
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.post('/submitRequest', (req, res) => {
    let month = req.body.month
    let day = req.body.day
    let time = req.body.time

    let new_request = _request.createRequest(month + day, time, "MSC", 20, "Sam", "san@gmail.com", "999-999-9999")

    _request.writeToJSON("filename.json", new_request)
    console.log(new_request)

})





// landing page will be /views/index.js
app.get('/', (req, res) => {
  res.render('index')
})

// open server at port defined
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})