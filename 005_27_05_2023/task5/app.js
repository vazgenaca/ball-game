const btnContainer = document.querySelector('.btn-container')

const tabs = Array.from(document.querySelectorAll('.tab-btn'));
const contents = Array.from(document.querySelectorAll('.content'));

btnContainer.addEventListener('click', (ev) => {
    tabs.forEach(el => el.classList.remove('active'));
    contents.forEach(el => el.classList.remove('active'));
    // for (let i = 0; i < tabs.length; i++) {
    //     tabs[i].classList.remove('active');
    // }
    ev.target.classList.add('active');
    const activeContainer = contents.find((c) => c.id === ev.target.dataset.id);
    activeContainer.classList.add('active');
});