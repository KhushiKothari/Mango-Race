
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.constrait;

var boy, boyimg;
function preload()
{
boyimg = loadImage("boy.png")
}

function setup() {
	createCanvas(1350, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone (200, 300, 20, 20);
	ground = new Ground(675, 600, 1350, 10);

	boy = createSprite(200, 530, 30, 100)
	boy.addImage(boyimg);

	slingshot = new Slingshot(stone.body, {x: 200, y: 100})
	boy.scale = 0.1;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  stone.display();
  ground.display();
  drawSprites();

 
}



