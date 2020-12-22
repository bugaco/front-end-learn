// 设置画布

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

const ballsCount = document.querySelector('p')

// 生成随机数的函数

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

function randomColor() {
  return 'rgb(' +
    random(0, 255) + ', ' +
    random(0, 255) + ', ' +
    random(0, 255) + ')';
}

function Shape(x, y, velX, velY, exists) {
  this.x = x
  this.y = y
  this.velX = velX
  this.velY = velY
  this.exists = exists


}

function Ball(x, y, velX, velY, exists, color, size) {
  Shape.call(this, x, y, velX, velY, exists)
  this.color = color
  this.size = size
}

Ball.prototype.draw = function() {
  ctx.beginPath()
  ctx.fillStyle = this.color
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
  ctx.fill()
}

Ball.prototype.update = function () {
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
}

Ball.prototype.collisionDectect = function () {
  for (let j = 0; j < balls.length; j++) {
    if (this !== balls[j]) {
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = randomColor();
      }
    }
  }
}

/* EvilCircle */

function EvilCircle(x, y, exists) {
  Shape.call(this, x, y, 20, 20, exists)
  this.color = 'white'
  this.size = 10
}

EvilCircle.prototype = Object.create(Shape.prototype);
EvilCircle.prototype.constructor = EvilCircle;

EvilCircle.prototype.draw = function () {
  ctx.beginPath()
  ctx.lineWidth = 3
  ctx.strokeStyle = this.color
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
  ctx.stroke()
}

EvilCircle.prototype.checkBounds = function () {
  if ((this.x + this.size) >= width) {
    this.x -= this.size
  }

  if ((this.x - this.size) <= 0) {
    this.x += this.size
  }

  if ((this.y + this.size) >= height) {
    this.y -= this.size
  }

  if ((this.y - this.size) <= 0) {
    this.y += this.size
  }
}

EvilCircle.prototype.setControls = function () {
  let _this = this;
  window.onkeydown = function (e) {
    if (e.key === 'a') {
      _this.x -= _this.velX;
    } else if (e.key === 'd') {
      _this.x += _this.velX;
    } else if (e.key === 'w') {
      _this.y -= _this.velY;
    } else if (e.key === 's') {
      _this.y += _this.velY;
    }
  }
}

EvilCircle.prototype.collisionDectect = function () {
  for (let j = 0; j < balls.length; j++) {
    if (balls[j].exists) {


      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].exists = false
      }
    }
  }
}

let balls = []
while (balls.length < 25) {
  let size = random(10, 20)
  let ball = new Ball(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    true,
    randomColor(),
    size)
  balls.push(ball)
}

const evilCircle = new EvilCircle(100, 100, true)
evilCircle.setControls()

function calculateBallsCount() {
  var count = 0
  balls.forEach(ball => {
    if (ball.exists) {
      count += 1
    }
  });
  return count
}

function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'
  ctx.fillRect(0, 0, width, height)

  balls.forEach(ball => {
    if (ball.exists) {
      ball.draw()
      ball.update()
      ball.collisionDectect()
    }
  });

  ballsCount.textContent = 'balls count: ' + calculateBallsCount()d

  evilCircle.draw()
  evilCircle.checkBounds()
  evilCircle.collisionDectect()
  requestAnimationFrame(loop)
}

loop()