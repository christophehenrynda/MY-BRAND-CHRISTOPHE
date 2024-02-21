class Authh {
    constructor(){
        document.querySelector('body').style.display = 'none';
        const auth = localStorage.getItem('auth');
        this.validateAuth(auth);
    }
    validateAuth(auth: string | null): void {
        if(auth != '1'){
            window.location.replace("./login-sign.htm");
        } else{
            document.querySelector('body')!.style.display = 'block';
        }
    }
    logOut (){
        localStorage.removeItem('auth');
        window.location.replace("./login-sign.htm");
    }
}