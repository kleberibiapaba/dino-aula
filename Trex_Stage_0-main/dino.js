
var trex ,trex_running, gruponuvens, grupocactos;
var ground ,groundImage, invisibleground;
var loadImage
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
var PLAY = 1;
var END = 0;
var gameState = "PLAY";
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
  score=0
  grupocactos=creategroup();
  gruponuvens=creategroup();
  createCanvas(600,200);
  //crie um sprite de trex
 trex = createSprite(50, 180, 20, 50);
 trex.addAnimation("running", trex_running);
 trex,addAnimation("collided", trex_collieded);
 trex.scale = 0.5;
 ground = createSprite(200, 180, 400, 20);
 ground.addImage("ground",groundImage);
 invisibleGround = createSprite(200,190,400,10);
 invisibleGround.visible = false;
 console.log("setup");
 score = 0;
 trex.setCollider("circle", 0, 0, 40);
 trex.debug=false;
 grupocactos=creategroup();
gruponuvens=creategroup();

}


function draw(){
  background("red");
  text("Pontuação: "+ score,300,50);
  
  drawSprites();

console.log(ground.x); if (ground.x < 0){ ground.x = ground.width/2; }

 
  trex.collide(invisibleGround);
  

  if(gameState===PLAY){nuvens(); cactos() ;
   score = score +Math.round(frameCount/60);
   ground .velocityX=-2;
   trex.velocityY = trex.velocityY + 0.8;
 if(keyDown("space")){ trex.velocityY=-10; } 
 if(grupocactos.isTouching(trex)){
  gameState=END
  }


}
 
else if(gameState===END){
  console.log(END);
  ground.velocityX=0;
  grupocactos.velocityX=0;
  gruponuvens.velocityX=0;
  


  }}
    function nuvens(){
      if(frameCount % 60 ===0){
       var nuvem = createSprite(600, 100, 40, 10);
        nuvem.addImage(nuvemimage);
        nuvem.scale=0.5;
        nuvem.velocityX=-3; 
        nuvem.deph= trex.deph;
        trex.deph= trex.deph+1;
    nuvem.lifetime=250;}
    gruponuvens.add(nuvens)
    function cactos(){
  if(frameCount % 60 ===0){
        var cactos = createSprite(600,100,40,10);
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
grupocactos.add(cactos)
  }
}
