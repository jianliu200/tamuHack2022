console.log("imported")
const fs = require('fs');
//const { type } = require('os');

class tourRequest{
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

module.exports = {

    writeToJSON: function(filename, request) {
        fs.writeFile(filename, JSON.stringify(request), err => {
     
            // Checking for errors
            if (err) throw err; 
        
            console.log("Done writing"); // Success

            
        });
    },

    createRequest: function(_date, _time, _type, _amount, _name, _email, _phone) {
        
        
        let request = new tourRequest(_date, _time, _type, _amount, _name, _email, _phone)
        return request
    }

}

let newrequest = new tourRequest("10/12/2022", "10:22:05", "MSC", 20, "Sam", "san@gmail.com", "999-999-9999")
let newr = new tourRequest("10/20/2022", "10:22", "MSC", 5, "Tom", "Tom@gamil.com", "99-991-9999")

// fs.writeFile("tourSchedule.json", JSON.stringify(newr), err => {
     
//     // Checking for errors
//     if (err) throw err; 

//     console.log("Done writing"); // Success
// });


