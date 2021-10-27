const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg,platform;
var slingshot;
var Box1,Box2,Box3,Box4,Box5,Box11,Box12,Box13,Box14,Box15,Box21,Box22,Box23,Box24,Box25,Box31,Box32,Box33,Box34,Box35
var ball



function preload() {
    
}

function setup(){
    var canvas = createCanvas(1500,1000);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,600,1200,20);
    

    Box1 = new Box(900,100,70,70);
    Box2 = new Box(900,100,70,70);
    Box3 = new Box(900,100,70,70);
    Box4 = new Box(900,100,70,70);
    Box5 = new Box(900,100,70,70);
    Box11 = new Box(900,100,70,70);

    Box21 = new Box(800,100,70,70);
    Box22 = new Box(800,100,70,70);
    Box23 = new Box(800,100,70,70);
    Box24 = new Box(800,100,70,70);
    Box25 = new Box(800,100,70,70);
    Box31 = new Box(800,100,70,70);

    Box32 = new Box(700,100,70,70);
    Box33 = new Box(700,100,70,70);
    Box34= new Box(700,100,70,70);
    Box35= new Box(700,100,70,70);
    Box12= new Box(700,100,70,70);
    Box13 = new Box(700,100,70,70);
    Box14= new Box(700,100,70,70);
    Box15= new Box(700,100,70,70);

    ball = new Ball(200,200,80)

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(ball.body,{x:500, y:50});
}

function draw(){
    //if(backgroundImg)
    background("pink");

    Engine.update(engine);

    //strokeWeight(4);

    Box1.display()
    Box2.display()
    Box3.display()
    Box4.display()
    Box5.display()

    Box21.display()
    Box22.display()
    Box23.display()
    Box24.display()
    Box25.display()

    Box11.display()
    Box12.display()
    Box13.display()
    Box14.display()
    Box15.display()

    Box31.display()
    Box32.display()
    Box33.display()
    Box34.display()
    Box35.display()

    ground.display();

    ball.display()
    slingshot.display();    
}
//function to drag the bird
function mouseDragged(){
    
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    
}


