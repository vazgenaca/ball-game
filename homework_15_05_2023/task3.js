//HTML-ի մեջ ստեղծել div circle կլասսով։ 
//CSS-ի մեջ circle կլասի համար ավելացնել rule-եր որ էլեմենտը լինի կլոր և կապույտ գույնի։
//CSS-ի մեջ ավելացնել rule-եր որ էլեմենտը լինի էկրանի մեջտեղում։
// Գրել JS երբ որ mouse-ը circle վրա է (mouseover) circle-ը գույնը փոխի կանաչ։

const change = document.querySelector('.circle');
let clicks = 0;

change.addEventListener('mouseover', function() {
    change.style.backgroundColor = 'green';
})
    
change.addEventListener('mouseleave', function() {
    change.style.backgroundColor = 'blue';
})

change.addEventListener('click', function() {
    clicks++;
    change.classList.toggle('clicked');
    if (clicks === 1) {
      circle.classList.add('clicked');
    } else if (clicks === 2) {
      circle.classList.remove('clicked');
      clicks = 0;
    }
  });
