
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world;
var hero, monster,rope,ground;
function preload()
{
	backgroundImage = loadImage("gamingBackground2.png");
  
}

function setup() {
	createCanvas(800,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground (600,780,1200,20);
  hero= new Superhero (20,400,250);
  monster = new Monster(750,550,100);
  rope=new Rope(hero.body,{x:200,y:150});

  block1 = new Block(280,350,30,40);  
  block2 = new Block(310,350,30,40);
  block3 = new Block(340,350,30,40);
  block4 = new Block(370,350,30,40);
  block5 = new Block(400,350,30,40);
  block6 = new Block(430,350,30,40);
  block7 = new Block(460,350,30,40);
  block8 = new Block(490,350,30,40);
  block9 = new Block(310,315,30,40);
  block10 = new Block(340,315,30,40);
  block11 = new Block(370,315,30,40);
  block12 = new Block(400,315,30,40);
  block13 = new Block(430,315,30,40);
  block14 = new Block(460,315,30,40);
 
  
  

	Engine.run(engine);
  
}


function draw() {

  background(backgroundImage);
   Engine.update(engine);
  
  
  ground.display();
 
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
  hero.display();
 rope.display();
}
function mouseDragged(){
	Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY});
}




