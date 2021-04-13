
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var sling
var tree1,ground,stone;
var boyImage,boy1;
var mango1

function preload()
{
	boyImage=loadImage("Plucking+mangoes/Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(1300, 700);
	engine = Engine.create();
  world = engine.world;

	
    tree1 = new Tree(600,670)
    ground = new Ground(width/2,670,width,20)
    stone = new Stone(390,20,50,50)
    sling = new slingshot(stone.body,{x:70,y:554})

    
    mango1 = new Mango(570,105,25)
    mango2 = new Mango(630,105,25)
    mango3 = new Mango(550,250,25)
    mango4 = new Mango(610,240,25)
    mango5 = new Mango(650,225,25)
    mango6 = new Mango(610,160,25)
	Engine.run(engine);
  
}

function draw() {
  
  background(255);
  Engine.update(engine); 

  image(boyImage,20,505,200,200);

  tree1.display();
  ground.display();
  stone.display();
  sling.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  sling.fly();
}
function detectCollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false)
  }
}

