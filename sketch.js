var dog,dogImg1,dogImg2;
var foodS, foodStock;
var database;

function preload()
{
  dogImg1 = loadImage("images/dogImg.png");
  dogImg2 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg1);
  dog.scale = 0.25;

  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
  
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref("/").update({Food:x});
}
function draw() {  
  background(49,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
  }
  fill("white");
  text("Note : You can use the Up-arrow to feed the dog.",10,10);
  drawSprites();
}



