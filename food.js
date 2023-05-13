class Food {
    constructor() {
        this.el = document.createElement('div');
        this.el.classList.add('food');
        const gameContainer = document.querySelector('#gameContainer');
        gameContainer.appendChild(this.el);
        this.initJump();
    }
    jump() {
        this.el.style.left = Math.floor(Math.random() * 1000) + 'px';
        this.el.style.top = Math.floor(Math.random() * 800) + 'px';
    }
    initJump() {
        this.jump();
        setInterval(() => {
            this.jump();
        }, 5000);
    }
}