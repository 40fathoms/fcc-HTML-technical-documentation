const body = document.querySelector(".body");
const nav = document.querySelector(".mobile-navbar");
const hamburger = document.querySelector(".mobile-hamburger");
const background = document.querySelector(".mobile-background");

hamburger.addEventListener("click", function(){
    if(hamburger.classList.contains("open")){
        body.classList.remove("open");
        nav.classList.remove("open");
        hamburger.classList.remove("open");
        background.classList.remove("open");

        nav.classList.remove("fade-in");
        nav.classList.add("fade-out");
        overlay.classList.remove("fade-in");
        overlay.classList.add("fade-out");
    }
    else{
        body.classList.add("open");
        nav.classList.add("open");
        hamburger.classList.add("open");
        background.classList.add("open");

        nav.classList.add("fade-in");
        nav.classList.remove("fade-out");
        overlay.classList.add("fade-in");
        overlay.classList.remove("fade-out");
    }
})

const links = document.querySelectorAll(".nav-link-mobile");

links.forEach(item => item.addEventListener("click", function(){
    body.classList.remove("open");
        nav.classList.remove("open");
        hamburger.classList.remove("open");
        background.classList.remove("open");

        nav.classList.remove("fade-in");
        nav.classList.add("fade-out");
        overlay.classList.remove("fade-in");
        overlay.classList.add("fade-out");
}))