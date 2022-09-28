const body = document.querySelector("body");
const mainDiv = document.createElement("div");
mainDiv.classList.add("container");

const btn = document.createElement('button')
btn.setAttribute('id', 'ask')
btn.classList.add('askBtn')
btn.textContent = 'Number of squares '
let numOfSquares;

body.appendChild(btn)
btn.addEventListener('click', e => {
  numOfSquares = Number.parseInt(prompt('Enter the number of squares (maximum 100)'))
  console.log(typeof numOfSquares, numOfSquares);
  drawDivs(numOfSquares)
});

function drawDivs(num) {
  for (let index = 0; index < numOfSquares; index++) {
  
    for (let j = 0; j < numOfSquares; j++) {
      const div = document.createElement("div");
      div.setAttribute("id", "theDiv");
      div.classList.add("innerDiv");
      mainDiv.appendChild(div);
    }
    // const nextLine = document.createElement('br');
    // mainDiv.appendChild(nextLine)


  
  }
  body.appendChild(mainDiv);

  
}




const divReference = document.querySelectorAll('#theDiv');
divReference.forEach((div) => {
    div.addEventListener('mouseenter', () => {
        div.classList.add('paintBlack');
    });    
});



