//HTML-ի մեջ ստեղծել div circle կլասսով։
//CSS-ի մեջ circle կլասի համար ավելացնել rule-եր որ էլեմենտը լինի կլոր և կապույտ գույնի։
//CSS-ի մեջ ավելացնել rule-եր որ էլեմենտը լինի էկրանի մեջտեղում։
// Գրել JS երբ որ mouse-ը circle վրա է (mouseover) circle-ը գույնը փոխի կանաչ։

const circle = document.querySelector(".circle");


circle.addEventListener("mouseover", function () {
  circle.style.backgroundColor = "green";
});

circle.addEventListener("mouseleave", function () {
  circle.style.backgroundColor = "blue";
});

let vikluchatel = true;
circle.addEventListener("click", function () {
  if (vikluchatel) {
    circle.classList.add('clicked')
  } else {
    circle.classList.remove('clicked')
  }
  vikluchatel = !vikluchatel;
});
