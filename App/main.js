//backend make request class upload to json file
const fs = require('fs');
const { Template } = require('ejs');
//const { type } = require('os');
const { type } = require('os');
const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
let _request = require('./public/request.js');

const app = express()
const port = 8080;

let users = [];

fs.readFile("tourSchedule.json", (err, data) => {
  if (err)
    return;

  if(data.length > 0) {
    users.push(JSON.parse(data));
  }
  
  console.log(users)
})

// tell express to use the ejs files in '/views'
app.set('view engine', 'ejs');

// Where to store frontend assets
app.use(express.static('public'));

app.get("/new", (req, res) => {
  const type = req.query.type;
  const month = req.query.month;
  const day = req.query.day;
  const userName = req.query.userName;
  const email = req.query.email;
  const number = req.query.number;
  const amount = req.query.amount;

  console.log(users);
  users.push(
    {type, month, day, userName, email, number, amount}
  )

  fs.writeFile("tourSchedule.json", JSON.stringify(users), err => {
      
      // Checking for errors
      if (err) throw err; 

      console.log("Done writing"); // Success
  });

  return res.redirect('/confirm.html');
})

// landing page will be /views/index.js
app.get('/', (req, res) => {
  res.render('index', {
    users: users.sort()
    })
})

// open server at port defined
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})