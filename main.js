let menu = document.querySelector(".fa-bars");
let menuClose = document.querySelector(".fa-times");
let navMenu = document.getElementById("toggleMenu");

menu.onclick=()=>{
  navMenu.classList.add("active");
}
menuClose.onclick=()=>{
  navMenu.classList.remove("active");
}