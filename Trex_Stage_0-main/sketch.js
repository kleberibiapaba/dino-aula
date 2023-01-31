
var trex ,trex_running;
var ground ,groundImage, invisibleground;
var loadImage
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
function preload(){
nuvemimage = loadImage ("cloud.png");
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
 groundImage = loadImage("ground2.png");
 obstacle1 = loadImage("obstacle1.png");
 obstacle2 = loadImage("obstacle2.png");
 obstacle3= loadImage("obstacle3.png");
obstacle4= loadImage("obstacle4.png");
obstacle5= loadImage("obstacle5.png");
obstacle6= loadImage("obstacle6.png");}
function setup(){
  createCanvas(600,200);
  //crie um sprite de trex
 trex = createSprite(50, 180, 20, 50);
 trex.addAnimation("running", trex_running);
 trex.scale = 0.5;
 ground = createSprite(200, 180, 400, 20);
 ground.addImage("ground",groundImage);
 invisibleGround = createSprite(200,190,400,10);
 invisibleGround.visible = false;


}


function draw(){
  background("red");
  drawSprites();
ground .velocityX=-2;
console.log(ground.x); if (ground.x < 0){ ground.x = ground.width/2; }
if(keyDown("space")){ trex.velocityY=-10; }
 trex.velocityY = trex.velocityY + 0.8;
  trex.collide(invisibleGround);

  

  nuvens();}
    function nuvens(){
      
        nuvem.scale=0.5;
        nuvem.velocityX=-3; 
        nuvem.deph= trex.deph;
        trex.deph= trex.deph+1;
    nuvem.lifetime=250;}
    function cactos(){
  if(frameCount % 60 ===0){
        cactos = createSprite(600,100,40,10);
        cactos.velocityX=-5;
        var rand = Math.round(random(1,6));
        switch(rand){
case 1: cactos.addImage(obstacle1); break;
case 2: cactos.addImage(obstacle2); break;
case 3: cactos.addImage(obstacle3); break;
case 4: cactos.addImage(obstacle4); break;
case 5: cactos.addImage(obstacle5); break;
case 6: cactos.addImage(obstacle6); break;
default:break;
}
cactos.scale=0.5;
cactos.lifetime=250;
  }
}