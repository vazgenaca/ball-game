const btn = document.querySelector('.btn');
const cols = document.querySelectorAll('.col');
let col1 = cols[0];
let col2 = cols[1];
btn.addEventListener('click', () => {
    col1.classList.remove('bg-primary')
    col1.classList.add('bg-secondary')
    col2.classList.remove('bg-secondary')
    col2.classList.add('bg-primary')
    let tmp = col1;
    col1 = col2;
    col2 = tmp;
});
