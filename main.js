const btn = document.getElementById("burger-btn");
const menu = document.querySelector(".header__mobile-menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  menu.classList.toggle("active");
});
