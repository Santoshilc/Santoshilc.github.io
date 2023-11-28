// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color
function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// Creating a class named ball so that we can have multiple balls as its object and intilizing some of its properties
class Ball {
  constructor(x, y, velocityX, velocityY, color, size) {
    this.x = x;
    this.y = y;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.color = color;
    this.size = size;
  }
  // Creating a method named draw inside the ball class which will draw a ball object using a html canvas function

  drawball() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2* Math.PI);
    ctx.fill();
  }
  // creating update method which will return the ball if the touch the screen width edge.
  update() {
    if ((this.x + this.size) >= width) {
      this.velocityX = -(this.velocityX);
    }
  
    if ((this.x - this.size) <= 0) {
      this.velocityX = -(this.velocityX);
    }
  
    if ((this.y + this.size) >= height) {
      this.velocityY = -(this.velocityY);
    }
  
    if ((this.y - this.size) <= 0) {
      this.velocityY = -(this.velocityY);
    }
  
    this.x += this.velocityX;
    this.y += this.velocityY;
  }
}
