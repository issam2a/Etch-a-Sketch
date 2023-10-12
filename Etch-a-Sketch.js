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
createGridDivs();

function setDivStyle() {
  let items = document.querySelectorAll(".innerDiv");
  items.forEach((item) => {
    item.style.setProperty("--num-Div", gridSize);
    // changing the background when  hovering  over the div
    item.addEventListener("mouseenter", () => {
      item.style.setProperty("background-color", "red");
    });
  });
}
setDivStyle();
function removeInnerDivs() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

userInput.addEventListener(`input`, (e) => {
  console.log(e.target.value);
  removeInnerDivs();
  gridSize = e.target.value;
  divNum = Math.pow(gridSize, 2);
  createGridDivs();
  setDivStyle();
  showUserInput.textContent = `Grid size : ${gridSize}x${gridSize}`;
});
let colorContainer = document.querySelector(".themeColorContainer");
let switchBtn = document.querySelector(".switcherBtn");
switchBtn.addEventListener("click", () => {
  colorContainer.classList.toggle("show");
});
