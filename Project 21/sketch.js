const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,
    Ground,
    leftSide,
	rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1200,800);


	engine = Engine.create();
	world = engine.world;
    
	var ball_options = {
		isStatic:false,
		density:1.2,
	}
	//Create the Bodies Here.
    ball = Bodies.circle(200,200,40,ball_options);
    World.add(world,ball);
    
    Ground = new ground(width/2,790,width,20);
    leftSide = new ground(1000,720,20,120);
	rightSide = new ground(1150,720,20,120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,40);
  Ground.show();
  leftSide.show();
  rightSide.show();
  keyPressed();
  drawSprites();
  
}

function keyPressed(){
if(keyCode === 13){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-1});
}
}


