const IMAGE_WIDTH = 100;
const LEFT_PADDING = 20; // how far before left wall does chicken stop
const MOVE_KLASS_FROM_DIRECTION = {
  left: 'robot-chicken-move-left',
  right: 'robot-chicken-move-right'
};
const STOP_AND_EAT_RANDOM = 1000; //chances of stopping and eating

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

// EAT CYCLE
// chicken stops for 1 second
// 1.5 seconds to cycle through bend down animation
// chicken eats for 3500 ms
// chicken pops up stopped for 1 second
// chicken keeps walking

export default class Chicken{
  constructor(props){
    this.screenWidth = props.screenWidth;
    this.xPos = Math.floor(Math.random()*(props.screenWidth - IMAGE_WIDTH) + IMAGE_WIDTH/2);
    this.yPos = props.yPos || Math.floor(Math.random()*10 + 1);
    this.speed = Math.floor(Math.random()*2)+1;
    this.direction = 'left';
    this.isThinking = false;
    this.isEating = false;
    this.isEatingContinuously = false;
    this.backgroundKlass = MOVE_KLASS_FROM_DIRECTION[this.direction];
    this.depthKlass = Y_POS_TO_SIZE[this.yPos]; //10 rows deep.  closest row is farthest from top of div and largest
  }

  getKlassName = () => {
    let movementKlass = this.isThinking ? 'robot-chicken-stopped' : 'robot-chicken-walking';

    if(this.isEating && !this.isThinking){
      if(this.isEatingContinuously){
        if(this.direction === 'right'){
          return `robot-chicken-eating-continuously-facing-right continuously-eating ${this.depthKlass}`;
        } else {
          return `robot-chicken-eating-continuously continuously-eating ${this.depthKlass}`;
        }

      } else {
        if(this.direction === 'right'){
          return `robot-chicken-eating-facing-right chicken-eating ${this.depthKlass}`;
        } else {
          return `robot-chicken-eating chicken-eating ${this.depthKlass}`;
        }
      }
    }

    let backgroundPosition = '';
    if(this.isThinking && !this.isEating){
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
      if(!this.isThinking && !this.isEating){
        if(Math.floor(Math.random()*STOP_AND_EAT_RANDOM) === 1){
          this.letChickenEat();
        } else {
          this.xPos = this.direction === 'left' ? this.xPos - this.speed : this.xPos + this.speed;
        }
      }
    }
  };

  letChickenEat = () => {
    this.isEating = true;
    this.isThinking = true;

    setTimeout(() => {
      this.isThinking = false;
    }, 1000);

    setTimeout(() => {
      this.isEatingContinuously = true;
    }, 2500); // 1000ms of thinking + 1500 for 3x3 animation to play fully

    setTimeout(() => {
      this.isEatingContinuously = false;
      this.isEating = false;
      this.isThinking = true;
    }, 6000);

    setTimeout(() => {
      this.isThinking = false;
    }, 7000);
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