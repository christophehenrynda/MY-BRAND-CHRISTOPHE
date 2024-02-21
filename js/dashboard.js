const messageDashboard = document.querySelector(".message");

document.addEventListener("DOMContentLoaded", (event) => {
    displayMessageson();
})
function displayMessageson() {
    let messageArray = [];
    if(localStorage.getItem("messages")) {
        messageArray = JSON.parse(localStorage.getItem("messages"))||[];
        for (let i = 0; i < messageArray.length; i++) {
            const element = messageArray[i];
            messageDashboard.innerHTML += `
                <div class="summary-card-content">
                    <div class="image">
                        <img src="./resources/serene-arches-zW37K3MrZk0-unsplash.jpg" alt="">
                    </div>
                    <div class="summary-card-content-caption">
                        <h2>${element.username}</h2>
                        <p>${element.message}</p>
                    </div>
                    <div class="time-sent">
                        <p>${element.year}-${element.month}-${element.day}</p>
                    </div>
                </div>

                `
            
        }
    }
}