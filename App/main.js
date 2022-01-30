//backend make request class upload to json file
const fs = require('fs');
var favicon = require('serve-favicon');
const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser');
const { json } = require('body-parser');


const app = express()
const port = 8080;

var users = [];


fs.readFile("tourSchedule.json", (err, data) => {
  if (err) return;

  if (data.length > 0) {
    users = JSON.parse(data)
  } else {
    users = []
  }
    
    console.log(users)
    console.log("INIT")

  //console.log(JSON.parse(data))
})

// tell express to use the ejs files in '/views'
app.set('view engine', 'ejs');

// Where to store frontend assets
app.use(express.static('public'));

// setup favicon.ico
app.use(favicon('./public/favicon.ico'));

app.get("/new", (req, res) => {
  const type = req.query.type;
  const month = req.query.month;
  const day = req.query.day;
  const time = req.query.time;
  const userName = req.query.userName;
  const email = req.query.email;
  const number = req.query.number;
  const amount = req.query.amount;

  let new_User = {type, month, day, time, userName, email, number, amount}
  users.push(new_User)

  //console.log(users)

  fs.writeFile("tourSchedule.json", JSON.stringify(users), err => {
      if (err) return; 
      console.log("Done writing"); // Success
  });

  return res.redirect('/confirm.html');
})

//console.log(users)

// landing page will be /views/index.js
app.get('/', (req, res) => {
  res.render('index', {
    users: JSON.stringify(users)
    
    })
})

// landing page will be /views/index.js
app.get('/timeslot', (req, res) => {
   console.log(JSON.stringify(users))

    res.render('timeslot', {
      _users: JSON.stringify(users)
    })
  })

// open server at port defined
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})


