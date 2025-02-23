const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  nameOutput.textContent = event.target.value.trim() || "Anonymous";
});

nameInput.classList.add('name-input');
const header = document.querySelector("h1");
header.classList.add('header');