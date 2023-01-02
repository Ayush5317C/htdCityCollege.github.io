let menuIcon = document.querySelector(".menuIcon");
let navMenu = document.querySelector(".navMenu");
let navSection = document.querySelector("#navSection");
menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("rotateLines");
    if(menuIcon.classList.contains("rotateLines")){
        navMenu.style.height = "250px";
        navSection.style.borderBottom = "2px solid #e3e3e3";
    }
    else{
        navMenu.style.height = 0;
        navSection.style.borderBottom = "none";
    }
})