const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var score =0;

function preload(){
  polygon_img=loadImage("sprites/polygon.png");
  backgroundImg=loadImage("sprites/bg1.jpg");
  getBackground();
}

function setup() {
  engine  = Engine.create();
  world = engine.world;

  createCanvas(900,400);
  ground = new Ground();
  stand1 = new Stand(380,300,270,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(280,275,30,40);  
  block2 = new Block(310,275,30,40);
  block3 = new Block(340,275,30,40);
  block4 = new Block(370,275,30,40);
  block5 = new Block(400,275,30,40);
  block6 = new Block(430,275,30,40);
  block7 = new Block(460,275,30,40);
  block8 = new Block(490,275,30,40);
  //level two
  block9 = new Block(310,235,30,40);
  block10 = new Block(340,235,30,40);
  block11 = new Block(370,235,30,40);
  block12 = new Block(400,235,30,40);
  block13 = new Block(430,235,30,40);
  block14 = new Block(460,235,30,40);
  //level three
  block15 = new Block(340,195,30,40);
  block16 = new Block(370,195,30,40);
  block17 = new Block(400,195,30,40);
  block18 = new Block(430,195,30,40);
  //level four
  block19 = new Block(370,155,30,40);
  block20 = new Block(400,155,30,40);
  //level five
  block21 = new Block(385,115,30,40);

  //set two 
  //level one
  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  //level two
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  //level three
  blocks9 = new Block(700,95,30,40);

  //ball  with slings
  ball = Bodies.circle(200,200,20);
  World.add(world,ball);

  slingShot = new SlingShot(this.ball,{x:200,y:200});

}

function draw() { 
  if(backgroundImg){
  background(backgroundImg);
  }
    fill(0);
    textSize(25);
    text("Score: "+score, 750, 50);

  Engine.update(engine);
  
  strokeWeight(2);
  textSize(25);
  fill(0);
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",20,340);
  
 // ground.display();
  strokeWeight(2);
  stroke(15);
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill(0,79,173);
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  block8.display();
  block8.score();
  fill("green");
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  block13.display();
  block13.score();
  block14.display();
  block14.score();
  fill(255,233,37);  
  block15.display();
  block15.score();
  block16.display();
  block16.score();
  block17.display();
  block17.score();
  block18.display();
  block18.score();
  fill(251,127,48);  
  block19.display();
  block19.score();
  block20.display();
  block20.score();
  fill("red");
  block21.display();
  block21.score();

  fill(255,233,37);
  blocks1.display();
  block1.score();
  blocks2.display();
  block2.score();
  blocks3.display();
  block3.score();
  blocks4.display();
  block4.score();
  blocks5.display();
  block5.score();
  fill(251,127,48);
  blocks6.display();
  block6.score();
  blocks7.display();
  block7.score();
  blocks8.display();
  block8.score();
  fill("red")
  blocks9.display();
  block9.score();

  imageMode(CENTER)
  image(polygon_img ,ball.position.x-50,ball.position.y-80,40,40);

  slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.ball);
  }
}
async function getBackground(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON=await response.json();
  console.log(responseJSON);
  var datetime= responseJSON.datetime;
  console.log(datetime);
  var time=datetime.slice(11,13);
  console.log(time);
  if(time>=06 && time<=18){
      bg="sprites/bg1.jpg";
  }
  else{
      bg="sprites/b2.jpg";
  }
  backgroundImg=loadImage(bg);
}