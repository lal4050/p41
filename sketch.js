const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var man;
var a
var b;
var maxDrops=100

var obstacle;
var p ;
var ball;



function preload(){
    a= loadAnimation("1.png","1.png","1.png","1.png","1.png","1.png","3.png","3.png","3.png","3.png","3.png","2.png","2.png","2.png","2.png","2.png","2.png","4.png","4.png","4.png","4.png","4.png")
}

function setup(){
   createCanvas(500,500);
   engine = Engine.create();
   world = engine.world;

    obstacle = createSprite(200,80,100,200); 
    obstacle.addAnimation("a",a);  
    obstacle.scale = 0.3;

    man = new umbrela(50,200,300);
    //ball = new Ball(50,200,5);

    for(i=0; i<maxDrops; i++){
        ball.push(new Ball(random(0,400),random(0,400)));
    }
}
function draw(){
    background("black");
    man.display();
    for(i=0; i<ball.length; i++){
        ball.display();
    }    drawSprites();
}   


