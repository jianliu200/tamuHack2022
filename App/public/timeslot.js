

var fs = require('fs');
let array = ""

fs.readFile("tourSchedule.json", 'utf8', function (err, data) {
  if (err) {
    console.log('Error: ' + err);
    return;
  }

  data = JSON.parse(data);
  for(i = 0; i < data.length; ++i){
    array += data[i].type + ', ';
    array += data[i].month + ', ';
    array += data[i].day + ', ';
    array += data[i].time + ', ';
    array += data[i].userName + ', ';
    array += data[i].email + ', ';
    array += data[i].number + ', ';
    array += data[i].amount + '\n';
  }
  console.log(array);


});