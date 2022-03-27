var jake, path;
function preload(){
  //pre-load images
  jake_running = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png");
  path_portrait_running = loadImage("path.png");
}

function setup(){
  createCanvas(600,400);
  //create sprites here
  path = createSprite(400,40);
  path.addImage(path_portrait_running);
  jake = createSprite(350,350,25,25);
  jake.addAnimation("running",jake_running);
  
 
    
}

function draw() {
  background("black");
  path.velocityY = 20;
  if (path.y<0){
   
    path.y=path.height/2;
    }
drawSprites();
}
