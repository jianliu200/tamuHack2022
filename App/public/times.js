let my_month = "";
let my_day = "";

document.getElementById("monthDropdown").onclick = function() {
    this.month = document.getElementById("dropdownMenuButtonMonth").textContent;
}

document.getElementById("dayDropdown").onclick = function() {
    this.day = document.getElementById("dropdownMenuButtonDay").textContent;
    console.log(this.day);
}

