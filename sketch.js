
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	gameState = "start";

	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(200,450,70);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {

  if (gameState === "start") {
    background("black");
    textSize(22);
    fill("green");
    text("The importance of throwing away your trash GAME. \n                 Press enter to Start, and Up to throw away the trash.", 50, 200)
    if (keyCode === ENTER) {
      gameState = "play"
    }
  }
  if (gameState === "play") {
    rectMode(CENTER);
	background(230);
  }
 
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
}

function keyPressed() {
  	if (keyCode === UP_ARROW && gameState==="play") {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

    
  	}
}





