function pop(){
    let header = document.getElementsByTagName('header')[0];
    header.classList.toggle('active');
    let main = document.getElementsByTagName('main')[0];
    main.classList.toggle('active');
    let popup = document.querySelector('.blog-popup');
    popup.classList.toggle('disactive');
}
//displaying comments
document.querySelector(".blog-card").addEventListener('click', (event) => {
    displayBlogs();
})
function displayBlogs(index){
    
    const blogPopup = document.querySelector(".blog-popup");
    const blogPopupImage = blogPopup.querySelector(".blog-popup-image").querySelector("img");
    const blogPopupHeader = blogPopup.querySelector(".lower-section").querySelector(".blog-popup-caption").querySelector(".blog-popup-caption-header").querySelector("h3");
    const blogPopupDescription = blogPopup.querySelector(".lower-section").querySelector(".blog-popup-caption").querySelector(".blog-popup-description").querySelector("p");
    const blogLikesNumber = blogPopup.querySelector(".lower-section").querySelector(".blog-popup-likes-comments").querySelector(".blog-popup-like").querySelector("p");
    const blogCommentNumber = blogPopup.querySelector(".lower-section").querySelector(".blog-popup-likes-comments").querySelector(".blog-popup-comments").querySelector("p");
    const commentSections = blogPopup.querySelector(".lower-section").querySelector(".blog-popup-caption").querySelector("#commentSection");
    const commentInput = blogPopup.querySelector(".lower-section").querySelector(".blog-popup-caption").querySelector(".add-comment").querySelector("#comment-input");
    if (localStorage.getItem("blogs")){
        let blogsArray = JSON.parse(localStorage.getItem("blogs"));

        blogPopupImage.src = `url(${blogsArray[index].blogUrl})`;
        blogPopupHeader.innerHTML = blogsArray[index].header;
        blogPopupDescription.innerHTML = blogsArray[index].blogDescription;
        blogLikesNumber.innerHTML = blogsArray[index].likes.length;
        blogCommentNumber.innerHTML = blogsArray[index].comments.length;
        displayComments(index);
        commentInput.addEventListener ("keyup", (event) => {addBlogComment(index)})
        for(let i = 0; i < blogCommentNumber.length; i++) {
            let codes = 
                `
                <div class="comment">
                    <div class="comment-username">
                        <b>${commentArray[i].username}</b>
                    </div>
                    <div class="comment-comment">
                        <p>${commentArray[i].comment}</p>
                    </div>
                </div>
                `;
    
            commentSections.innerHTML += codes;
        }
    }
    pop();
}

//adding comments to blog
const name = "John Doe";
const words = document.getElementById("comment-input");
const commentSection = document.getElementById("commentSection");
const blogCommentNumber = document.querySelector(".blog-popup").querySelector(".lower-section").querySelector(".blog-popup-likes-comments").querySelector(".blog-popup-comments").querySelector("p");
class UserComment {
    constructor(username, comment){
        this.username = username;
        this.comment = comment;
    }
}
function displayComments (index){
    if(localStorage.getItem("blogs")){
        let blogsArr = JSON.parse(localStorage.getItem("blogs")) || [];
        let commentArray = blogsArr[index].comments;
        blogCommentNumber.innerHTML = commentArray.length;
        commentSection.innerHTML ="";
        for(let i = 0; i < commentArray.length; i++) {
            let codes = 
                `
                <div class="comment">
                    <div class="comment-username">
                        <b>${commentArray[i].username}</b>
                    </div>
                    <div class="comment-comment">
                        <p>${commentArray[i].comment}</p>
                    </div>
                </div>
                `;
        
            commentSection.innerHTML += codes;
        }

        //document.querySelector('.blog-comments').innerHTML = commentsNum.length; //display the number of comments on load
    }
        
        
}
   
    // words.addEventListener("keyup", (event) => {
    //     addBlogComment();
        
    // })
    function addBlogComment (index){
        if (event.keyCode === 13){
            if(words.value.trim() != ""){
                let blogs = [];
                if(localStorage.getItem("blogs")){
                    blogs = JSON.parse(localStorage.getItem("blogs")) || [];
                }
                let commentArray = blogs[index].comments;
                const userComment = new UserComment(name, words.value);
                commentArray.push(userComment);
                localStorage.setItem("blogs", JSON.stringify(blogs));
                // let codes = 
                // `
                // <div class="comment">
                //     <div class="comment-username">
                //         <b>${userComment.username}</b>
                //     </div>
                //     <div class="comment-comment">
                //         <p>${userComment.comment}</p>
                //     </div>
                // </div>
                // `;
                
                // commentSection.innerHTML += codes; 
                console.log(commentSection);
                // document.querySelector('.blog-comments').innerHTML = commentsNum.length; // display number of comments giving comment
                displayComments(index);
                words.value = "";
            }
            
        }
    }
    //display blogs on load
const currentDate = new Date();

// Get the current date and time components
const year = currentDate.getFullYear(); 
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate(); 
const hours = currentDate.getHours(); 
const minutes = currentDate.getMinutes(); 
const seconds = currentDate.getSeconds(); 
document.addEventListener("DOMContentLoaded", (event) => {
    displayBlogOnPage();
})
function displayBlogOnPage() {
    if(localStorage.getItem("blogs")) {
        let blogs = JSON.parse(localStorage.getItem("blogs"))||[];

        for (let i = 0; i < blogs.length; i++) {
            let codes = 
                `
                <div class="blog-card" onClick="displayBlogs(${i})">
                    <div class="blog-image">
                        <img src="${(blogs[i].blogUrl)?blogs[i].blogUrl:"resources/image-image.jpg"}" alt="some pics">
                    </div>
                    <div class="blog-describe">
                        <div class="blog-caption">
                            <P>${blogs[i].header}</P>
                        </div>
                        <div class="blog-describe-stat">
                            <div class="blog-likes">
                                <i class="fa-solid fa-heart" style="color: #f18805;"></i>
                                <p>${blogs[i].likes.length}</p>
                            </div>
                            <div class="blog-comments">
                                <i class="fa-solid fa-comment" style="color: #87a330;"></i>
                                <p>${blogs[i].comments.length}</p>
                            </div>
                            <div class="blog-time">
                                <p>${new Date(blogs[i].date).getFullYear()}-${new Date(blogs[i].date).getMonth()+1}-${new Date(blogs[i].date).getDate()}</p>
                            </div>
                        </div>
                    
                    </div>
                </div>
                `
            document.getElementById("blog-cards").innerHTML += codes;
            
        }
    } 
}
