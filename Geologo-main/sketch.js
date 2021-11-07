const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var circleA;
var port1
var pt
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    circleA = new Circle(100,100,200)
    port1 = new Port(60,200)
    pt = new Politriángulo(200,300,100,60);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    circleA.display();
    port1.display();
    pt.display();
 
}