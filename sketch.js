
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin;

function preload()
{
 	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,450,40);

	//dustbin = new Dustbin(1200,650);

    ground = new Ground(width/2,670,width,20);

    boxPosition=width/2-100
    boxY=610;
 
    boxleftSprite=createSprite(boxPosition, boxY, 20,100);
    boxleftSprite.shapeColor=color(255,0,0);
 
    boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
    World.add(world, boxLeftBody);
 
    boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
    boxBase.shapeColor=color(255,0,0);
 
    boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
    World.add(world, boxBottomBody);
 
    boxrightSprite=createSprite(boxPosition+200 , boxY, 20,100);
    boxrightSprite.shapeColor=color(255,0,0);
 
    boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
    World.add(world, boxRightBody);

	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(255);
  
  paper.display();
 // dustbin.display();
  ground.display();

  drawSprites();
}
function keyPressed(){

 if (keyCode === UP_ARROW){
   Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
 }
}


