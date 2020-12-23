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
  foodStock.on("value",(data)=>{
    foodS = data.val();
  });
  
}

function readStock(data){
  foodS = data.val();
}


function draw() {  
  background(49,139,87);

  if(keyWentDown(UP_ARROW)){
    console.log(foodS)
    
    if(foodS<0){
      foodS = 0
    }else{
      foodS= foodS-1;
    }
    writeStock(foodS);
    console.log("after feeding "+foodS)
    dog.addImage(dogImg2);
    dog.scale = 0.25;
  }

  fill("white");
  text("Food Remaining :"+foodS,170,80);
  text("Note : You can use the Up-arrow to feed the dog.",10,10);
  drawSprites();
}
function writeStock(x){
  database.ref("/").update({Food:x});
}



