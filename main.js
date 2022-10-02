const body = document.querySelector("body");
const mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "mainDiv");
mainDiv.classList.add("container");

const btn = document.createElement("button");
btn.setAttribute("id", "ask");
btn.classList.add("askBtn");
btn.textContent = "Number of squares";
let answer = 16;
let numOfSquares = (960 / answer);
let div;

drawDivs(numOfSquares);

body.appendChild(btn);
body.appendChild(mainDiv);

function drawDivs(num) {
  for (let i = 0; i < answer; i++) {
    for (let j = 0; j < answer; j++) {
      div = document.createElement("div");
      div.setAttribute("id", "theDiv");
      div.classList.add("innerDiv");
      div.style.cssText = `width: ${num}px; height: ${num}px;`;
      mainDiv.appendChild(div);
    }
  }
}

function paint() {
  const divReference = document.querySelectorAll("#theDiv");
  divReference.forEach((div) => {
    div.addEventListener("mouseenter", () => {
      div.classList.add("paintBlack");
    });
  });
}
paint();

function reset() {
  let element = document.querySelectorAll("#theDiv");
  element.forEach((node) => {
    mainDiv.removeChild(node);
  });
}

btn.addEventListener("click", (e) => {
  answer = Number.parseInt(
    prompt("Enter the number of squares (maximum 100)", 16)
  );

  numOfSquares = (960 / answer);
  reset();
  drawDivs(numOfSquares);
  paint();
});
