function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");   
}
const imgs = document.getElementById("img");
const img = document.querySelectorAll('#img .img_slide')
let idx = 0;
function carrossel(){
    idx++;
    if(idx > img.length - 1){
        idx = 0;
    }
    imgs.style.transform =  `translateX(${-idx * 433}px)`;
}
setInterval(carrossel, 1800);
