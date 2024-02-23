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
const emailField = document.getElementById('l_email');
const passwordField = document.getElementById('l_pswd');
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


let loginEmail = {
    value: undefined,
    type: 'email'

};
let loginPassword = {
    value: undefined,
    type: 'password'
};

emailField.addEventListener('change', (event) => {
    loginEmail.value = event.target.value;
    console.log('Email: ',loginEmail);
})

passwordField.addEventListener('change', (event) => {
    loginPassword.value = event.target.value;
    console.log('Password: ',loginPassword);
})



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
            let error = 0;
            // self.fields.forEach((field) => {
            //     const input = field;
            //     if (!self.validateFields(input)) {
            //         error++;
            //     } 
                  
            // });
            
            if (!self.validateFields(loginEmail)) error++;
            if (!self.validateFields(loginPassword)) error++; 

            if(error == 0){
                //API
                if (this.check(loginPassword.value, loginEmail.value)) {
                    if (localStorage.getItem("user")){
                        let usersArray = JSON.parse(localStorage.getItem("user")) || [];
                        
                        if (loginPassword.value === usersArray.find(user => user.username === "admin").password && loginEmail.value == usersArray.find(user => user.username === "admin").email){
                            // localStorage.setItem("auth", "admin");
                            // this.form.submit();
                            // window.location.replace("./dashboard.htm");

                            console.log("Logged IN")
                            
                        }else {
                            // localStorage.setItem("auth","user");
                            // window.location.replace("./index.htm");     
                            // this.form.submit();
                            
                        }
                    }
                    
                }else {
                    x.reset();  
                    y.reset();
                }
                
                
                
            } 
        });
    }
    validateFields(field){
        if(field.value === undefined) {
            this.onError(field, `${field.type}  is required`);
            return false;
        };
        if (field.value.trim() === '') {
            this.onError(field, "This field is required");
            return false;
        }else if (field.type === "email") {
            if (!emailRegex.test(field.value)) {
                this.onError(field, "Enter a valid email address");
                return false; 
            }else {
                // this.onSuccess(field);
                return true;
            }
        }else if (field.type == "password") {
            if (!passwordRegex.test(field.value)) {
                this.onError(field, "Please enter a valid password");
                return false
            }else {
                // this.onSuccess(field);
                return true;
            }
        }
        
    }
    // onSuccess (input){
    //     let parent = input.parentElement;
    //     let err = parent.querySelector("small");
    //     err.style.display = "none";
    //     err.innerText = "";
    //     parent.classList.add("success");
    //     parent.classList.remove("error");
    // }
    onError (input, message){
        let parent = input.parentElement;
        let err = parent.querySelector("small");
        err.style.display = "block";
        err.innerText = message;
        parent.classList.add("error");
        parent.classList.remove("success");
    }
    check (email, password)  {
            //stored credentials
        if (localStorage.getItem("user")){
            let users = JSON.parse(localStorage.getItem("user")) || [];

            const found = users.find(user => user.email === email && user.password === password);

            if(found) {
                window.location.replace("./dashboard.htm");
                x.reset();
                y.reset();
            }
        
            // for (let i = 0; i < user.length; i++) {
            //     const element = user[i];
            //     //login credentials
            //     if (element.email === email && element.password === password)  {
            //         //window.location.href = "./dashboard.htm";
            //         x.reset();
            //         y.reset();
            //         return true;
            //     } 
            // }
            
            return false;
        }else{
            window.location.replace("./login-signup.htm");
            return false;
        }
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
            let err = 0;
            self.fields.forEach((field) => {
                const input = field;
                if (!self.validateFields(input)) {
                    err++;
                } 
            });
            if (err == 0) {
                //API
                if(this.store) {
                    this.store();
                    window.location.href = window.location.href;
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
        let usersArray = [{
                            username: "admin",
                            email: "admin@example.com",
                            password: "Street!123",
                            }];
        if (localStorage.getItem('user')){
            usersArray = JSON.parse(localStorage.getItem('user')) || [];    
        }
        for (let i = 0; i < usersArray.length; i++) {
            if(usersArray[i].username == user.username || usersArray[i].email == user.email){
                this.onError(uName, "Try another username");
                this.onError(signUpEmail, "Try another email");
                return false;
            }
            
        }
        usersArray.push(user);

        localStorage.setItem("user", JSON.stringify(usersArray));
        x.reset();
        y.reset();
        return true;
    }

}
const registerationForm = y; 
if (registerationForm){
    const fields = [uName, signUpEmail, registerPassword,registerPasswordConfirm]
    const validator = new SignUp(registerationForm, fields);
}



