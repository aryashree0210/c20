
//isTouching algorithm 
var fixedrect, movingRect;

function setup() {
  createCanvas(800,400);
 movingRect = createSprite(400, 200, 50, 30);
 fixedRect = createSprite(600,200,30,50);
 // 50/2 = 25
 //30/2 = 15
 //25 + 15 = 40

 movingRect.shapeColor = "green";
 fixedRect.shapeColor = "green";
  
}

function draw() {
  background(255,255,255);  

  movingRect.x = mouseX;
  movingRect.y=mouseY;


  console.log(movingRect.x - fixedRect.x);


  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 && 
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}