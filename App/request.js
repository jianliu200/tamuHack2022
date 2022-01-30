console.log("imported")

//const fs = require('fs');
//const { type } = require('os');

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


fs.writeFile("tourSchedule.json", JSON.stringify(newrequest), err => {
     
    // Checking for errors
    if (err) throw err; 

    console.log("Done writing"); // Success
});



