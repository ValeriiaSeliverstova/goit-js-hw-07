function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  colorSpan.textContent = getRandomHexColor();
  document.body.style.backgroundColor = colorSpan.textContent;
});
