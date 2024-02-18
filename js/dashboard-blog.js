function toggle(){
    let header = document.querySelector('header');
    header.classList.toggle('active');
    let blog_dashboard = document.querySelector('.blog-dashboard');
    blog_dashboard.classList.toggle('active');
    let popup = document.querySelector('.add-blog');
    popup.classList.toggle('active');
}
function update(){
    let header = document.querySelector('header');
    header.classList.toggle('active');
    let main = document.querySelector('main');
    main.classList.toggle('active');
    let popUp = document.querySelector('.update-blog-popup');
    popUp.classList.toggle('active');
}
const dropArea = document.getElementById("update-drop-area");
const inputFile = document.getElementById("update-input-file");
const imageView = document.querySelector(".update-image-view");
inputFile.addEventListener("change", uploadImage);
function uploadImage () {
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    imageView.style.backgroundImage = `url(${imgLink})`;
    imageView.textContent = "";
    imageView.style.border = 0;
}
dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
});
dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImage();
});
const addDropArea = document.getElementById("drop-area");
    const addInputFile = document.getElementById("input-file");
    const addImageView = document.querySelector(".image-view");
    addInputFile.addEventListener("change", addBlog);
    function addBlog () {
        let imgLink = URL.createObjectURL(addInputFile.files[0]);
        addImageView.style.backgroundImage = `url(${imgLink})`;
        addImageView.textContent = "";
        addImageView.style.border = 0;
}
addDropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
});
addDropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    addInputFile.files = e.dataTransfer.files;
    addBlog();
});