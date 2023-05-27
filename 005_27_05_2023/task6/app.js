// numbers should grow starts from 0 up to dataset value

// HINT: example of getting dataset value
const elements = document.querySelectorAll('.number');


Array.from(elements).forEach((element) => {
    let count = 0;
    let speed = 40;
    let lastValue = +element.dataset.value;
    const incTime = lastValue / speed;

    let intervalId = setInterval(() => {
        count += incTime;
        element.innerHTML = Math.floor(count);
        if (count >= +element.dataset.value) {
            element.innerHTML = +element.dataset.value;
            clearInterval(intervalId);
        }
    }, speed);
})


// use setInterval function