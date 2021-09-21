const Engine = Matter.Engine;
const World  = Matter.World
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg
var ground;
var snowflake1,snowImg;
var snowflake2,snow2Img
var snowball1,snowball2,snowball3,snowball4,snowball5,snowball6;
var character, characterIMG, character2IMG;

function preload(){

  bg = loadImage("snow1.jpg");
  characterIMG = loadImage("character.png");
  character2IMG = loadImage("character2.png")
  snowImg = loadImage("snow4.webp");
  snow2Img = loadImage("snow5.webp");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,400,width,20);
  
  snowball1 = new Snowball (400,50,10,10);
  snowball2 = new Snowball (400,30,10,10);
  snowball3 = new Snowball (200,60,10,10);
  snowball4 = new Snowball (200,40,10,10);
  snowball5 = new Snowball (700,50,10,10);
  snowball6 = new Snowball (600,45,10,10);

  character = createSprite(440, 250, 50, 50);
  character.addImage(characterIMG);
  character.addImage(character2IMG)
}

function draw() {
  background(bg);  

  Engine.update(engine);

  snowball1.display();
  snowball2.display();
  snowball3.display();
  snowball4.display();
  snowball5.display();
  snowball6.display();

  if(frameCount%30 == 0){

    snowflake();
    character.addImage(characterIMG)
    character.x -= 20
  }
  
  if(frameCount%40 == 0){

    character.addImage(character2IMG)
    character.x -= 10
  }

  if(frameCount%50 == 0){

    snowflake0();
    
  }

  if (character.x === -40){

    character.x = 820

  }
  drawSprites();
}

function snowflake(){
  snowflake1 = createSprite(Math.round(random(30, 770)));
  snowflake1.scale =0.15;
  snowflake1.velocityY = 4
  snowflake1.addImage(snowImg);
  snowflake1.setLifetime=170;
}

function snowflake0(){
  snowflake2 = createSprite(Math.round(random(30, 770)));
  snowflake2.scale =0.13;
  snowflake2.velocityY = 4
  snowflake2.addImage(snow2Img);
  snowflake2.setLifetime=170;
}
