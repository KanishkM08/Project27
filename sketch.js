
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobObject1 = new Bob(400, 400, 20);
	bobObject2 = new Bob(420, 400, 20);
	bobObject3 = new Bob(440, 400, 20);
	bobObject4 = new Bob(460, 400, 20);
	bobObject5 = new Bob(480, 400, 20);
	roof = new Roof(440, 200, 150, 20);
	rope1 = new Rope(bobObject1.body, roof.body, -r*2, 0);
	rope2 = new Rope(bobObject2.body, roof.body, -r*2, 0);
	rope3 = new Rope(bobObject3.body, roof.body, -r*2, 0);
	rope4 = new Rope(bobObject4.body, roof.body, -r*2, 0);
	rope5 = new Rope(bobObject5.body, roof.body, -r*2, 0);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("White");
  

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 }

 function Force(){
	if(keyDown("up")){
		bobObject1.x = 380;
		bobObject1.y = 420;
	}
 }

