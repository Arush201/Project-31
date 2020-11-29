const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  createSprite(400, 200, 50, 50);
  ground = new Ground(200,790,200,20)
  
  Engine.run(engine);
}

function draw() {
  background(0);  
  ground.display()

  drawSprites();
}