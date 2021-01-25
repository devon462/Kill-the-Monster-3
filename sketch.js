const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body
const Constraint = Matter.Constraint;

var ground
var hero
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14
var monster
var background,backgroundImage
function preload() {
  backgroundImage = loadImage("images/GamingBackground.png")
}



function setup() {
  createCanvas(1700, 400);


  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500,300,1600,50)
    hero = new Hero(400,3,100,100)
    attach = new Fly(hero.body,{x:200, y: 100})
    block1 = new Block(900, 100,30,40)
    block2 = new Block(900, 100,30,40)
    block3 = new Block(900, 100,30,40)
    block4= new Block(900, 100,30,40)
    block5 = new Block(900, 100,30,40)
    block6 = new Block(900, 100,30,40)
    block7 = new Block(800, 100,30,40)
    block8 = new Block(800, 100,30,40)
    block9 = new Block(800, 100,30,40)
    block10 = new Block(800, 100,30,40)
    block11 = new Block(800, 100,30,40)
    block12 = new Block(800, 100,30,40)
    block13 = new Block(700, 100,30,40)
    block14 = new Block(700, 100,30,40)
    monster = new Monster(1170,200,100,100)

    
    
    
    Engine.run(engine);

}

function draw() {
  rectMode(CENTER)
  background(backgroundImage)
  Engine.update(engine)  

    ground.display();
    hero.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    monster.display();

}

function mouseDragged()
{
    Matter.Body.setPosition(hero.body,{x: mouseX, y: mouseY})
}

