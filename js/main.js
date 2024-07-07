// Add click event for scroll up button
scrollBtn = document.querySelector(".scrollBtn");
window.addEventListener("scroll", ()=>{
scrollup()
})
scrollBtn.addEventListener('click',()=>{
window.scrollTo({
top : 0 ,
behavior : "smooth"
})
})
scrollup()
function scrollup(){
window.scrollY > 100 ? scrollBtn.classList.add('active') : scrollBtn.classList.
remove('active'); 
}

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry);
//         if (entry.isIntersecting){
//             entry.target.classList.add("show");
//         }
//         else{
//             entry.target.classList.remove("show");
//         }
//     });
// });

// const hiddenElements = document.querySelectorAll("#hidden");
// hiddenElements.forEach((el) => observer.observe(el));


let navbar = document.getElementById("navbar");
let menu = document.getElementById("menu");

window.onscroll = function(){
    if(window.pageYOffset >= menu.offsetTop){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
}
