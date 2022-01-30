//setting type
//_______________________________________________________________________________________
let temp_type = " ";
    document.getElementById("myButton_campus").onclick = function() {
        temp_type = "Campus";
        location.href = "times.html?type=" + temp_type;
        console.log(temp_type);
    }
    document.getElementById("myButton_msc").onclick = function() {
        temp_type = "MSC"
        location.href = "times.html?type=" + temp_type;
    }
    document.getElementById("myButton_bonfire").onclick = function() {
        temp_type = "Bonfire";
        location.href = "times.html?type=" + temp_type;
    }

    document.getElementById("myButton_ViewSchedule").onclick = function() {
        location.href = "signIn.html";
    }
//_______________________________________________________________________________________