const IMAGE_WIDTH = 100;
const LEFT_PADDING = 20; // how far before left wall does chicken stop
const MOVE_KLASS_FROM_DIRECTION = {
  left: 'robot-chicken-move-left',
  right: 'robot-chicken-move-right',
};

const Y_POS_TO_SIZE = {
  1: 'chicken-depth-1', // 50%
  2: 'chicken-depth-2', // 55%
  3: 'chicken-depth-3', // 60%
  4: 'chicken-depth-4', // 65%
  5: 'chicken-depth-5', // 70%
  6: 'chicken-depth-6', // 75%
  7: 'chicken-depth-7', // 80%
  8: 'chicken-depth-8', // 85%
  9: 'chicken-depth-9', // 90%
  10: 'chicken-depth-10', // 100%
};
const EAT_LEFT_OFFSET = {
  1: 32,
  2: 0,
  3: 0,
  4: 26,
  5: 0,
  6: 22,
  7: 0,
  8: 20,
  9: 0,
  10: 18,
};

const EAT_RIGHT_OFFSET = {
  1: 58,
  2: 0,
  3: 0,
  4: 60,
  5: 0,
  6: 61,
  7: 0,
  8: 70,
  9: 0,
  10: 75,
};

// EAT CYCLE
// chicken stops for 1 second
// 1.5 seconds to cycle through bend down animation
// chicken eats for 3500 ms
// chicken pops up stopped for 1 second
// chicken keeps walking

const generateId = () => Math.floor(Math.random() * 5000000).toString();

export default class Chicken {
  constructor(props) {
    this.id = props.id || generateId();
    this.screenWidth = props.screenWidth;
    this.xPos = Math.floor(Math.random() * (props.screenWidth - IMAGE_WIDTH) + IMAGE_WIDTH / 2);
    this.yPos = props.yPos || Math.floor(Math.random() * 10 + 1);
    this.eatLeftXOffset = EAT_LEFT_OFFSET[this.yPos];
    this.eatRightXOffset = EAT_RIGHT_OFFSET[this.yPos];
    this.speed = props.speed || Math.floor(Math.random() * 3) + 1;
    this.direction = 'left';
    this.isThinking = false;
    this.isEating = false;
    this.isEatingContinuously = false;
    this.backgroundKlass = MOVE_KLASS_FROM_DIRECTION[this.direction];
    this.depthKlass = Y_POS_TO_SIZE[this.yPos]; // 10 rows deep.  closest row is farthest from top of div and largest
  }

  getKlassName(){ // eslint-disable-line
    const movementKlass = this.isThinking ? 'robot-chicken-stopped' : 'robot-chicken-walking';

    if (this.isEating && !this.isThinking) {
      if (this.isEatingContinuously) {
        if (this.direction === 'right') {
          return `robot-chicken-eating-continuously-facing-right continuously-eating ${this.depthKlass}`;
        }
        return `robot-chicken-eating-continuously continuously-eating ${this.depthKlass}`;
      }
      if (this.direction === 'right') {
        return `robot-chicken-eating-facing-right chicken-eating ${this.depthKlass}`;
      }
      return `robot-chicken-eating chicken-eating ${this.depthKlass}`;
    }

    let backgroundPosition = '';
    if (this.isThinking && !this.isEating) {
      if (this.direction === 'right') {
        // when chicken changes to face right, set background to match sprite of still chicken
        backgroundPosition = 'robot-chicken-stopped-facing-right';
      }
    }
    return `robot-chicken ${movementKlass} ${this.backgroundKlass} ${backgroundPosition} ${this.depthKlass}`;
  }

  move() {
    if (this.xPos < LEFT_PADDING || this.xPos > this.screenWidth - IMAGE_WIDTH) {
      if (!this.isThinking) {
        if (this.xPos < LEFT_PADDING) {
          this.xPos = LEFT_PADDING;
        } else {
          this.xPos = this.screenWidth - IMAGE_WIDTH;
        }
        this.turnChicken();
      }
    } else if (!this.isThinking && !this.isEating) {
      this.xPos = this.direction === 'left' ? this.xPos - this.speed : this.xPos + this.speed;
    }
  }

  letChickenEat() {
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
  }

  turnChicken() {
    setTimeout(() => {
      this.isThinking = false;
    }, 2000);

    setTimeout(() => {
      this.switchDirection();
    }, 1000);

    this.isThinking = true;
  }

  switchDirection() {
    this.direction = this.direction === 'left' ? 'right' : 'left';
    this.backgroundKlass = MOVE_KLASS_FROM_DIRECTION[this.direction];
  }

  setScreenWidth(newWidth) {
    this.screenWidth = newWidth;
  }
}
