var paperSprite,paper,dustbin, dustbinSprite,groundSprite,ground,paperIMG,dustbinIMG;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  paperIMG=loadImage("paper.png")
  dustbinIMG=loadimage("dustbin.png")

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paperSprite=createSprite(width/2, 80, 10,10);
	paperSprite.addImage(paperIMG)
	paperSprite.scale=0.2

	dustbinSprite=createSprite(width/2, 200, 10,10);
	dustbinSprite.addImage(dustbinIMG)
	dustbinSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	


	engine = Engine.create();
	world = engine.world;

	paper = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, paper);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperSprite.x= paper.position.x 
  paperSprite.y= paper.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(paper,false);
    
  }
}



  


	Engine.run(engine);
  



