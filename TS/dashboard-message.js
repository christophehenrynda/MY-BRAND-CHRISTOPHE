var _a;
function toggle() {
    var header = document.querySelector('header');
    header.classList.toggle('active');
    var main = document.querySelector('main');
    main === null || main === void 0 ? void 0 : main.classList.toggle('active');
    var popUp = document.querySelector('.message-reply');
    popUp === null || popUp === void 0 ? void 0 : popUp.classList.toggle('active');
}
//display messages
var dashboard = (_a = document.querySelector('.msg-dashboard')) === null || _a === void 0 ? void 0 : _a.querySelector("table");
document.addEventListener("DOMContentLoaded", function (event) {
    displayMessages();
});
function displayMessages() {
    var messageArray = [];
    if (localStorage.getItem("messages")) {
        messageArray = JSON.parse(localStorage.getItem("messages")) || [];
        for (var i = 0; i < messageArray.length; i++) {
            var element = messageArray[i];
            var codes = "\n            <tr>\n                <td></td>\n                <td class=\"dash-msg-nbr\">00".concat(i + 1, "</td>\n                <td class=\"msg-image\">\n                    <img src=\"./resources/serene-arches-zW37K3MrZk0-unsplash.jpg\" alt=\"an image\">\n                </td>\n                <td class=\"msg-title\">").concat(messageArray[i].username, "</td>\n                <td class=\"msg-description\">").concat(messageArray[i].message, "</td>\n                <td class=\"date-created\">").concat(messageArray[i].year, "-").concat(messageArray[i].month, "-").concat(messageArray[i].day, "</td>\n                <td class=\"action\">\n                    <i class=\"fa-solid fa-pen-to-square\" onclick=\"toggle()\"></i>\n                    <i class=\"fa-solid fa-delete-left\"></i>\n                </td>\n            </tr>\n\n                ");
            dashboard.innerHTML += codes;
        }
    }
}
