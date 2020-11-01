const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var stone1;
var boy;
var mango;
var tree;
function preload()
{

}

function setup() {
	createCanvas(1300, 700);
 

	engine = Engine.create();
	world = engine.world;
  
  //Create the Bodies Here.
  boy=new Boy(250,500,250,250);
   stone=new Stone(175,445,60,60);
   mango1=new Mango(650,350,500,500);
   /*mango2=new Mango()
   mango3=new Mango()
   mango4=new Mango()
   mango5=new Mango()*/
   tree=new Tree(1000,350,600,600);
  slingshot=new Slingshot(stone.body,{x:175,y:445});
  Engine.run(engine);

	
  
}
function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(255);
  boy.display();
  stone.display();
  slingshot.display();
  tree.display();
  mango1.display();
  drawSprites();
 
}                                                    