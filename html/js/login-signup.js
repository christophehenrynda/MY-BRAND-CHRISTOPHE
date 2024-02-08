const x = document.getElementById('login');
const y = document.getElementById('register');
const z = document.getElementById('btn');
const btn_log = document.getElementById('log-in-header');
const btn_reg = document.getElementById('register-header');
const uname = document.getElementById('uname');
const s_email = document.getElementById('s_email');
const s_pswd = document.getElementById('s_pswd');
const s_conpswd = document.getElementById('conpswd');
const form = document.getElementById('form');
const l_email = document.getElementById('l_email');
const l_pswd= document.getElementById('l_pswd');
const l_check= document.getElementById('l_check');
let bool_check = false;
const emailRegex = /^[a-zA-Z0-9.!#$%&'"+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

document.querySelector("#login").addEventListener("click", (event)=>{
    event.preventDefault();
    validateInput_login();
});

document.querySelector("#register").addEventListener("click", (event)=>{
    event.preventDefault();
    validateInput_register();
});

function register () {
    x.style.left = '-400px';
    y.style.left = '50px';
    z.style.left = '110px';
    btn_log.style.color = '#87A330';
    btn_reg.style.color = '#030c11';
}
function login () {
    x.style.left = '50px';
    y.style.left = '450px';
    z.style.left = '0px';
    btn_log.style.color = '#030c11';
    btn_reg.style.color = '#87A330';
}

/*let modal = document.getElementById('login-form');
window.onclick = function (event) {
    if (event.target == modal){
        modal.style.display = "none";
    }
}*/



function validateInput_login () {
    if (l_email.value.trim() === "" ){
        bool_check = true;
        onError(l_email, "Email cannot be empty");
    }else if(!emailRegex.test(l_email.value)){
        bool_check = true;
        onError(l_email, "Email is not valid");
    }else{
        onSuccess(l_email);
    }
    if (l_pswd.value.trim() === "" ){
        bool_check = true;
        onError(l_pswd, "Password is required");
    }else {
        onSuccess(l_pswd);
    }
}

function validateInput_register () {
    if (fname.value.trim()===""){
        bool_check = true;
        onError( fname, "First Name cannot be empty");
    }else {
        onSuccess(fname);
    }
    if (lname.value.trim()===""){
        bool_check = true;
        onError(lname, "Last Name cannot be empty");
    }else {
        onSuccess(lname);
    }
    if (s_email.value.trim() === "" ){
        bool_check = true;
        onError(s_email, "Email cannot be empty");
    }else if(s_email.value.trim() === emailRegex){
        bool_check = true;
        onError(s_email, "Email is not valid");
    }else{
        onSuccess(s_email);
    }
    if (s_pswd.value.trim() === "" ){
        bool_check = true;
        onError(s_pswd, "Password is required");
    }else if (s_conpswd.value.trim() === "") {
        bool_check = true;
        onError(s_conpswd, "You must confirm your password");
    }else if ( s_pswd.value.trim() === s_conpswd.value.trim()) {
        bool_check = true;
        onError(s_conpswd, "Your confirmed password must be the same as the password given");
    } else {
        onSuccess(s_pswd); 
    }
}

function onSuccess (input){
    let parent = input.parentElement;
    let err = parent.querySelector(".small");
    err.style.visibility = "hidden";
    err.innerText = "";
    parent.classList.add("success");
    parent.classList.remove("error");
}
function onError (input, message){
    let parent = input.parentElement;
    let err = parent.querySelector(".small");
    err.style.visibility = "visible";
    err.innerText = message;
    parent.classList.add("error");
    parent.classList.remove("success");
}




