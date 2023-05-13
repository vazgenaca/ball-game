










const player1Input = document.querySelector('#player1');
const player2Input = document.querySelector('#player2');
const startBtn = document.querySelector('#start');
const playerParamsEl = document.querySelector('#playerParams')

startBtn.addEventListener('click', function() {
    const player1Name = player1Input.value;
    const player2Name = player2Input.value;

    if (player1Name && player2Name) {
        playerParamsEl.remove();
        start();
    } else {
        alert('Please feel inputs');
    }
});



