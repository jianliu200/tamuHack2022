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

      let list = [];
    let array = [];

    const calendar = ["January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",]

    fs.readFile("tourSchedule.json", 'utf8', function (err, data) {
      if (err) {
        console.log('Error: ' + err);
        return;
      }

      data = JSON.parse(data);
      for(i = 0; i < data.length; ++i){
        array = []
        array.push(data[i].type);
        array.push(data[i].month);
        array.push(data[i].day);
        array.push(data[i].time);
        array.push(data[i].userName);
        array.push(data[i].email);
        array.push(data[i].number);
        array.push(data[i].amount);
        list.push(array);
      }
      //sorts months
      for(let i = 0; i <list.length; i++){
        for(let j = i; j < list.length - 1; j++){
          let value1 = calendar.indexOf(list[j][1]);
          let value2 = calendar.indexOf(list[j+1][1]);
          if(value2 < value1){
            temp = list[j];
            list[j] = list[j+1];
            list[j+1] = temp;
          }
          if(value2 == value1){
            let day1 = parseInt(list[j][2]);
            let day2 = parseInt(list[j+1][2]);
            if(day2 < day1){
              temp = list[j];
              list[j] = list[j+1];
              list[j+1] = temp;
            }
            if(day1 == day2){
              let sub1 = parseInt(list[j][3].substring(0,1));
              let sub2 = parseInt(list[j+1][3].substring(0,1));
              if(sub2 < sub1){
                temp = list[j];
                list[j] = list[j+1];
                list[j+1] = temp;
              }
            }
          }
        }
      }

      console.log(list);
      for(let i = 0; i < list.length; i++){
        let temp = {
          type: list[i][0],
          month: list[i][1],
          day: list[i][2],
          time: list[i][3],
          userName: list[i][4],
          email:list[i][5],
          number:list[i][6],
          amount:list[i][7]
        }
        if(i ==0){
          fs.writeFile("tourSchedule.json", JSON.stringify(users), err => {
            if (err) return; 
            console.log("Done writing"); // Success
          });
        }
        else{
        }
        
      }
    });
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


