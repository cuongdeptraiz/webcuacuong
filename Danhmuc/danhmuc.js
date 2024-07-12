const clickAngleup = document.querySelector(".angle-up");
clickAngleup.addEventListener("click", function () {
  document.querySelector(".section-content-list").style.display = "none";
  document.querySelector(".angle-up").style.display = "none";
  document.querySelector(".angle-down").style.display = "block";
});
const clickAngledown = document.querySelector(".angle-down");
clickAngledown.addEventListener("click", function () {
  document.querySelector(".section-content-list").style.display = "block";
  document.querySelector(".angle-up").style.display = "block";
  document.querySelector(".angle-down").style.display = "none";
});
