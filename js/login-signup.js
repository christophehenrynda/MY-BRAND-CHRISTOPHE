const x = document.getElementById('login');
const y = document.getElementById('register');
const z = document.getElementById('btn');
const buttonLogin = document.getElementById('log-in-header');
const buttonRegister = document.getElementById('register-header');
const uName = document.getElementById('uname');
const signUpEmail = document.getElementById('s_email');
const registerPassword = document.getElementById('s_pswd');
const registerPasswordConfirm = document.getElementById('conpswd');
const form = document.getElementById('form');
const loginEmail = document.getElementById('l_email');
const loginPassword= document.getElementById('l_pswd');
const loginCheck= document.getElementById('l_check');
let boolCheck = false;
const emailRegex = /^[a-zA-Z0-9.!#$%&'"+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&]{8,}$/;


document.querySelector("#login").addEventListener("input", (event)=>{
    event.preventDefault();
    validateInput_login();
});

document.querySelector("#register").addEventListener("input", (event)=>{
    event.preventDefault();
    validateInput_register();
});

function register () {
    x.style.left = '-400px';
    y.style.left = '50px';
    z.style.left = '110px';
    buttonLogin.style.color = '#87A330';
    buttonRegister.style.color = '#030c11';
}
function login () {
    x.style.left = '50px';
    y.style.left = '450px';
    z.style.left = '0px';
    buttonLogin.style.color = '#030c11';
    buttonRegister.style.color = '#87A330';
}

/*let modal = document.getElementById('login-form');
window.onclick = function (event) {
    if (event.target == modal){
        modal.style.display = "none";
    }
}*/



function validateInput_login () {
    if (loginEmail.value.trim() === "" ){
        boolCheck = true;
        onError(loginEmail, "Email cannot be empty");
    }else if(!emailRegex.test(loginEmail.value)){
        boolCheck = true;
        onError(loginEmail, "Email is not valid");
    }else{
        onSuccess(loginEmail);
    }
    if (loginPassword.value.trim() === ""){
        boolCheck = true;
        onError(loginPassword, "Password is required");
    }else if(!passwordRegex.test(loginPassword.value)) {
        boolCheck = true;
        onError(loginPassword, "Password is required");
    }else {
        onSuccess(loginPassword);
    }
    
}

function validateInput_register () {
    if (uName.value.trim()===""){
        boolCheck = true;
        onError( uName, "First Name cannot be empty");
    }else {
        onSuccess(uName);
    }
    if (signUpEmail.value.trim() === "" ){
        boolCheck = true;
        onError(signUpEmail, "Email cannot be empty");
    }else if(!emailRegex.test(signUpEmail.value)){
        boolCheck = true;
        onError(signUpEmail, "Email is not valid");
    }else{
        onSuccess(signUpEmail);
    }
    if (registerPassword.value.trim() === "" ){
        boolCheck = true;
        onError(registerPassword, "Password is required");
    }else if (!passwordRegex.test(registerPassword.value)){
        boolCheck = true;
        onError(registerPassword, "Password must be a valid");
    }else {
        onSuccess (registerPassword)
    }
    if (!passwordRegex.test(registerPasswordConfirm.value)){
        boolCheck = true;
        onError(registerPasswordConfirm, "Password must be a valid");
    }else if (registerPasswordConfirm.value.trim() === "") {
        boolCheck = true;
        onError(registerPasswordConfirm, "You must confirm your password");
    }else if ( registerPassword.value.trim() !== registerPasswordConfirm.value.trim()) {
        boolCheck = true;
        onError(registerPasswordConfirm, "Your confirmed password must be the same as the password given");
    } else {
        onSuccess(registerPasswordConfirm); 
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

//correct implementation
let store = () => {
    localStorage.setItem("uname", uName.value);
    localStorage.setItem("email", signUpEmail.value);
    if (registerPassword.value === registerPasswordConfirm.value) {
        localStorage.setItem("password", registerPassword.value);
        x.reset();
        y.reset();
        
    } else {
        window.alert("Please enter a password again")
    }
}
let check = () => {
    //stored credentials
    let storeName = localStorage.getItem("uname");
    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");
    
    //login credentials
    if (storedEmail === loginEmail.value && storedPassword === loginPassword.value)  {
        window.location.href = "./dashboard.htm";
        x.reset();
        y.reset();
    } else {
        window.alert("Please enter correct email and password")
    }
}