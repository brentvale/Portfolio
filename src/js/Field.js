import indexOf from 'lodash/indexOf';
const CHICKEN_EATING_DURATION = 6000;
const CHICKEN_IMAGE_WIDTH = 100;

export default class Field{
  constructor(props){
    this.screenWidth = props.screenWidth;
    this.chickens = props.chickens;
    this.pieces = {};
    this.redPieces = {};
    this.bluePieces = {};
    this.greenPieces = {};
    this.moveableChickens = false;
    this.currentColors = [];
  }

  generateXPos = () => {
    let random = Math.random()*this.screenWidth;
    if(random < CHICKEN_IMAGE_WIDTH){
      random = CHICKEN_IMAGE_WIDTH + 1;
    }
    if(random > this.screenWidth - CHICKEN_IMAGE_WIDTH){
      random = this.screenWidth - (CHICKEN_IMAGE_WIDTH + 1);
    }
    return random;
  }
  tossRecycleable = (color) => {
    setTimeout(() => {
      this.chickens.forEach((chicken) => {
        this.moveableChickens = true;
        switch(color){
          case 'red':
            this.redPieces = {};
            this.redPieces[chicken.id] = { yPos: chicken.yPos, xPos: this.generateXPos(), color: color };
            break;
          case 'blue':
            this.bluePieces = {};
            this.bluePieces[chicken.id] = { yPos: chicken.yPos, xPos: this.generateXPos(), color: color };
            break;
          case 'green':
            this.greenPieces = {};
            this.greenPieces[chicken.id] = { yPos: chicken.yPos, xPos: this.generateXPos(), color: color };
            break;
        }
      });
    }, 200);
  };

  removePiece = (chickenId) => {
    setTimeout(() => {
      delete(this.pieces[`${chickenId}`]);
    }, CHICKEN_EATING_DURATION);
  };

  moveChickens = () => {
    if(this.moveableChickens){
      this.chickens.forEach((chicken) => {
        chicken.move();
        if(this.withinEatingDistance(chicken)){
          if(!chicken.isEating){
            chicken.letChickenEat();
            this.removePiece(chicken.id);
          }
        }
      });
    }
  };

  withinEatingDistance = (chicken) => {
    if(!this.redPieces[chicken.id] && !this.bluePieces[chicken.id] && !this.greenPieces[chicken.id]){
      return false;
    }
    if(chicken.direction === 'left'){
      return Math.abs(chicken.xPos + chicken.eatLeftXOffset - this.pieces[chicken.id].xPos) <= chicken.speed;
    } else {
      return Math.abs(chicken.xPos + chicken.eatRightXOffset - this.pieces[chicken.id].xPos) <= chicken.speed;
    }
  };

  setScreenWidth = (newWidth) => {
    this.screenWidth = newWidth;
    this.chickens.forEach(chicken => {
      chicken.screenWidth = newWidth;
    })
  };
}