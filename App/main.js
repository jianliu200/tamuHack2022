//backend make request class upload to json file
const fs = require('fs');
var favicon = require('serve-favicon');
const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser');
const { json } = require('body-parser');


const app = express()
const port = 8080;

let users = [];

fs.readFile("tourSchedule.json", (err, data) => {
  if (err)
    return;
 
  console.log(JSON.parse(data))
})

// tell express to use the ejs files in '/views'
app.set('view engine', 'ejs');

// Where to store frontend assets
app.use(express.static('public'));

// setup favicon.ico
app.use(favicon("favicon.ico"))

app.get("/new", (req, res) => {
  const type = req.query.type;
  const month = req.query.month;
  const day = req.query.day;
  const time = req.query.time;
  const userName = req.query.userName;
  const email = req.query.email;
  const number = req.query.number;
  const amount = req.query.amount;

  console.log(users);
  users.push(
    {type, month, day, time, userName, email, number, amount}
  )

  fs.writeFile("tourSchedule.json", JSON.stringify(users), err => {
      if (err) return; 
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