var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b1;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 670, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	b1 = new Box(395,645,200,20);
	b2 = new Box(295,605,20,100);
	b3 = new Box(495,605,20,100);

	Engine.run(engine);  
}


function draw() {
	Engine.update(engine);
	rectMode(CENTER);
	background(0);

	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 

	b1.display();
	b2.display();
	b3.display();
	keyPressed();
	drawSprites();
}

function keyPressed() {
 if (keyDown(DOWN_ARROW)) {
	Matter.Body.setStatic(packageBody, false);
  }
}


