var Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies =  Matter.Bodies; 

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 200;
var score = 0;

function setup() {
  createCanvas(700,700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  for (var i = 0; i <=width; i = i +80) {
    divisions.push(new Divisions (k, height-divisionHeight/2, 10, divisions))
  }

  for (var i = 75; i <=width; i = i +50) {
    plinkos.push(new Plinko(i, 75))
  }
  
  for (var i = 50; i <=width-10; i = i +50) {
    plinkos.push(new Plinko(i, 175))
  }
  
  for (var i = 75; i <=width; i = i +50) {
    plinkos.push(new Plinko(i, 275))
  }
  
  for (var i = 50; i <=width-10 ; i = i +50) {
    plinkos.push(new Plinko(i, 375))
  }

}

function draw() {
  background("black");  
  textSize(20)
  Engine.update(engine);
  ground.display();

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(100,700),10,10));
    score++;
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].display();
  }

  for (var i = 0; i < divisions.length; i++) {
    divisions[i].display();
  }
}