function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");
const createBtn = document.querySelector("button[data-create]");

function createBoxes(amount) {

  boxes.replaceChildren();

  const boxesFragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement("div");
    newDiv.style.width = `${30 + i * 10}px`;
    newDiv.style.height = `${30 + i * 10}px`;
    newDiv.style.backgroundColor = getRandomHexColor();

    boxesFragment.appendChild(newDiv);
  }
  boxes.appendChild(boxesFragment);
  input.value = "";
}

createBtn.addEventListener("click", () => {
  const amount = parseInt(input.value);
  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert("Please enter a number between 1 and 100");
    return;
  }
  createBoxes(amount);
});

const destroyBtn = document.querySelector("button[data-destroy]");

function destroyBoxes() {
  boxes.replaceChildren();
}

destroyBtn.addEventListener("click", destroyBoxes);

