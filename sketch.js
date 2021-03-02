
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj,groundObject, paperObject, bin, bin1;	
var world;

function preload () {
	bin = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	dustbinObj=new dustbin(1200,650);

	groundObject=new ground(width/2,670,width,20);

	bin1 = createSprite(1200,550);
    bin1.addImage(bin);
	bin1.scale = 0.7;

	paperObject = new Paper(100, 200, 70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  groundObject.display();
  dustbinObj.display();
  bin1.display();
  paperObject.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-945});
	}
}
