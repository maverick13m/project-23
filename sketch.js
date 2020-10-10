var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var boxside1, boxside2, boxbottom
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 800);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 1,1);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite . shapeColor = color("brown")

	boxside1 = createSprite(500,720,20,100)
	boxside1 . shapeColor = color("red")
	
	boxside2 = createSprite(300,720,20,100)
	boxside2 . shapeColor = color("red")

	boxbottom = createSprite(width/2,770,200,20)
	boxbottom . shapeColor = color("red")

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	
	

	ground = Bodies.rectangle(width/2, height-43, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  rect(ground.position.x,ground.position.y,ground.width,ground.height)
  rect(packageBody.position.x,packageBody.position.y,10,10) 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false);
    
  }
}



