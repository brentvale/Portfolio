const IMAGE_WIDTH = 100;
const LEFT_PADDING = 20; // how far before left wall does chicken stop
const MOVE_KLASS_FROM_DIRECTION = {
  left: 'robot-chicken-move-left',
  right: 'robot-chicken-move-right'
};
const Y_POS_TO_SIZE = {
  1: 'chicken-depth-1',
  2: 'chicken-depth-2',
  3: 'chicken-depth-3',
  4: 'chicken-depth-4',
  5: 'chicken-depth-5',
  6: 'chicken-depth-6',
  7: 'chicken-depth-7',
  8: 'chicken-depth-8',
  9: 'chicken-depth-9',
  10: 'chicken-depth-10',
};

export default class Chicken{
  constructor(props){
    this.screenWidth = props.screenWidth;
    this.xPos = Math.floor(Math.random()*(props.screenWidth - IMAGE_WIDTH) + IMAGE_WIDTH/2);
    this.yPos = props.yPos || Math.floor(Math.random()*10 + 1);
    this.speed = Math.floor(Math.random()*2)+1;
    this.direction = 'left';
    this.isThinking = false;
    this.backgroundKlass = MOVE_KLASS_FROM_DIRECTION[this.direction];
    this.depthKlass = Y_POS_TO_SIZE[this.yPos]; //10 rows deep.  closest row is farthest from top of div and largest
  }

  getKlassName = () => {
    const movementKlass = this.isThinking ? 'robot-chicken-stopped' : 'robot-chicken-walking';
    let backgroundPosition = '';
    if(this.isThinking){
      if(this.direction === 'right'){
        //when chicken changes to face right, set background to match sprite of still chicken
        backgroundPosition = 'robot-chicken-stopped-facing-right';
      }
    }
    return `robot-chicken ${movementKlass} ${this.backgroundKlass} ${backgroundPosition} ${this.depthKlass}`;
  };

  move(){
    if(this.xPos < LEFT_PADDING || this.xPos > this.screenWidth - IMAGE_WIDTH){
      if(!this.isThinking){
        if(this.xPos < LEFT_PADDING){
          this.xPos = LEFT_PADDING;
        } else {
          this.xPos = this.screenWidth - IMAGE_WIDTH;
        }
        this.turnChicken();
      }
    } else {
      if(!this.isThinking){
        this.xPos = this.direction === 'left' ? this.xPos - this.speed : this.xPos + this.speed;
      }
    }
  };

  turnChicken = () => {
    setTimeout(() => {
      this.isThinking = false;
    }, 2000);

    setTimeout(() => {
      this.switchDirection();
    }, 1000);

    this.isThinking = true;
  };

  switchDirection = () => {
    this.direction = this.direction === 'left' ? 'right' : 'left';
    this.backgroundKlass = MOVE_KLASS_FROM_DIRECTION[this.direction];
  };

  setScreenWidth = (newWidth) => {
    this.screenWidth = newWidth;
  };
}