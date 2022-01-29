class torequest{
    constructor(date, time, type, amount, name, email, phone){
        this.person = name
        this.date = date
        this.time = time
        this.type = type
        this.amount = amount
        this.email = email
        this.phone = phone
    }

}
let fullname = window.prompt("What is your name? ")
let date = window.prompt("What date do you want to go? ")
let type = window.prompt("What location do you want to go? ")
let amount = window.prompt("What is the amount people that are going")
let time = window.prompt("What time do you want to go? ")
let email = window.prompt("What is your email? ")
let phone = window.prompt("What is you phone number? ")

let newrequest = new torequest(fullname,date, type, amount, time, email, phone)

fs.writeFile('tourSchedule.json', newrequest, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});



