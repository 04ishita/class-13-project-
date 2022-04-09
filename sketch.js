var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg ;
var leaf, leafImg; 
var orange,orangeImg 

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg  = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit moving
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbit.velocityX = 4
}


function draw() {
  
  
 // edges= createEdgeSprites();
  //rabbit.collide(edges);

  rabbit.x = World.mouseX

var select_sprite= Math.round( random(1,3))
if( frameCount%80==0){
if(select_sprite==1){
  createApples();
}
else(select_sprite==2) 
{
    createLeaves();
  }




}





  drawSprites();
}





function createApples(){


  apple= createSprite(random(50,350),40,10,10)

  apple.addImage(appleImg)
  apple.scale = 0.1
  
apple.velocityY = 1 
apple.lifeTime = 150
drawSprites()

}



function createLeaves(){
  leaf = createSprite(random(50,350),40,10,10)
leaf.addImage(leafImg)
leaf.scale = 0.1

leaf.velocityY = 1
leaf.lifeTime = 150 

drawSprites()
}