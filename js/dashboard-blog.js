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
function updateBlog(index, updateHeader, updateDescription, updateUrl){
    let header = document.querySelector('header');
    header.classList.toggle('active');
    let main = document.querySelector('main');
    main.classList.toggle('active');
    let popUp = document.querySelector('.update-blog-popup');
    popUp.classList.toggle('active');
    popUp.querySelector("#blog-header-update-input").value = updateHeader;
    popUp.querySelector("#blog-description-update-input").value = updateDescription;
    popUp.querySelector(".update-image-file-input").querySelector("#update-drop-area").querySelector(".update-image-view").style.backgroundImage = `url(${updateUrl})`;
    popUp.querySelector(".update-image-file-input").querySelector("#update-drop-area").querySelector(".update-image-view").textContent = "";
    popUp.querySelector(".update-image-file-input").querySelector("#update-drop-area").querySelector(".update-image-view").style.border = 0;
    popUp.querySelector(".update-cancel-blog-btn").querySelector("button").onclick =function () { 
                                                                                                    updateBlogInStorage(index);
                                                                                                }
}

function updateBlogInStorage(index) {
    let blogs = JSON.parse(localStorage.getItem('blogs'));
    console.log(blogs);
    if(Array.isArray(blogs)){
    console.log(blogs);
    console.log(index);
        if(index >=0){
            
            if ( index < blogs.length) {
                console.log("i'm here");
                blogs[index].header = document.getElementById('blog-header-update-input').value;
                blogs[index].blogDescription = document.getElementById('blog-description-update-input').value;
                // Assuming updateUrl is the URL of the updated image
                blogs[index].blogUrl = document.querySelector(".update-image-file-input").querySelector("#update-drop-area").querySelector(".update-image-view").style.backgroundImage;
                localStorage.setItem('blogs', JSON.stringify(blogs));
                // Optionally, you can reload the dashboard or update the displayed blogs
                displayBlogsOnDashboard();
            }
    }}
}
//drag and drop for add blog popup

const dropArea = document.getElementById("update-drop-area");
const inputFile = document.getElementById("update-input-file");
const imageView = document.querySelector(".update-image-view");
inputFile.addEventListener("change", uploadImage);
function uploadImage () {
    var updateImgLink = URL.createObjectURL(inputFile.files[0]);
    imageView.style.backgroundImage = `url(${updateImgLink})`;
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

//addd blog popup
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




/// blog class
class Blog  {
    constructor (header, blogDescription, blogUrl, comments, likes, date){
        this.header = header;
        this.blogDescription = blogDescription;
        this.blogUrl = blogUrl;
        this.comments = comments;
        this.likes = likes;
        this.date = date;
    }
    
}
function addBlogToStorage (){
    let blogArray = [];
    let today = new Date();
    if(blogHeader.value.trim() !== ""){
        if(localStorage.getItem("blogs")){
            blogArray =JSON.parse(localStorage.getItem("blogs")) || [];
        }
        const fr= new FileReader();
        fr.readAsDataURL(addInputFile.files[0]);
        const url = fr.result;
        let blog = new Blog(blogHeader.value, blogDescription.value, addImgLink, [], [], today);
        blogArray.push(blog);
        localStorage.setItem("blogs", JSON.stringify(blogArray));
        console.log(blog.likes);
        blogHeader.value = "";
        blogDescription.value = "";
        addInputFile.value = "";
        addImageView.style.backgroundImage = "";
        // Clear the existing HTML content of the blog dashboard table
        document.querySelector(".blog-dashboard table").innerHTML = "";
        document.querySelector(".blog-dashboard table").innerHTML = ` <th>
            <td >No</td>
            <td>Image</td>
            <td>Header</td>
            <td>Description</td>
            <td>Date Created</td>
            <td>Action</td>
            </th>`;
        // Repopulate the blog dashboard with the updated blogArray
        displayBlogsOnDashboard();
    }else {
        window.alert("Failed")
    }
}

//display blogs onload
document.addEventListener("DOMContentLoaded", (event) => {
    displayBlogsOnDashboard();
})
function displayBlogsOnDashboard() {
    if (localStorage.getItem("blogs")) {
        let blog = JSON.parse(localStorage.getItem("blogs"));
        for (let i = 0; i < blog.length; i++) {
            const element = blog[i];
            let codes = `
                            <tr>
                                <td></td>
                                <td class="dash-blog-nbr">0${i+1}</td>
                                <td class="blog-image">
                                    <img src=${element.blogUrl} alt="an image">
                                </td>
                                <td class="blog-title">${element.header}</td>
                                <td class="blog-description">${element.blogDescription}</td>
                                <td class="date-created">${new Date(element.date).getFullYear()}-${new Date(element.date).getMonth()+1}-${new Date(element.date).getDate()}</td>
                                <td class="action">
                                    <i class="fa-solid fa-pen-to-square" onclick="updateBlog(${i},'${element.header}','${element.blogDescription}','${element.blogUrl}')"></i>
                                    <i class="fa-solid fa-delete-left" onClick= "deleteBlog(${i})"></i>
                                </td>
                            </tr>
                        `
            document.querySelector(".blog-dashboard").querySelector("table").innerHTML += codes;
            
        }
    }
}
//Delete blogs

function deleteBlog(index){
    
    let blogArray = (localStorage.getItem('blogs'))? JSON.parse(localStorage.getItem('blogs')) : [];
    blogArray.splice(index, 1);
    localStorage.setItem('blogs', JSON.stringify(blogArray));
    document.querySelector(".blog-dashboard table").innerHTML = "";
        document.querySelector(".blog-dashboard table").innerHTML = ` <th>
            <td >No</td>
            <td>Image</td>
            <td>Header</td>
            <td>Description</td>
            <td>Date Created</td>
            <td>Action</td>
            </th>`;
        displayBlogsOnDashboard();   
}

document.querySelector('.update-cancel-blog-btn').querySelector("button").addEventListener("click", (event) => {
    updateBlogInStorage();
})


    

