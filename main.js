const body = document.querySelector("body");
const mainDiv = document.createElement("div");
mainDiv.classList.add("container");
body.appendChild(mainDiv);

for (let index = 0; index < 16; index++) {
  for (let j = 0; j < 16; j++) {
    const div = document.createElement("div");
    div.setAttribute("id", "theDiv");
    div.classList.add("innerDiv");
    mainDiv.appendChild(div);
  }
}

const divReference = document.querySelectorAll('#theDiv');
divReference.forEach((div) => {
    div.addEventListener('mouseenter', () => {
        div.classList.add('paintBlack');
    });    
});



