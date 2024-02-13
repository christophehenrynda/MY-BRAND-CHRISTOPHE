function pop(){
    let header = document.getElementsByTagName('header')[0];
    header.classList.toggle('active');
    let main = document.getElementsByTagName('main')[0];
    main.classList.toggle('active');
    let popup = document.querySelector('.blog-popup');
    popup.classList.toggle('disactive');
}