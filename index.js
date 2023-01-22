// test
console.log("test");

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const links = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", ()=>{

    navMenu.classList.toggle("nav-menu-active");
})

links.forEach((link)=>link.addEventListener("click",()=>{
    navMenu.classList.remove("nav-menu-active");
}))


// ********** fixed navbar ************

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function(){
    const scrollHeight = this.window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navbar.classList.add("fixed-navbar");
    }
    else{
        navbar.classList.remove("fixed-navbar");
    }
})

// Implementing Dark Theme 

const darkToggle = document.querySelector(".dark-toggle");

darkToggle.addEventListener("click",()=>{
    document.body.classList.toggle("dark-theme");
})