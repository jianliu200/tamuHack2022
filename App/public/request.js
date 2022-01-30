const { Template } = require('ejs');
const fs = require('fs');
const { type } = require('os');

class torequest{
    constructor(date, time, type, amount, name, email, phone){
        this.person = name;
        this.date = date;
        this.time = time;
        this.type = type;
        this.amount = amount;
        this.email = email;
        this.phone = phone;
    }

}

let newrequest = new torequest("10/12/2022", "10:22:05", "MSC", 20, "Sam", "san@gmail.com", "999-999-9999")
let newr = new torequest("10/20/2022", "10:22", "MSC", 5, "Tom", "Tom@gamil.com", "999-991-9999")
writeFile("tourSchedule.json", JSON.stringify(newrequest) + '\n', err => {
     
    // Checking for errors
    if (err) throw err; 

    console.log("Done writing"); // Success
});

appendFile("tourSchedule.json", JSON.stringify(newr) + '\n', err => {
     
    // Checking for errors
    if (err) throw err; 

    console.log("Done writing"); // Success
});


