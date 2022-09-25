
function do16x16Divs() {
  const body = document.querySelector("body");
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("container");

  for (let index = 0; index < 16; index++) {
   
      for (let index = 0; index < 16; index++) {
        const div = document.createElement("div");
        div.classList.add(`innerDiv`);
        mainDiv.appendChild(div);
      }
  }
  body.appendChild(mainDiv);
}
do16x16Divs();
