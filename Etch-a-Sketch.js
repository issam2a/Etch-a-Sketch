let container = document.querySelector(".container");
let userInput = document.querySelector('input[type="range"]');
let fragment = document.createDocumentFragment();
let gridSize = 16;
let divNum = Math.pow(gridSize, 2);
let showUserInput = document.querySelector(".label");
showUserInput.textContent = `Grid size : ${gridSize}x${gridSize}`;

let root = document.documentElement;

let isMouseDown = false;
let span = document.querySelectorAll(".themeBtn");
function createGridDivs() {
  for (let i = 0; i < divNum; i++) {
    let innerDiv = document.createElement("div");
    innerDiv.classList.add("innerDiv");
    innerDiv.addEventListener("dragstart", function (event) {
      event.preventDefault();
    });

    fragment.appendChild(innerDiv);
  }

  container.appendChild(fragment);
}
createGridDivs();

function setDivStyle() {
  let items = document.querySelectorAll(".innerDiv");
  items.forEach((item) => {
    item.style.setProperty("--num-Div", gridSize);

    item.addEventListener("mousedown", () => {
      isMouseDown = true;
    });
    item.addEventListener("mouseup", () => {
      isMouseDown = false;
    });

    item.addEventListener("mousemove", () => {
      if (isMouseDown) {
        item.classList.add("draw");
      }
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
  showUserInput.textContent = `Grid size : ${gridSize}x${gridSize}`;
  setDivStyle();
});
let colorContainer = document.querySelector(".themeColorContainer");
let switchBtn = document.querySelector(".switcherBtn");
switchBtn.addEventListener("click", () => {
  colorContainer.classList.toggle("show");
});

let clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
  pen.classList.add("btnActive");
  eraserBtn.classList.remove("btnActive");
  let items = document.querySelectorAll(".innerDiv");
  items.forEach((item) => {
    item.style.setProperty("background-color", "");
  });
  setDivStyle();
});

let eraserBtn = document.querySelector(".eraser");
eraserBtn.addEventListener("click", () => {
  pen.classList.remove("btnActive");
  eraserBtn.classList.add("btnActive");
  let items = document.querySelectorAll(".innerDiv");
  items.forEach((item) => {
    item.addEventListener("mousedown", () => {
      isMouseDown = true;
    });
    item.addEventListener("mouseup", () => {
      isMouseDown = false;
    });

    item.addEventListener("mousemove", () => {
      if (isMouseDown) {
        item.style.setProperty("background-color", "");
      }
    });
  });
});

let pen = document.querySelector(".pen");
pen.addEventListener("click", () => {
  pen.classList.add("btnActive");
  eraserBtn.classList.remove("btnActive");
  setDivStyle();
});

let colorSelector = document.querySelectorAll(".themeBtn");
colorSelector.forEach((item) => {
  let itemColor = item.getAttribute("data-color");
  item.addEventListener("click", () => {
    console.log(itemColor);

    root.style.setProperty("--main-color", itemColor);
  });
});
