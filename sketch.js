const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImg;

function preload() {
	boyImg = loadImage("Project28/boy.png");
}

function setup() {
	createCanvas(7300, 3500);
	boy = createSprite(1100,2500,5,5);
	boy.addImage(boyImg);
	ground = createSprite(width / 2, height - 50, width, 5);
	engine = Engine.create();
	world = engine.world;

	// Create the Bodies Here.
	var options = {
		isStatic : true
	}

	mango = new Mango(6300, 3000);

	stone = new Stone(500,2500);

	ground = new Ground(width / 2, height - 50, width, 5,options);
	
	// tree1 = new Tree(7000,3000,100,100);

	slingshot = new SlingShot(boy.body,stone.body);
	World.add(world,ground);
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255,255,255);
  drawSprites();
//   image(boy);
  stone.display();
  ground.display();
//   tree1.display();
}

// function keyPressed() {
// 	if(keyCode === 32){
// 	  Matter.Body.setPosition(stoneObj.body, {x : 235, y : 420});
// 	  launcherObject.attach(stoneObj.body);
// }
// }

// function detectcollision(lstone,lmango) {
// mangoBody.position = lmango.body.position;
// stoneBody.position = lstone.body.position;

// var distance = dist(stone.position.x,stone.position.y,mangoBody.position.x,mangoBody.position.y)
// if(distance <= lmango.r + lstone.r){
// 	Matter.Body.setStatic(lmango.body,false);
// }
// }
function mouseDragged() {
    Matter.Body.setPosition(stone.body, {x : mouseX,y : mouseY});
}

function mouseReleased() {
    slingshot.fly();
}