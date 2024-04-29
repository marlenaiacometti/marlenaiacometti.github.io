// SETTING UP VOLUME DISPLAY: 

var volume = 50;
displayVolume(volume); 

var audio = document.getElementById("audio");
  audio.volume = volume*0.01;

function displayVolume(volume) {
  const volumeText = document.querySelector("#volume-display"); 
  volumeText.textContent = "Volume: " + volume; 
};


// TRACK MOUSE POSITION: 

var pointerX = 0; 
var pointerY = 0; 

document.addEventListener("mousemove", (e) => {
  pointerX = e.clientX;
  pointerY = e.clientY;
});


// RANDOM NUMBER FUNCTION: 

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// START DISPLAY INTERACTION: 

const btn = document.querySelector("#start-interaction"); 
btn.addEventListener('click', startInteraction); 

function startInteraction() {
  console.log("Volume interaction started");
  const body = document.body;

  const canvas = document.createElement("canvas");
  canvas.setAttribute("class", "displayinteraction");
  body.appendChild(canvas);

  const ctx = canvas.getContext("2d");

  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);

  
  // BALL CLASS: 

  class Ball {
    constructor(x, y, velX, velY, color, size){
      this.x = x;
      this.y = y; 
      this.velX = velX; 
      this.velY = velY; 
      this.color = color; 
      this.size = size;
    }
  
    draw() {
      if(this.color == "#F8EEBF"){
        this.x = pointerX;
        this.y = pointerY;
      }
      
      ctx.beginPath(); 
      ctx.fillStyle = this.color; 
      ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI); 
      ctx.fill();
    }
  
    update() {
      if(this.color != "#F8EEBF"){
        if(this.velX == 0 && this.velY == 0) {
          this.velX = random(-10, 10); 
          this.velY = random(-10, 10);
        }
      }

      if ((this.x + this.size) >= width){
        this.velX = -(this.velX); 
      }
      if ((this.x - this.size) <= 0){
        this.velX = -(this.velX); 
      }
      if ((this.y + this.size) >= height){
        this.velY = -(this.velY); 
      }
      if ((this.y - this.size) <= 0){
        this.velY = -(this.velY); 
      }

      this.x += this.velX; 
      this.y += this.velY; 
    }

    collisionDetect() {
      for (const ball of balls) {
        if (this !== ball) {
          if(ball.color == "#F8EEBF"){
            const dx = this.x - ball.x; 
            const dy = this.y - ball.y; 
            const distance = Math.sqrt(dx*dx + dy*dy)
    
            if (distance < this.size + ball.size) {
              this.velX = -(this.velX); 
              ball.velX = -(ball.velX);
              this.velY = -(this.velY); 
              ball.velY = -(ball.velY);

              // IMPACT VOLUME WITH COLLISION: 

              var posOrNeg = Math.round(Math.random()) * 2 - 1; 

              volume += this.size*posOrNeg;

              if (volume < 0) {
                volume = 0;
              } else if (volume > 100) {
                volume = 100;
              };

              console.log("Volume changed to " + volume)
              displayVolume(volume);
            }
          }
        }
      }
    }
  }

  // CREATE BALLS: 

  const balls = [];
  
  while (balls.length < 15) {
    const size = random(1, 25); 
    const ball = new Ball(
      random(size, width - size), 
      random(size, height - size), 
      random(-10, 10), 
      random(-10, 10), 
      "#F2C55C", 
      size,
    );
  
    balls.push(ball);  
  }
  
  if (balls.length = 15) { 
    const pointerBall = new Ball(
      pointerX,
      pointerY, 
      0, 
      0, 
      "#F8EEBF", 
      15,
    );
  
    balls.push(pointerBall);  
  }
  
  function loop() {
    ctx.fillStyle = "#202D36"; 
    ctx.fillRect(0, 0, width, height); 
  
    for (const ball of balls) {
      ball.draw();
      ball.update();
      ball.collisionDetect();
    }
  
    requestAnimationFrame(loop);
  }
  
  loop(); 


  // CLOSING DISPLAY INTERACTION: 

  function closeDisplay() {
    console.log("Volume interaction ended");
    canvas.parentNode.removeChild(canvas);
    closeBtn.parentNode.removeChild(closeBtn); 

    while (balls.length > 0) {
      console.log("pop");
      balls.pop();
    }
  }

  const closeBtn = document.createElement("button");
  closeBtn.setAttribute("class", "closeBtn");
  closeBtn.textContent = "x";
  body.appendChild(closeBtn);

  closeBtn.addEventListener("click", closeDisplay)

  canvas.style.backgroundColor = "#202D36";
}