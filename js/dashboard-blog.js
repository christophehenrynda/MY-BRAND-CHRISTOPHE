// showing pop ups
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

//drag and drop

const dropArea = document.getElementById("update-drop-area");
const inputFile = document.getElementById("update-input-file");
const imageView = document.querySelector(".update-image-view");
inputFile.addEventListener("change", uploadImage);
function uploadImage () {
    var updateImgLink = URL.createObjectURL(inputFile.files[0]);
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
var addImgLink;
addInputFile.addEventListener("change", (event) => {addBlog()});
function addBlog () {
    addImgLink = URL.createObjectURL(addInputFile.files[0]);
    addImageView.style.backgroundImage = `url(${addImgLink})`;
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

// validation and storage
const blogHeader = document.getElementById ('blog-title-input');
const blogDescription = document.getElementById ('blog-description-input');
const blogUrl = addImgLink;
const blogSection = document.getElementById ('iframe-section').contentDocument.querySelector ('.blog-cards');


document.querySelector(".add-blog-button").addEventListener("click", (event) => {
    addBlogToStorage();

})
class Blog  {
    constructor (header, blogDescription, blogUrl){
        this.header = header;
        this.blogDescription = blogDescription;
        this.blogUrl = blogUrl;
    }
    
}
function addBlogToStorage (){
    let blogArray = [];
    if(blogHeader.value.trim() !== ""){
        if(localStorage.getItem("blogs")){
            blogArray =JSON.parse(localStorage.getItem("blogs")) || [];
        }
        const fr= new FileReader();
        fr.readAsDataURL(addInputFile.files[0]);
        const url = fr.result;
        let blog = new Blog(blogHeader.value, blogDescription.value, addImgLink);
        blogArray.push(blog);
        localStorage.setItem("blogs", JSON.stringify(blogArray));
        blogHeader.value = "";
        blogDescription.value = "";
        addInputFile.value = "";
        addImageView.style.backgroundImage = "";
    }else {
        window.alert("Failed")
    }
}


