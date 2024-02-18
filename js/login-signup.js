const x = document.getElementById('login');
const y = document.getElementById('register');
const z = document.getElementById('btn');
const buttonLogin = document.getElementById('log-in-header');
const buttonRegister = document.getElementById('register-header');
const uName = document.getElementById('uname');
const signUpEmail = document.getElementById('s_email');
const registerPassword = document.getElementById('s_pswd');
const registerPasswordConfirm = document.getElementById('conpswd');
//const form = document.getElementById('form');
const loginEmail = document.getElementById('l_email');
const loginPassword= document.getElementById('l_pswd');
const loginCheck= document.getElementById('l_check');
let boolCheck = false;
const emailRegex = /^[a-zA-Z0-9.!#$%&'"+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&]{8,}$/;

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



class Login {
    constructor(form, fields) {
        this.form = form;
        this.fields = fields;
        this.validateOnSubmit();
    }

    validateOnSubmit() {
        let self = this;

        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            var error = 0;
            self.fields.forEach((field) => {
                const input = field;
                if (!self.validateFields(input)) {
                    error++;
                } 
                  
            });
            if(error == 0){
                //API
                localStorage.setItem("auth",1)
                this.form.submit();
            } 
        });
    }
    validateFields(field){
        if (field.value.trim() == '') {
            this.onError(field, "This field is required");
            return false;
        }else if (field.type == "email") {
            if (!emailRegex.test(field.value)) {
                this.onError(field, "Enter a valid email address");
                return false; 
            }else {
                this.onSuccess(field);
                return true;
            }
        }else if (field.type == "password") {
            if (!passwordRegex.test(field.value)) {
                this.onError(field, "Please enter a valid password");
                return false
            }else {
                this.onSuccess(field);
                return true;
            }
        }
        
    }
    onSuccess (input){
        let parent = input.parentElement;
        let err = parent.querySelector("small");
        err.style.display = "none";
        err.innerText = "";
        parent.classList.add("success");
        parent.classList.remove("error");
    }
    onError (input, message){
        let parent = input.parentElement;
        let err = parent.querySelector("small");
        err.style.display = "block";
        err.innerText = message;
        parent.classList.add("error");
        parent.classList.remove("success");
    }
}

const form = x;
if (form){
    const fields = [loginEmail, loginPassword];
    const validator = new Login(form, fields);
}
