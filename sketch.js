var mouse,cat;
var jerryimg1,jerryimg2,jerryimg3,jerryimg4;
var tomimg1,tomimg2,tomimg3,tomimg4;
 var background1,background1Image;


function preload() {
  
tomimg1=loadAnimation("images/tomOne.png");
tomimg2=loadAnimation("images/tomTwo.png");
tomimg3=loadAnimation("images/tomThree.png");
tomimg4=loadAnimation("images/tomFour.png");

jerryimg1=loadAnimation("images/jerryOne.png");
jerryimg2=loadAnimation("images/jerryTwo.png","images/jerryThree.png");

jerryimg4=loadAnimation("images/jerryFour.png");

background1Image=loadImage("images/garden.png");

}

function setup(){
    createCanvas(1000,800);
    
    
    background1=createSprite(500,400,100,100);
    background1.addImage(background1Image);
    
    mouse=createSprite(200,580,20,20);
    mouse.addAnimation("standing",jerryimg1);
    mouse.scale=0.1;

    cat = createSprite(700,580,20,20);
    cat.addAnimation("catStanding",tomimg1);
    cat.scale=0.1;
}

function draw() {
 background(255);
   
 if(cat.x-mouse.x<car.width/2-mouse.width/2){
    cat.addAnimation("catstopped",tomimg4);
    cat.changeAnimation("catstopped");

    mouse.addAnimation("mouseSearching",jerryimg4);
    mouse.changeAnimation("mouseSearching");

    cat.velocityX=0;
}

    drawSprites();
}


function keyPressed(){

if(keyCode===LEFT_ARROW){
cat.velocityX=-5;
cat.addAnimation("catrunning",tomimg2)
cat.changeAnimation("catrunning");

mouse.addAnimation("mouseteasing",jerryimg2);
mouse.changeAnimation("mouseteasing");

}
    


}
