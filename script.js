
const hamburger = document.querySelector(".hamburger");
const navManu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navManu.classList.toggle("active");
    
})
document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click",() =>{
        hamburger.classList.remove("active");
        navManu.classList.remove("active");
    }))