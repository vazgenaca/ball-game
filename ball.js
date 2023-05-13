






class Ball {
    constructor(obj) {
        this.food = obj.food;
        const ballEl = document.createElement('div');
        ballEl.classList.add('ball');
        ballEl.style.background = obj.color;
        const gameCotainer = document.querySelector('#gameContainer');
        gameCotainer.appendChild(ballEl);
        this.initListeners();
        this.ballEl = ballEl;
        this.top = 0;
        this.left = 0;
        this.speed = obj.speed;
        this.controls = obj.controls;
    }
    moveRight() {
        if (this.left >= 900) {
            return;
        }
        this.left += this.speed;
        this.ballEl.style.left = `${this.left}px`;
    }
    moveLeft() {
        if (this.left <= 0) {
            return;
        }
        this.left -= this.speed;
        this.ballEl.style.left = `${this.left}px`;
    }
    moveDown() {
        if (this.top >= 700) {
            return;
        }
        this.top += this.speed;
        this.ballEl.style.top = `${this.top}px`;
    }
    moveUp() {
        if (this.top <= 0) {
            return;
        }
        this.top -= this.speed;
        this.ballEl.style.top = `${this.top}px`;
    }
    initListeners() {
        document.addEventListener('keydown', (event) => {
            switch (event.code) {
                case this.controls.left:
                    this.moveLeft();
                    break;
                case this.controls.right:
                    this.moveRight();
                    break;
                case this.controls.up:
                    this.moveUp();
                    break;
                case this.controls.down:
                    this.moveDown();
                    break;
                default:
            }
            console.log(this.food.left, this.food.top);
        });
    }
}


