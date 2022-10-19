window.onscroll = function(){
    fixNavbar();
}
let navbar = document.getElementById('navbar');
let carousel = document.getElementById('slideShow');
//let carousel = window.getComputedStyle(document.getElementById('slideShow'));
//let nav = window.getComputedStyle(document.getElementById('navbar'));
let car = window.getComputedStyle(carousel);
// let margin = mTop.height;
// let mTop = document.getElementById('navbar').style.marginTop.value;
// console.log(margin);




let sticky = navbar.offsetTop;

function fixNavbar() {
    if (window.pageYOffset >= sticky) {
        console.log(sticky);
        navbar.classList.add("sticky");
        carousel.style.marginTop = '72px';
        console.log(car.marginTop);
        
    } else {
        navbar.classList.remove("sticky");
        carousel.style.marginTop = '0px';
    }
}