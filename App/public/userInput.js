let name = "";
let email = "";
let number = "";
let amount = "";


//setting user input
//_______________________________________________________________________________________
document.getElementById("button_userinfo").onclick = function() {
    location.href = "confirm.html";
}

document.getElementById("floatingInputValue_1").oninput = function() {
    this.name = document.getElementById("floatingInputValue_1").value;
}

document.getElementById("floatingInputValue_2").oninput = function() {
    this.email = document.getElementById("floatingInputValue_2").value;
}

document.getElementById("floatingInputValue_3").oninput = function() {
    this.number = document.getElementById("floatingInputValue_3").value;

}
document.getElementById("floatingInputValue_4").oninput = function() {
    this.amount = document.getElementById("floatingInputValue_4").value;
    console.log(this.amount);
}
//_______________________________________________________________________________________