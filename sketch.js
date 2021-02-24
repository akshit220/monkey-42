var stone,stoneImage; 
var stoneGroup,bananaGroup;
var backImage,backgr;
var player, player_running;
var ground,ground_img;
var score;
var survivalTime=0;

var END =0;
var PLAY =1;
var gameState = PLAY;

function preload(){
  backImage=loadImage("jungle.jpg");
  stoneImage=loadImage("stone.png")
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
  
}

function draw() { 
  background("green");

  if(gameState===PLAY){

 if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  if(stoneGroup.isTouching(player)){
    player.scale=0.2;
  }
  if(ground.x<0){
    ground.x=ground.width/2
  }
  spawnStone();
  spawnBanana();

  if(keyDown("space") && player.y >=250){
    player.velocityY = -11
  }
  if(bananaGroup.isTouching(player)){
    bananaGroup.destroyEach();
    score=score+2;
  } 
  switch(score){
    case 10: player.scale=0.22;
             break;
    case 20: player.scale = 0.24;
             break;
    case 30: player.scale = 0.26;
             break;
    case 40: player.scale = 0.28;
             break;         
  }
  
  //  if(keyDown("space") ) {
    //  player.velocityY = -12;
    //}
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);

  }

  drawSprites();
}
