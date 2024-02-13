function toggle(){
    let header = document.querySelector('header');
    header.classList.toggle('active');
    let blog_dashboard = document.querySelector('.blog-dashboard');
    blog_dashboard.classList.toggle('active');
    let popup = document.querySelector('.add-blog');
    popup.classList.toggle('active');
}