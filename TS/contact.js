var userNamess = document.getElementById("name");
var emaill = document.getElementById("email");
var messagee = document.getElementById("message");
var formm = document.getElementById("#contact-me");
var emailRegexx = new RegExp(/^[a-zA-Z0-9.!#$%&'"+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
var todayy = new Date();
var boolCheckk = false;
var Messagee = /** @class */ (function () {
    function Messagee(username, email, message, year, month, day) {
        this.username = username;
        this.email = email;
        this.message = message;
        this.year = year;
        this.month = month;
        this.day = day;
    }
    return Messagee;
}());
var messageArrayy = [];
formm.addEventListener('submit', function (event) {
    event.preventDefault();
    sendMessagee();
});
function sendMessagee() {
    if (checkContactss()) {
        var messageeObj = new Messagee(userNamess.value, emaill.value, messagee.value, todayy.getFullYear(), todayy.getMonth(), todayy.getDate());
        if (localStorage.getItem("messages")) {
            messageArrayy = JSON.parse(localStorage.getItem("messages")) || [];
        }
        messageArrayy.push(messageeObj);
        localStorage.setItem("messages", JSON.stringify(messageArrayy));
        formm.reset();
    }
}
function checkContactss() {
    var boo = false;
    if (userNamess.value.trim() == "") {
        boo = onErrorts(userNamess, "Please enter your names");
    }
    else {
        boo = onSuccessts(userNamess);
    }
    if (emaill.value.trim() == "") {
        boo = onErrorts(emaill, "Email cannot be empty");
    }
    else if (emailRegexx.test(emaill.value)) {
        boo = onErrorts(emaill, "Please enter your email address correctly");
    }
    else {
        boo = onSuccessts(emaill);
    }
    if (messagee.value.trim() == "") {
        boo = onErrorts(messagee, "Please enter your message");
    }
    else {
        boo = onSuccessts(messagee);
    }
    return boo;
}
function onSuccessts(input) {
    var parent = input.parentElement;
    var err = parent.querySelector("small");
    err.style.visibility = "hidden";
    err.innerText = "";
    parent.classList.add("success");
    parent.classList.remove("error");
    return true;
}
function onErrorts(input, message) {
    var parent = input.parentElement;
    var err = parent.querySelector("small");
    err.style.visibility = "visible";
    err.innerText = message;
    parent.classList.add("error");
    parent.classList.remove("success");
    return false;
}
