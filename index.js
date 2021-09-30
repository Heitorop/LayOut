/** @format */

new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  loop: true,
});

new Swiper(".swiper1", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  loop: true,
});

const checkBo = document.getElementById("menu__toggle");
const app = document.getElementById("app");
function check() {
  if (checkBo.checked) {
    app.classList.add("over");
    console.log(app);
  } else {
    app.classList.remove("over");
  }
}
check();
checkBo.addEventListener("click", check);
