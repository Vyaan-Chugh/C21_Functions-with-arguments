//function definition with parameters
function isTouching(object1,object2){
    if(object1.x - object2.x <= object1.width/2 + object2.width/2 &&
      object2.x - object1.x <= object1.width/2 + object2.width/2 &&
      object1.y - object2.y <= object1.height/2 + object2.height/2 &&
      object2.y - object1.y <= object1.height/2 + object2.height/2){
        object2.shapeColor = "red"
        object1.shapeColor = "red"
      }
      else
      {
        object2.shapeColor = "blue"
        object1.shapeColor = "blue"
      }
  }
  
  //collide function
  function collide(object1,object2){
    if(object1.x - object2.x <= object1.width/2 + object2.width/2 &&
      object2.x - object1.x <= object1.width/2 + object2.width/2 &&
      object1.y - object2.y <= object1.height/2 + object2.height/2 &&
      object2.y - object1.y <= object1.height/2 + object2.height/2){
        object1.velocityX = 0;
        object2.velocityX = 0;
      }
  
  }
  
  
  function bounceOff(object1,object2){
    if(object1.x - object2.x <= object1.width/2 + object2.width/2 &&
      object2.x - object1.x <= object1.width/2 + object2.width/2 &&
      object1.y - object2.y <= object1.height/2 + object2.height/2 &&
      object2.y - object1.y <= object1.height/2 + object2.height/2){
        object1.velocityX = object1.velocityX * (-1);
        
      }
  
  }