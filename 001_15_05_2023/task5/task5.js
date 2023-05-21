//HTML-ի մեջ ստեղծել button myBtn id-ով։
//JS-ի մեջ գրել որ ամեն անգամ button սեղմելուց (onclick) HTML-ի մեջ ավելանա նոր h4 element. 
//h4-ի մեջ գրված լինի element-ի հերտական համարը։ (1, 2, 3, 4, 5, ...)

const addButton = document.getElementById('myBtn');
let elementCounter = 0;

addButton.addEventListener('click', function() {
  elementCounter++;
  const newH4 = document.createElement('h4');
  newH4.innerText = elementCounter;
  document.body.appendChild(newH4);
});
