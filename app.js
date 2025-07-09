const ham = document.querySelector(".ham");
const menu = document.querySelector(".menu");
const icon = ham.querySelector("i");
ham.addEventListener("click", function () {
  ham.classList.toggle("active");
  menu.classList.toggle("on");
  //toggle icon
  if (ham.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  }
});
