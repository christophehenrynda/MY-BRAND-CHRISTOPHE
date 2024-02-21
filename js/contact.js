const userNames = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.querySelector("#contact-me");
const emailRegex = /^[a-zA-Z0-9.!#$%&'"+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const today = new Date();
let boolCheck = false;
class Message {
    constructor (username, email, message, year, month, day){
        this.username = username;
        this.email = email;
        this.message = message;
        this.year = year;
        this.month = month;
        this.day = day;
    }
}
let messageArray = [];
form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendMessage();
    
      
})
function sendMessage (){
    if(checkContacts()){
        let messageObj = new Message(userNames.value, email.value, message.value, today.getFullYear(), today.getMonth(), today.getDate());
        if (localStorage.getItem("messages")){
            messageArray = JSON.parse(localStorage.getItem("messages")) || [];

        }
        messageArray.push(messageObj);
        localStorage.setItem("messages", JSON.stringify(messageArray));
        form.reset();
    }else {
        window.alert("bbdsd");
    }
}
function checkContacts() {
    let boo;
    if (userNames.value.trim() == ""){
        boo = onError(userNames, "please enter your names");
    }else {
        boo = onSuccess(userNames);
    } 
    if(email.value.trim() == ""){
        boo = onError(email, "Email cannot be empty");
    
    }else if(!emailRegex.test(email.value)){
        boo = onError(email, "please enter your email correctly") 
    }
    else{
        boo = onSuccess(email);
    }
    if(message.value.trim() == ""){
        boo = onError(message, "please enter your message");
    }else{
        boo = onSuccess(message);
    }
    return boo;
}
function onSuccess (input){
    let parent = input.parentElement;
    let err = parent.querySelector("small");
    err.style.visibility = "hidden";
    err.innerText = "";
    parent.classList.add("success");
    parent.classList.remove("error");
    return true;
}
function onError (input, message){
    let parent = input.parentElement;
    let err = parent.querySelector("small");
    err.style.visibility = "visible";
    err.innerText = message;
    parent.classList.add("error");
    parent.classList.remove("success");
    return false;
}