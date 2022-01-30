let userName = "";
let email = "";
let number = "";
let amount = "";

let urlSearchParams = new URLSearchParams(window.location.search);

let type = urlSearchParams.get("type");
let month = urlSearchParams.get("month");
let day = urlSearchParams.get("day");
let time = urlSearchParams.get("time")

//setting user input
//_______________________________________________________________________________________
document.getElementById("button_userinfo").onclick = function() {
    location.href = "/new?userName=" + userName + "&email=" + email + "&number=" + number + "&amount=" + amount + "&type=" + type + "&month=" + month + "&day=" + day + "&time=" + time;
}

document.getElementById("button_back").onclick = function() {
    location.href = "times.html?type=" + type;
}

document.getElementById("floatingInputValue_1").oninput = function() {
    userName = document.getElementById("floatingInputValue_1").value;
}

document.getElementById("floatingInputValue_2").oninput = function() {
    email = document.getElementById("floatingInputValue_2").value;
}

document.getElementById("floatingInputValue_3").oninput = function() {
    number = document.getElementById("floatingInputValue_3").value;
}
document.getElementById("floatingInputValue_4").oninput = function() {
    amount = document.getElementById("floatingInputValue_4").value;
}
//_______________________________________________________________________________________