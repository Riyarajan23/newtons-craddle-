
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(570,250,230,20)
ball1=new Ball(510,450,20)
rope=new Rope(ball1.body,ground.body,-80,0)
ball2=new Ball(550,450,20)
rope2=new Rope(ball2.body,ground.body,-30,0)
ball3=new Ball(570,450,20)
rope3=new Rope(ball3.body,ground.body,10,0)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 ground.display();
 rope.display();
 ball1.display();
 rope3.display();
 ball2.display();
 rope2.display();
 ball3.display();

}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-10,y:10})
	}

}

