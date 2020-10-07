var object1,object2,object3,object4;
function setup() {
  createCanvas(800,400);


object1=createSprite(100,100,50,50);
object2=createSprite(200,100,50,50);
object3=createSprite(300,100,50,50);
object4=createSprite(400,100,50,50);
  movingRect = createSprite(200,200,80,30);
  fixedRect = createSprite(400, 200, 50, 80);
  // movingRect.velocityX=5;
//  movingRect.velocityY=0.5;
}

function draw() {
  background(255,255,255); 
 movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green"; 
  movingRect.x = mouseX;
  movingRect.y = mouseY;

if(isTouching(movingRect, fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
};if(isTouching(movingRect, object1)){
  movingRect.shapeColor = "red";
  object1.shapeColor = "red";
};
if(isTouching(movingRect, object2)){
  movingRect.shapeColor = "red";
  object2.shapeColor = "red";
};if(isTouching(movingRect, object3)){
  movingRect.shapeColor = "red";
  object3.shapeColor = "red";
};if(isTouching(movingRect, object4)){
  movingRect.shapeColor = "red";
  object4.shapeColor = "red";
};


bounceoff(movingRect,fixedRect);

  drawSprites();
}

