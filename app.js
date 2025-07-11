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
function showHouseInfo(house) {
  const info = {
    Gryffindor:
      "Gryfindor terkenal dengan keberanian, tekad, dan semangat juang",
    Ravenclaw:
      "Ravenclaw menghargai kebijaksanaan, kreatifitas, dan kecerdasan",
    Hufflepuf: "Hufflepuf mennjunjung kesetiaan, keadilan, dan kerja keras",
    Slytherin: "Slytherin dikenal dengan ambisi, kepemimpinan, dan kecerdikan",
  };
  document.getElementById("house-info").textContent = info[house];
}
