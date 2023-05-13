class Food {
    constructor() {
        this.el = document.createElement('div');
        this.el.classList.add('food');
        const gameContainer = document.querySelector('#gameContainer');
        gameContainer.appendChild(this.el);
        this.initJump();
    }
    jump() {
        this.left = Math.floor(Math.random() * 1000);
        this.top = Math.floor(Math.random() * 800);
        this.el.style.left = this.left + 'px';
        this.el.style.top = this.top  + 'px';
    }
    initJump() {
        this.jump();
        setInterval(() => {
            this.jump();
        }, 5000);
    }
}