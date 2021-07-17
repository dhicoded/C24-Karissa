const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600, 390, 1200, 20);


    box1 = new Box(700,345,70,70);
    box2 = new Box(900,345,70,70);
    box3 = new Box(700,245,70,70);
    box4 = new Box(900,245,70,70);
    box5 = new Box(800,150,70,70);    

    log1 = new Log(800,300,30,410, PI/2);
    log2 = new Log(800,180,30,410, PI/2);
    log3 = new Log(720,150,30,150, PI/7);
    log4 = new Log(930,150,30,150, -PI/7);

    pig1=new Pig(800,345,50,50)
    pig2=new Pig(800,225,50,50)
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ground.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    pig1.display();
    pig2.display();   
}