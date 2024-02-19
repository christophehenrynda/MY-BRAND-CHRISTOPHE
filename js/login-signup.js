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
                if (this.check()) {
                    localStorage.setItem("auth",1);
                    this.form.submit();
                }else {
                    x.reset();  
                    y.reset();
                }
                
                
                
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
    check ()  {
        //stored credentials
        let user = JSON.parse(localStorage.getItem("user")) || [];
        
        for (let i = 0; i < user.length; i++) {
            const element = user[i];
            //login credentials
            if (element.email === loginEmail.value && element.password === loginPassword.value)  {
                //window.location.href = "./dashboard.htm";
                x.reset();
                y.reset();
                return true;
            } 
        }
        return false;
    }
    
        
}


const form = x;
if (form){
    const fields = [loginEmail, loginPassword];
    const validator = new Login(form, fields);
}

class SignUp {
    constructor(form,fields){
        this.form = form;
        this.fields = fields;
        this.validateOnSubmit();
    }

    validateOnSubmit (){
        let self = this;

        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            var err = 0;
            self.fields.forEach((field) => {
                const input = field;
                if (!self.validateFields(input)) {
                    err++;
                } 
            });
            if (err == 0) {
                //API
                this.store();
                window.location.href = window.location.href;
                
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
            }else if (!(registerPassword.value.trim() == registerPasswordConfirm.value.trim())) {
                this.onError(registerPasswordConfirm, "Please confirm your password");
            }
            else {
                this.onSuccess(field);
                return true;
            }
        }else if (field.type == "text") {
            if (field.value.length < 4){
                this.onError(field, "Username must be atleast 4 characters long");
                return false;
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
    
    store () {
        let user = {
            username: uName.value,
            email: signUpEmail.value,
            password: registerPassword.value,

        }
        let usersArray = [];
        if (localStorage.getItem('user')){
            let arr = JSON.parse(localStorage.getItem('user')) || [];
            for (let i=0; i< arr.length; i++) {
            let user = {
                username: arr[i].username,
                email: arr[i].email,
                password: arr[i].password
            }
            }
            
            usersArray.push(user);
        }
       
        usersArray.push(user);

        localStorage.setItem("user", JSON.stringify(usersArray));
        x.reset();
        y.reset();
    }

}
const registerationForm = y; 
if (registerationForm){
    const fields = [uName, signUpEmail, registerPassword,registerPasswordConfirm]
    const validator = new SignUp(registerationForm, fields);
}



