








const inputElement = document.querySelector('#textInput');
const outputDiv = document.getElementById('mytext');


inputElement.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        inputElement.value = '';
    } else {
        const changedValue = event.target.value;
        outputDiv.textContent = changedValue;
    }
});

