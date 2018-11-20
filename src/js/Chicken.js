const IMAGE_WIDTH = 100;

export default class Chicken{
  constructor(props){
    this.screenWidth = props.screenWidth;
    this.xPos = Math.random()*(props.screenWidth - IMAGE_WIDTH) + IMAGE_WIDTH/2;
    this.speed = Math.floor(Math.random()*2)+1;
  }
  move(){
    this.xPos = this.xPos < IMAGE_WIDTH/2 ? this.screenWidth - IMAGE_WIDTH/2 : this.xPos - this.speed;
  }
}