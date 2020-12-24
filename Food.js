class Milk {
  constructor(x, y){
      this.image = loadImage("images/Milk.png");
  }
    bedroom(){
      background(Bedroom,550,500);
    }
    
    garden(){
      background(Garden,550,500);
    }
    
    washroom(){
      background(Washroom,550,500);
    }


  display(){
    getFoodStock, updateFoodStock, deductFood;

    currentTime=hour();
    if (currentTime==(lastFed+1)) {
      update("PLAYING");
      foodObj.garden();
    }else if(currentTime==(lastFed+2)){
      update("SLEEPING");
      foodObj.bedroom();
    }else if(currentTime==(lastFed+3)){
      update("WASHING");
      foodObj.washroom();
    }

    }
  }; 