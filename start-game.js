





function start() {
    const food = new Food();
    const ball = new Ball({
        food,
        color: 'green',
        speed: 20,
        controls: {
            left: 'ArrowLeft',
            right: 'ArrowRight',
            up: 'ArrowUp',
            down: 'ArrowDown',
        }
    });
    const ball2 = new Ball({
        food,
        color: 'blue',
        speed: 30,
        controls: {
            left: 'KeyA',
            right: 'KeyD',
            up: 'KeyW',
            down: 'KeyS',
        }
    });
    
}
