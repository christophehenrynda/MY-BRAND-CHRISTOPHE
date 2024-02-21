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
    displayBlog();
})
function displayBlog(){
    const parent = event.target;
    const imageSection = parent.querySelector(".blog-image");
    const src = imageSection.querySelector("img").src;
    const blogHeader = parent.querySelector(".blog-describe").querSelector(".blog-caption").querySelector("p");
    const blogPopup = document.querySelector(".blog-up");
    const blogPopupImage = blogPopup.querySelector(".blog-popup-image").querySelector("img");
    const blogPopupHeader = blogPopup.querySelector(".lower-section").querySelector(".blog-popup-caption").querySelector(".blog-popup-caption-header").querySelector("h3");
    const blogPopupDescription = blogPopup.querySelector(".lower-section").querySelector(".blog-popup-caption").querySelector(".blog-popup-description").blogPopup.querySelector("p");
    console.log(blogPopupDescription.value);
}

//adding comments to blog
const name = "John Doe";
    const words = document.getElementById("comment-input");
    const commentSection = document.getElementById("commentSection");
    const commentsNum = document.querySelectorAll('.comment'); // comments array
    class UserComment {
        constructor(username, comment){
            this.username = username;
            this.comment = comment;
        }
    }
    function displayComments (){
        if(localStorage.getItem("blogComment")){
            commentArray = JSON.parse(localStorage.getItem("blogComment")) || [];
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
            document.querySelector('.blog-comments').innerHTML = commentsNum.length; //display the number of comments on load
        }
        
        
    }
    displayComments();
    words.addEventListener("keyup", (event) => {
        addBlogComment();
        
    })
    function addBlogComment (){
        if (event.keyCode === 13){
            if(words.value.trim() !== ""){
                let commentArray = [];
                if(localStorage.getItem("blogComment")){
                    commentArray = JSON.parse(localStorage.getItem("blogComment")) || [];
                    

                }
                const userComment = new UserComment(name, words.value);
                commentArray.push(userComment);
                localStorage.setItem("blogComment", JSON.stringify(commentArray));
                let codes = 
                `
                <div class="comment">
                    <div class="comment-username">
                        <b>${userComment.username}</b>
                    </div>
                    <div class="comment-comment">
                        <p>${userComment.comment}</p>
                    </div>
                </div>
                `;
                
                commentSection.innerHTML += codes; 
                console.log(commentSection);
                document.querySelector('.blog-comments').innerHTML = commentsNum.length; // display number of comments giving comment

                words.value = "";
            }else {
                window.alert("booo");
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
    displayBlogs();
})
function displayBlogs() {
    if(localStorage.getItem("blogs")) {
        let blogs = JSON.parse(localStorage.getItem("blogs"))||[];

        for (let i = 0; i < blogs.length; i++) {
            let codes = 
                `
                <div class="blog-card" onClick="pop()">
                    <div class="blog-image">
                        <img src="${blogs[i].blogUrl}" alt="some pics">
                    </div>
                    <div class="blog-describe">
                        <div class="blog-caption">
                            <P>${blogs[i].blogDescription}</P>
                        </div>
                        <div class="blog-describe-stat">
                            <div class="blog-likes">
                                <i class="fa-solid fa-heart" style="color: #f18805;"></i>
                                <p>85</p>
                            </div>
                            <div class="blog-comments">
                                <i class="fa-solid fa-comment" style="color: #87a330;"></i>
                                <p>56</p>
                            </div>
                            <div class="blog-time">
                                <p>${year}-${month}-${day}</p>
                            </div>
                        </div>
                    
                    </div>
                </div>
                `
            document.getElementById("blog-cards").innerHTML += codes;
            
        }
    } 
}
