const dropdown_menu = document.querySelector(".dropdown-menu");
const bx_menu = document.querySelector(".bx-menu");
const dropdown_close = document.querySelector(".dropdown-close");
const nav_menu = document.querySelector(".nav-menu");

dropdown_menu.previousElementSibling.addEventListener("click", () => {
  dropdown_menu.classList.add("show");
  bx_menu.classList.add("hide");
});

dropdown_close.addEventListener("click", () => {
  dropdown_menu.classList.remove("show");
  bx_menu.classList.remove("hide");
});

bx_menu.addEventListener("click", () => {
  nav_menu.classList.toggle("show");

  if (nav_menu.classList.contains("show")) {
    bx_menu.classList.add("bx-x");
  } else {
    bx_menu.classList.remove("bx-x");
  }
});

/* -------------- scroll-up ------------- */

document.addEventListener("DOMContentLoaded", ()=> {
    
  window.addEventListener("scroll",  ()=> {

    if (window.scrollY > 100) {
      document.querySelector(".scroll-up-btn").style.display = "block";
    } else {
      document.querySelector(".scroll-up-btn").style.display = "none";
    }
  });

  document
    .querySelector(".scroll-up-btn")
    .addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

/* -------------- scroll-up ------------- */

/* -------------- NavBar fixed ------------- */

let Nav = document.querySelector(".NavBar");
let lastScrollPos = 0;

window.onscroll = () => {
  if (scrollY < 100) {
    Nav.classList.remove("fixed");
  } else if (scrollY > lastScrollPos) {
    Nav.classList.remove("fixed");
  } else {
    Nav.classList.add("fixed");
  }

  lastScrollPos = scrollY;
  
};
/* -------------- NavBar fixed ------------- */