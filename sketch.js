var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound h
    music=loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(850,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(518,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(740,580,200,30);
    block4.shapeColor = "green";

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX=6
    ball.velocityY=-6
    

        
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    
    //write code to add velocityX and velocityY

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }
  //write code to bounce off ball from the block3
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
        music.play();
    }
   //write code to bounce off ball from the block4
  


    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
        ball.velocityX=0
        ball.velocityY=0
        //write code to stop music
        music.stop()
    }
     if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
    music.play();
    }
    drawSprites();
}