const userNamess: HTMLInputElement = document.getElementById("name") as HTMLInputElement;
const emaill: HTMLInputElement = document.getElementById("email") as HTMLInputElement;
const messagee: HTMLInputElement = document.getElementById("message") as HTMLInputElement;
const formm: HTMLFormElement = document.getElementById("#contact-me") as HTMLFormElement;
const emailRegexx: RegExp = new RegExp(/^[a-zA-Z0-9.!#$%&'"+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const todayy: Date = new Date();
let boolCheckk: boolean = false;
class Messagee {
    username: string;
    email: string;
    message: string;
    year: number;
    month: number;
    day: number;
    constructor (username, email, message, year, month, day){
        this.username = username;
        this.email = email;
        this.message = message;
        this.year = year;
        this.month = month;
        this.day = day;
    }
}
let messageArrayy: Messagee[] = [];
formm.addEventListener('submit', (event:Event) => {
    event.preventDefault();
    sendMessagee();
})
function sendMessagee() :void {
    if(checkContactss()) {
        let messageeObj: Messagee = new Messagee(userNamess.value, emaill.value, messagee.value, todayy.getFullYear(), todayy.getMonth(), todayy.getDate())
        if (localStorage.getItem("messages")) {
            messageArrayy = JSON.parse(localStorage.getItem("messages")) || [];
        }
        messageArrayy.push(messageeObj);
        localStorage.setItem("messages", JSON.stringify(messageArrayy));
        formm.reset();
    }
}
function checkContactss(): boolean {
    let boo: boolean = false;
    if(userNamess.value.trim() == ""){
        boo = onErrorts(userNamess, "Please enter your names");
    }else {
        boo = onSuccessts(userNamess);
    }
    if(emaill.value.trim() == ""){
        boo = onErrorts(emaill, "Email cannot be empty");
    }else if(emailRegexx.test(emaill.value)){
        boo = onErrorts(emaill, "Please enter your email address correctly");
    }else {
        boo = onSuccessts(emaill)
    }
    if(messagee.value.trim() == ""){
        boo = onErrorts(messagee, "Please enter your message");
    }else {
        boo = onSuccessts(messagee);
    }
    return boo;
}
function onSuccessts (input: HTMLInputElement): boolean{
    let parent: HTMLElement = input.parentElement;
    let err: HTMLElement = parent.querySelector("small") as HTMLElement;
    err.style.visibility = "hidden";
    err.innerText = "";
    parent.classList.add("success");
    parent.classList.remove("error");
    return true;
}
function onErrorts (input: HTMLInputElement, message: string): boolean {
    let parent :HTMLElement = input.parentElement;
    let err: HTMLElement= parent.querySelector("small") as HTMLElement;
    err.style.visibility = "visible";
    err.innerText = message;
    parent.classList.add("error");
    parent.classList.remove("success");
    return false;
}