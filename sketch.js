var fixedRect, movingRect;

function setup(){

  createCanvas(400,400);

  fixedRect = createSprite(350,200,40,300);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;
  
  movingRect = createSprite(200,200,100,40);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;

  box1 = createSprite(100,100,50,50);
  box1.velocityX = 3;

  box2 = createSprite(100,300,50,50);
  box2.velocityX = 3;
}

function draw(){
  background("black");
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  //function calling with arguments
  isTouching(movingRect,fixedRect);
 // isTouching(box1,fixedRect)
  isTouching(box2,fixedRect)

  collide(box1,fixedRect)

  bounceOff(box2,fixedRect)

  drawSprites();

}


