const btnAdd = document.querySelector("#addBall");
const btnChange = document.querySelector("#shuffle");

class Ball {
    constructor(size) {
        const ball = document.createElement("div");
        ball.classList.add("circle");
        document.body.appendChild(ball);
        this.size = size || 100;

        this.ball = ball;
        this.ball.style.width = `${size}px`;
        this.ball.style.height =`${size}px`;
        this.changecolor();
        this.jump();
        this.isBigBall = false;

        this.listenMouseEvent();
    }
    changecolor() {
        const colors = ["red","green","pink","black","blue","yellow","violet"];
        let color = Math.round(Math.random() * 6);
        this.ball.style.backgroundColor = colors[color];
    }
    jump() {
        const cord1 = Math.round(Math.random() * 1400);
        const cord2 = Math.round(Math.random() * 650); 
        this.ball.style.left = `${cord1}px`;
        this.ball.style.top = `${cord2}px`;
    }
    changeall() {
        this.changecolor();
        this.jump();
    }
    toggleSize() {
        const biggerSize = this.size * 2;
        const smallerSize = this.size / 2; 
        if (this.isBigBall) {
            this.ball.style.width = `${smallerSize}px`;
            this.ball.style.height =`${smallerSize}px`;
        } else {
            this.ball.style.width = `${biggerSize}px`;
            this.ball.style.height =`${biggerSize}px`;
        }
        this.isBigBall = !this.isBigBall;
    }
    listenMouseEvent() { 
        this.ball.addEventListener('mouseover', () => {
            this.toggleSize();
        });
        this.ball.addEventListener('mouseleave', () => {
            this.toggleSize();
        });
    }
}
class BigBall extends Ball {
    constructor(size) {
        super(200);
        this.isBigBall = true;
    }
}

let arr = [];
let trigger = false;
btnAdd.addEventListener("click", (event) => {
    trigger = !trigger;
    let bal;
    if (trigger) {
        bal = new Ball();
    } else {
        bal = new BigBall();
    }
    arr.push(bal);
});
btnChange.addEventListener("click", (event) => {
    arr.forEach(bal=> {
        bal.changeall();
    });
})

