let my_month = "";
let my_day = "";
let my_time = "";
let urlSearchParams = new URLSearchParams(window.location.search);

let type = urlSearchParams.get("type");


document.getElementById("monthDropdown").onclick = function() {
    my_month = document.getElementById("dropdownMenuButtonMonth").textContent;
}

document.getElementById("dayDropdown").onclick = function() {
    my_day = document.getElementById("dropdownMenuButtonDay").textContent;
}

document.getElementById("timeDropdown").onclick = function() {
    my_time = document.getElementById("dropdownMenuButtonTime").textContent;
}
document.getElementById("button_userinfo_next").onclick = function() {
    location.href = "/userInput.html?type=" + type + "&month=" + my_month + "&day=" + my_day + "&time=" + my_time;
}


