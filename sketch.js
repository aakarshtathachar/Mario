var mario;
var mushroom;
var block;
var ground;
var background1;


function preload()
{
  marioimg = loadImage("images/mario.png");
  jumpingmario = loadImage("images/mariojumping.png");
  mushroomimg = loadImage("images/mushroom.png");
  blockimg = loadImage("images/block.png");
  tunnelimg = loadImage("images/tunnel.png");
  background1img = loadImage("images/background.png");
  mysteryboximg = loadImage("images/mysterybox.png");
  groundimg = loadImage("images/ground.png");
  block2img = loadImage("images/block2.png");
  block3img = loadImage("images/block3.png");
  asdfimg = loadImage("images/asdg.png");
  backwardsmarioimg = loadImage("images/backwardsmario.png");
  background2img = loadImage("images/backgroundnewworld.png");
  coinimg = loadImage("images/coin.png");

}

function setup() {
  createCanvas(800, 500);
  background1 = createSprite(400,250,10,10)
  background1.addImage(background1img);
  background1.scale = 1.3;
  mario = createSprite(200,350,40,40);
  mario.addImage(marioimg);
  mario.scale=0.05
  

  ground = createSprite(400,460,800,20)
  ground.addImage(groundimg);
  ground.x = ground.width/2;
  ground.scale = 1.5
  ground.velocityX = -4

  obstaclesGroup = new Group();
  tunnelGroup = new Group();
  //ground.addImage(blockimg);
}


function draw() { 
  background(0);

  if(keyDown(UP_ARROW)){
    mario.velocityY = -10; 
    mario.addImage(jumpingmario);
  }


  else{
    mario.addImage(marioimg);
  }

  if(ground.x<0){
    ground.x = ground.width/2
  }

  if(keyDown(RIGHT_ARROW)){
    mario.x = mario.x+5;
    mario.addImage(jumpingmario);
  }

  if(keyDown(LEFT_ARROW)){
    mario.x = mario.x-5;
    mario.addImage(backwardsmarioimg);
  }
  


  

mario.velocityY = mario.velocityY+0.8;
spawnTunnels();
spawnObstacles();
mario.collide(ground)

if(mario.isTouching(obstaclesGroup)){
  newWorld();
}


  drawSprites();
  //add styles here

}

function spawnTunnels(){
  if(frameCount % 320 === 0){
    var tunnel = createSprite(750,370,10,40);
    tunnel.velocityX = -4;

    tunnel.addImage(tunnelimg)
    tunnel.scale = 0.15

    tunnelGroup.add(tunnel);
  }

}

function spawnObstacles(){
  var vrand = Math.round(random(150,200));
  if(frameCount % vrand === 0){
  var obstacle = createSprite(750,250,10,10)
  obstacle.velocityX = -4
  var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: obstacle.addImage(block2img);
              break;
      case 2: obstacle.addImage(mysteryboximg);
              break;
      case 3: obstacle.addImage(blockimg);
              break;
      case 4: obstacle.addImage(block3img);
             break        
              
      default: break;
    }
  
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.03;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
  }

  function newWorld(){
background1.addImage(background2img);

//if(frameCount % 50 ===0){
  var coins = createSprite(750,250,10,10);
  coins.addImage(coinimg);
  console.log("newWorld");

  coins.scale = 0.1
  ground.velocityX = 0;
  obstaclesGroup.setVelocityXEach(0)
  tunnelGroup.setVelocityXEach(0)

//}


obstaclesGroup.destroyEach();


  }











