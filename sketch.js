const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine, world;
var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;
var block9;
var flag;



function setup() {
  var canvas = createCanvas(1600,757);
  
  engine = Engine.create();
  world = engine.world;

  block1 =  new Box (560,600,220,300);
  block2 =  new Box (1060,600,220,300);
  block3 =  new Box (808,430,900,120);
  block4 =  new Box (418,300,120,140);
  block5 =  new Box (658,300,120,140);
  block6 =  new Box (958,300,120,140);
  block7 =  new Box (1198,300,120,140);
  block8 =  new Box (798,215,10,310);
  block9 =  new Box (798,60,20,20);
  flag =  new Flag (852.5,96,100,50);
  
  
  

}

function draw() {
  background("black"); 

  Engine.update(engine);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  flag.display();
  







  drawSprites();
}