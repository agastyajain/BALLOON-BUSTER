var bow;
var  ground,groundi;
var redballoon,redballoon1;
var blueballoon,blueballoon1;
var pinkballoon,pinkballoon1;
var greenballoon,greenballoon1;
var arrow,temp_arrow,arrowimg; 
var noarrows=50;
var select_balloon;
var score;
var redgroup;
var bluegroup;
var greengroup; 
var pinkgroup;
var arrowgroup;
var state;
var sound;
var PLAY=1;
var END=0;
var state=PLAY;



 




function preload(){

groundi=loadImage("grassy-background-1.jpg ");
  groundi.scale=0.3;
  bowImg=loadImage("a.png");
  redballoon1=loadImage("e.png");
  blueballoon1=loadImage("d.png");
  pinkballoon1=loadImage("f.png");
  greenballoon1=loadImage("g.png");
  arrowimg = loadImage("b.png");
   sound = loadSound("Arrow+Swoosh+1.mp3")
}
     
  function setup() {
    createCanvas(460, 400);
    ground = createSprite(200,182,500,400);

    ground.addImage("ground",groundi);
    ground.scale=1.2;
    ground.x = ground.width /2;
     bow = createSprite(450,mouseY,20,50);
      bow.addImage("a.png",bowImg);
    
    
    redgroup = new Group();
    bluegroup = new Group();
    pinkgroup = new Group();
    greengroup = new Group();
    arrowgroup = new Group();
    score=0;
          
   }

function draw() {
if(state==PLAY){
  

    background("white");
  bow.y=mouseY; 
    
  select_balloon=Math.round(random(1,4));
   
   ground.velocityX =-10 ;
    
  if (ground.x<160 ){
    ground.x = ground.width/2;
  }  
  if(keyWentDown ("space")&&(noarrows>0)){
    createarrow();
    sound.play();
    
    noarrows=noarrows-1;
  }
  //console.log(select_balloon);
  if(World.frameCount%30==0){
    switch(select_balloon){
         case 1 :redb();
                 break;
         case 2  :blueb();
                 break;
         case 3 :pinkb();
                 break;
         case 4 : greenb();
                break;
    }
  }
  
  drawSprites();
      
 
  
  if(arrowgroup.isTouching(bluegroup)){
    bluegroup.destroyEach();
    arrowgroup.destroyEach();
    score=score+1;
     
  }
  if(arrowgroup.isTouching(pinkgroup)){
    pinkgroup.destroyEach();
    arrowgroup.destroyEach();
    score=score+4;
     
  }
  if(arrowgroup.isTouching(redgroup)){
    redgroup.destroyEach();
    arrowgroup.destroyEach();
    score=score+3;
     
  }
  if(arrowgroup.isTouching(greengroup)){
    greengroup.destroyEach();
   arrowgroup.destroyEach();
    score=score+2;
     
  }
   text("SCORE:"+score,380,20); 
   text("ARROWS LEFT:" +noarrows,340,40 );
  }
  
     
  
  if(noarrows==0){
state=END;
}
   
  
  if(state==END){
     background("white");
  redgroup.velocityX=0;
  greengroup.velocityX=0;
  bluegroup.velocityX=0;
  pinkgroup.velocityX=0;
  ground.velocityY=0;
    textSize(20);
     fill("yellow");
     stroke("red");
  text("GAME OVER!!!",150,200);
  }
  

  
  
  


 

  
  
 
  
}
 
function createarrow(){
  arrow=createSprite(380,200,20,20);
  arrow.addImage(arrowimg);
  arrow.velocityX=-20  ; 
  arrow.scale=0.3;
  arrow.y=bow.y;
  arrowgroup.add(arrow);
  
  
}
function redb(){
  redballoon=createSprite(0,Math.round(random(20,370)),10,10);
  redballoon.addImage("red",redballoon1);
  redballoon.velocityX=10  ;
  redballoon.lifetime=150;
  redballoon.scale=0.1;
  redgroup.add(redballoon);
}
function blueb(){
  blueballoon=createSprite(0,Math.round(random(20,370)),10,10);
  blueballoon.addImage("blue",blueballoon1);
  blueballoon.velocityX=12;
  blueballoon.lifetime=150;
  blueballoon.scale=0.1;
  bluegroup.add(blueballoon);
}
function pinkb(){
  pinkballoon=createSprite(0,Math.round(random(20,370)),10,10);
  pinkballoon.addImage("pink",pinkballoon1);
  pinkballoon.velocityX=15;
  pinkballoon.lifetime=150;
  pinkballoon.scale=1;
  pinkgroup.add(pinkballoon);
}
function greenb(){
  greenballoon=createSprite(0,Math.round(random(20,370)),10,10);
  greenballoon.addImage("green",greenballoon1);
  greenballoon.velocityX=20;
  greenballoon.lifetime=150;
  greenballoon.scale=0.1;
  greengroup.add(greenballoon);
}

 