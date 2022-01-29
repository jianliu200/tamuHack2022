//backend make request class upload to json file

const express = require('express')
const app = express()
const port = 8080

// tell express to use the ejs files in '/views'
app.set('view engine', 'ejs');

// Where to store frontend assets
app.use(express.static('public'));

// landing page will be /views/index.js
app.get('/', (req, res) => {
  res.render('index')
})

// open server at port defined
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})