let container = document.querySelector(".container");
let userInput = document.querySelector('input[type="range"]');
let fragment = document.createDocumentFragment();
let gridSize = 16;
let divNum = Math.pow(gridSize, 2);
let showUserInput = document.querySelector(".label");
showUserInput.textContent = `Grid size : ${gridSize}x${gridSize}`;

function createGridDivs() {
  for (let i = 0; i < divNum; i++) {
    let innerDiv = document.createElement("div");
    innerDiv.classList.add("innerDiv");

    fragment.appendChild(innerDiv);
  }

  container.appendChild(fragment);
}
