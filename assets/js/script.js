window.onscroll = function(){
    fixNavbar();
}
let navbar = document.getElementById('navbar');
let carousel = document.getElementById('slideShow');
let sticky = navbar.offsetTop;

function fixNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        carousel.style.marginTop = '72px';
    } else {
        navbar.classList.remove("sticky");
        carousel.style.marginTop = '0px';
    }
}