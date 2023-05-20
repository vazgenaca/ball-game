let button = document.querySelector("#changeRed");
let squares = document.querySelectorAll(".square");


let clc = true;
button.addEventListener("click", (event) => {
  for (let a = 0; a < squares.length; a++) {
    if (a % 2 === 1) {
      squares[a].style.backgroundColor = "blue";
    }

        if (clc) {
            if (a % 2 === 0) {
                squares[a].style.left = `${1400}px`;
            } else {
                squares[a].style.left = 0;
            }
        }  else {
            if (a % 2 === 0) {
                squares[a].style.left = 0;
            } else {
                squares[a].style.left = `${1400}px`;
            }
        }
  }
  clc = !clc;
});
