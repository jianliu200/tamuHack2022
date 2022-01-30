// This is for reading out the json file

const fs = require('fs')
fs.readFile('tourSchedule.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err)
        return
    }
    console.log('File data:', jsonString) 
    const total = JSON.parse(jsonString)
    console.log(total.date)
})


