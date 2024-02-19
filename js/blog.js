function pop(){
    let header = document.getElementsByTagName('header')[0];
    header.classList.toggle('active');
    let main = document.getElementsByTagName('main')[0];
    main.classList.toggle('active');
    let popup = document.querySelector('.blog-popup');
    popup.classList.toggle('disactive');
}

//adding comments to blog
const name = "John Doe";
    const words = document.getElementById("comment-input");
    const commentSection = document.getElementById("commentSection");
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
                words.value = "";
            }else {
                window.alert("booo");
            }
            
        }
    }