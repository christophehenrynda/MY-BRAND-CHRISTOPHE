function toggle(): void {
    let header = document.querySelector('header') as HTMLElement;
    header.classList.toggle('active');
    let main = document.querySelector('main');
    main?.classList.toggle('active');
    let popUp = document.querySelector('.message-reply');
    popUp?.classList.toggle('active');
}

//display messages
const dashboard = document.querySelector('.msg-dashboard')?.querySelector("table");

document.addEventListener("DOMContentLoaded", (event) => {
    displayMessages();
})
function displayMessages() {
    let messageArray: any[]= [];
    if(localStorage.getItem("messages")) {
        messageArray = JSON.parse(localStorage.getItem("messages"))||[];
        for (let i = 0; i < messageArray.length; i++) {
            const element = messageArray[i];
            const codes = `
            <tr>
                <td></td>
                <td class="dash-msg-nbr">00${i + 1}</td>
                <td class="msg-image">
                    <img src="./resources/serene-arches-zW37K3MrZk0-unsplash.jpg" alt="an image">
                </td>
                <td class="msg-title">${messageArray[i].username}</td>
                <td class="msg-description">${messageArray[i].message}</td>
                <td class="date-created">${messageArray[i].year}-${messageArray[i].month}-${messageArray[i].day}</td>
                <td class="action">
                    <i class="fa-solid fa-pen-to-square" onclick="toggle()"></i>
                    <i class="fa-solid fa-delete-left"></i>
                </td>
            </tr>

                `
            dashboard.innerHTML += codes;
        }
    }
}