const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var person; 
var batman;
var bat;

var drops=[]
var maxDrops = 200;

function preload(){
    batman = loadAnimation("Walking Frame/walking_1.png", "Walking Frame/walking_2.png", "Walking Frame/walking_3.png", "Walking Frame/walking_4.png", "Walking Frame/walking_5.png", "Walking Frame/walking_6.png", "Walking Frame/walking_7.png", "Walking Frame/walking_8.png","Walking Frame/batman.png" );
    

}
function setup(){
createCanvas(400,700);
engine = Engine.create();
world = engine.world; 

person=createSprite(200,500,50,0);
person.addAnimation("batman",batman);
person.scale = 0.8;

if(frameCount % 150 === 0)
{ 
    
    for(var i=0; i<maxDrops; i++)
    
    { 
        
        drops.push(new Drop(random(0,400), random(0,400))); 
    } 
}

}

function draw(){
    background("black");
    Engine.update(engine);


    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
        
    }
    drawSprites();
}   

