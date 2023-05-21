class Circle {
    constructor() {
        const circlel = document.createElement("div");
        circlel.classList.add("circle");
        let col = Math.round(Math.random() * 3);
        const colors = ["red","green","pink","blue"];
        circlel.style.background = colors[col];
        // generate place
        const top = Math.round(Math.random() * window.screen.availHeight);
        const left = Math.round(Math.random() * window.screen.availWidth);

        circlel.style.left = `${left}px`;
        circlel.style.top = `${top}px`;

        document.body.appendChild(circlel);
        circlel.addEventListener("mouseover", (event) => {
            circlel.remove();
        })
    }           
}
const a = document.querySelector("#addCircle")
a.addEventListener("click", () => {
    new Circle();
});

