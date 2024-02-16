const userNames = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const emailRegex = /^[a-zA-Z0-9.!#$%&'"+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let boolCheck = false;

document.querySelector("#contact-me").addEventListener("input", (event) => {
    if(checkContacts())
        event.preventDefault();
    
})

function checkContacts() {
    if (userNames.value.trim() == ""){
        onError(userNames, "please enter your names");
    }else {
        onSuccess(userNames);
    } if(email.value.trim() == ""){
        onError(email, "Email cannot be empty");
    
    }else if(!emailRegex.test(email.value)){
        onError(email, "please enter your email correctly") 
    }
    else{
        onSuccess(email);
    }
    if(message.value.trim() == ""){
        onError(message, "please enter your message");
    }else{
        onSuccess(message);
    }
}
function onSuccess (input){
    let parent = input.parentElement;
    let err = parent.querySelector("small");
    err.style.visibility = "hidden";
    err.innerText = "";
    parent.classList.add("success");
    parent.classList.remove("error");
}
function onError (input, message){
    let parent = input.parentElement;
    let err = parent.querySelector("small");
    err.style.visibility = "visible";
    err.innerText = message;
    parent.classList.add("error");
    parent.classList.remove("success");
}