var canvas;
var music;
var player, box1, box2, box3, box4;

function preload(){
    music = loadSound("music.mp3");

    
}


function setup(){
    canvas = createCanvas(800,600);

    box1 = createSprite(100,600,200,40);
    box1.shapeColor = "green";
    box2 = createSprite(300,600,200,40);
    box2.shapeColor = "red";
    box3 = createSprite(500,600,200,40);
    box3.shapeColor = "blue";
    box4 = createSprite(700,600,200,40);
    box4.shapeColor = "purple";

    player = createSprite(400,200,20,20);
    player.shapeColor = "white";
    player.velocityY = 5;
    player.x = random(20,750);

}

function draw() {
    background(rgb(169,169,169));
    //createEdgeSprite();

    if(box1.isTouching(player) && player.bounceOff(box1)){
        player.shapeColor = "green";
    }
    if(box2.isTouching(player) && player.bounceOff(box2)){
        player.shapeColor = "red";
    }
    if(box3.isTouching(player) && player.bounceOff(box3)){
        player.shapeColor = "blue";
    }
    if(box4.isTouching(player) && player.bounceOff(box4)){
        player.shapeColor = "purple";
    }

    enviroment();
    //playerControl();
    
    drawSprites();
}

function playerControl(){
    if(keyPressed(leftArrow)){
        player.x -= 5
    }
    if(keyPressed(rightArrow)){
        player.x += 5
    }
}

function enviroment(){
    player.velocityY += 0.8;
}

function isTouching(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
        && object2.x - object1.x < object2.width/2 + object1.width/2
        && object1.y - object2.y < object2.height/2 + object1.height/2
        && object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true;
    }else {
      return false;
    }
  }

function bounceOff(object1,object2){
    if(object1.x - object2.x < object2.width/2 + object1.width/2
        && object2.x - object1.x < object2.width/2 + object1.width/2){
          object1.velocityX = (-1) * object1.velocityX;
          object2.velocityX = (-1) * object2.velocityX;
        }
        if(object1.y - object2.y < object2.height/2 + object1.height/2
        && object2.y - object1.y < object2.height/2 + object1.height/2){
           object1.velocityY = (-1) * object1.velocityY;
           object2.velocityY = (-1) * object2.velocityY;
        }
  }