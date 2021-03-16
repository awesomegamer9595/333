const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var particles=[];
var plinkos = [];
var divisions=[];
var divisionHeight=300;
var engine, world;
var ground1;
var turn=0;
var score = 0;
var gameState="start"
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
 Engine.run(engine);
 ground1 = new Ground(800,800,2000,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }


    
}
 


function draw() {
  background("black");
 push();
 fill("white")
  textSize(30)
 text("Score : "+score,20,30);
  Engine.update(engine);
  text("100",10,530)
  text("200",90,530)
  text("300",175,530)
 text("400",250,530)
 text("500",325,530)
 text("400",405,530)
 text("300",495,530)
 text("200",569,530)
 text("100",644,530)
 text("50",735,530)
 pop();
  ground1.display();
   for (var i = 0; i < plinkos.length; i++) {

     plinkos[i].display();

   }
   if(frameCount%60===0){
     particles.push(new Particle(random(10,790), 10,10));
     
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
 }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
 
   


















}
