var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
 fixedRect=createSprite(500, 200, 50, 60);
 movingRect=createSprite(300, 100, 70, 60);
 ironman=createSprite(200,300,80,90)
}

function draw() {
  background("yellow");
  
  movingRect.x = mouseX
  movingRect.y = mouseY

  if (isTouching(movingRect,ironman)){
movingRect.shapeColor=("green")
ironman.shapeColor=("green")

  } else {
    movingRect.shapeColor=("white")
    ironman.shapeColor=("white")

  }

  
  drawSprites();
}




