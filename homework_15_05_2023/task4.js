//HTML-ի մեջ ստեղծել input textInput id-ով։
//CSS-ի մեջ գրել rule-եր որ այն հայտվի էկրանի մեջտեղում։
//HTML-ի մեջ ավելացնել նոր div mytext id-ով։
//Գրել JS, որ input-ի արժեքը փոփոխելուց (onchange) վերցնել input-ի value-ուն և գրել div#mytext-ի մեջ։

const inputElement = document.getElementById('#textInput');
const outputDiv = document.getElementById('#mytext');

inputElement.addEventListener('change', function(event) {
    const changedValue = event.target.value;

    outputDiv.textContent = changedValue;
});

