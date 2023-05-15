var dragon ,dragonImg;
var man ,manImg ,mancolidedImg ,manRunnin ,manRunnin1 ,manRunninImg;
var obstacle ,obstacle2;
var groundImg;
var gameoverImg ,restartedImg;


function preload(){
manRunninImg = loadAnimation("manRunnin.jpg", "manRunnin1.png")
mancolidedImg = loadAnimation("manColided.jpg")

groundImg = loadAnimation("groundImg.jpeg")

obstacle = loadImage("obstacle.png");
obstacle1 = loadImage("obstacle2.png");

restartedImg = loadImage("restartedImg.webp")
gameoverImg = loadImage("gameoverImg.jpg")

    
}

function setup() {
createCanvas(600, 200);
var message = "This is a message";

console.log(message)

man = createSprite(50,160,20,50);
  man.addAnimation("manRunning.jpg", manRunnin);
  man.addAnimation("manCollided.jpg", manCollided);

  gameover = createSprite(300,100);
  gameover.addImage(gameoverImg);


 
}

function draw() {
 
}