const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
let world;
let engine;
//Create multiple bobs, mulitple ropes varibale here
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var con;
var con2;
var con3;
var con4;
var con5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	var bob1_options={
		restitution:0.8	
	}
	var bob2_options={
		restitution:0.8		
	}	
	var bob3_options={
		restitution:0.8		
	}	
	var bob4_options={
		restitution:0.8		
	}	
	var bob5_options={
		restitution:0.8		
	}

	roof = Bodies.rectangle(350,100,230,20,roof_options);
    World.add(world,roof);

	bob1=Bodies.circle(300,300,20,bob1_options);
	World.add(world,bob1);
	bob2=Bodies.circle(320,300,20,bob2_options);
	World.add(world,bob2);
	bob3=Bodies.circle(340,300,20,bob3_options);
	World.add(world,bob3);
	bob4=Bodies.circle(360,300,20,bob4_options);
	World.add(world,bob4);
	bob5=Bodies.circle(380,300,20,bob5_options);
	World.add(world,bob5);
	

	con = Matter.Constraint.create({
		pointA:{x:300,y:100},
		bodyB:bob1,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
	  });

	World.add(world,con);

	con2 = Matter.Constraint.create({
		pointA:{x:320,y:100},
		bodyB:bob2,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
	  });

	World.add(world,con2);

	con3 = Matter.Constraint.create({
		pointA:{x:340,y:100},
		bodyB:bob3,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
	  });

	World.add(world,con3);

	con4 = Matter.Constraint.create({
		pointA:{x:360,y:100},
		bodyB:bob4,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
	  });

	World.add(world,con4);

	con5 = Matter.Constraint.create({
		pointA:{x:380,y:100},
		bodyB:bob5,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
	  });

	World.add(world,con5);
	  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,bob1.position.x,bob1.position.y);
  
  pop();

  push();
  strokeWeight(2);
  stroke(255);
  line(con2.pointA.x,con2.pointA.y,bob2.position.x,bob2.position.y);
  
  pop();

  push();
  strokeWeight(2);
  stroke(255);
  line(con3.pointA.x,con3.pointA.y,bob3.position.x,bob3.position.y);
  
  pop();

  push();
  strokeWeight(2);
  stroke(255);
  line(con4.pointA.x,con4.pointA.y,bob4.position.x,bob4.position.y);
  
  pop();

  push();
  strokeWeight(2);
  stroke(255);
  line(con5.pointA.x,con5.pointA.y,bob5.position.x,bob5.position.y);
  
  pop();

  //create ellipse shape for multiple bobs here
ellipse(bob1.position.x,bob1.position.y,20);
ellipse(bob2.position.x,bob2.position.y,20);
ellipse(bob3.position.x,bob3.position.y,20);
ellipse(bob4.position.x,bob4.position.y,20);
ellipse(bob5.position.x,bob5.position.y,20);
Engine.update(engine);

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
	if(keyCode==RIGHT_ARROW)
	  {
		  Matter.Body.applyForce(bob1,{x:0,y:0},{x:-0.08,y:0});
	  }
}