//setting type
//_______________________________________________________________________________________
let temp_type = " ";
    document.getElementById("myButton_campus").onclick = function() {
        location.href = "times.html";
        temp_type = "Campus";
        console.log(temp_type);
    }
    document.getElementById("myButton_msc").onclick = function() {
        location.href = "times.html";
        temp_type = "MSC"
    }
    document.getElementById("myButton_bonfire").onclick = function() {
        location.href = "times.html";
        temp_type = "Bonfire";
    }
//_______________________________________________________________________________________