const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
console.log(ctx);

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);
const spriteWidth = 575;
const spriteHeight = 523;

let xframe = 0;
let yframe = 3;
let staggerFrame = 4;
gameFrame = 0;

const playerImage = new Image();
playerImage.src = "assets/shadow_dog.png";
let x = 0;

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(
    playerImage,
    xframe * spriteWidth,
    yframe * spriteHeight,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );
  gameFrame++;
  if (gameFrame % staggerFrame == 0) {
    if (xframe < 6) xframe++;
    else xframe = 0;
  }

  requestAnimationFrame(animate);
}

animate();
