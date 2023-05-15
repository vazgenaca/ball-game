// Circle class
class Circle {
    constructor() {
      this.color = this.getRandomColor();
      this.position = this.getRandomPosition();
      this.createCircleElement();
    }
  
    getRandomColor() {
      const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    }
  
    getRandomPosition() {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const x = Math.floor(Math.random() * screenWidth);
      const y = Math.floor(Math.random() * screenHeight);
      return { x, y };
    }
  
    createCircleElement() {
      const circleDiv = document.createElement('div');
      circleDiv.className = 'circle';
      circleDiv.style.backgroundColor = this.color;
      circleDiv.style.left = this.position.x + 'px';
      circleDiv.style.top = this.position.y + 'px';
      circleDiv.addEventListener('mouseover', () => {
        circleDiv.remove();
      });
      document.body.appendChild(circleDiv);
    }
  }
  
  // Add Circle button event listener
  const addCircleButton = document.getElementById('addCircle');
  addCircleButton.addEventListener('click', function() {
    new Circle();
  });
  