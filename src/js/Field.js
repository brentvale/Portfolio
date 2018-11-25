const CHICKEN_EATING_DURATION = 6000;
const CHICKEN_IMAGE_WIDTH = 100;

export default class Field {
  constructor(props) {
    this.screenWidth = props.screenWidth;
    this.chickens = props.chickens;
    this.pieces = {
      redPieces: {},
      bluePieces: {},
      greenPieces: {},
    };
    this.moveableChickens = false;
  }

  generateXPos() {
    let random = Math.random() * this.screenWidth;
    if (random < CHICKEN_IMAGE_WIDTH) {
      random = CHICKEN_IMAGE_WIDTH + 1;
    }
    if (random > this.screenWidth - CHICKEN_IMAGE_WIDTH) {
      random = this.screenWidth - (CHICKEN_IMAGE_WIDTH + 1);
    }
    return Math.floor(random);
  }

  tossRecycleable(color) {
    this.moveableChickens = true;
    setTimeout(() => {
      switch (color) { // eslint-disable-line default-case
        case 'red':
          this.pieces.redPieces = {};
          break;
        case 'green':
          this.pieces.greenPieces = {};
          break;
        case 'blue':
          this.pieces.bluePieces = {};
          break;
      }

      this.chickens.forEach(chicken => {
        switch (color) { // eslint-disable-line default-case
          case 'red':
            this.pieces.redPieces[chicken.id] = { yPos: chicken.yPos, xPos: this.generateXPos(), color };
            break;
          case 'blue':
            this.pieces.bluePieces[chicken.id] = { yPos: chicken.yPos, xPos: this.generateXPos(), color };
            break;
          case 'green':
            this.pieces.greenPieces[chicken.id] = { yPos: chicken.yPos, xPos: this.generateXPos(), color };
            break;
        }
      });
    }, 200);
  }

  removePiece(chickenId, color) {
    setTimeout(() => {
      switch (color) { // eslint-disable-line default-case
        case 'red':
          delete (this.pieces.redPieces[`${chickenId}`]);
          break;
        case 'blue':
          delete (this.pieces.bluePieces[`${chickenId}`]);
          break;
        case 'green':
          delete (this.pieces.greenPieces[`${chickenId}`]);
          break;
      }
    }, CHICKEN_EATING_DURATION);
  }

  moveChickens() {
    if (this.moveableChickens) {
      this.chickens.forEach(chicken => {
        chicken.move();

        const { color, isWithinEatingDistance } = this.withinEatingDistance(chicken);
        if (isWithinEatingDistance) {
          if (!chicken.isEating) {
            chicken.letChickenEat();
            this.removePiece(chicken.id, color);
          }
        }
      });
    }
  }

  withinEatingDistance(chicken) {
    if (!this.pieces.redPieces[chicken.id]
      && !this.pieces.bluePieces[chicken.id]
      && !this.pieces.greenPieces[chicken.id]) {
      return false;
    }
    return this.closestPiece(chicken);
  }

  closestPiece(chicken) {
    let closest;
    let color;

    if (chicken.direction === 'left') {
      if (this.pieces.redPieces[chicken.id]) {
        closest = Math.abs(chicken.xPos + chicken.eatLeftXOffset - this.pieces.redPieces[chicken.id].xPos);
        color = 'red';
      }
      if (this.pieces.bluePieces[chicken.id]) {
        if (closest
          && Math.abs(chicken.xPos + chicken.eatLeftXOffset - this.pieces.bluePieces[chicken.id].xPos) < closest) {
          closest = Math.abs(chicken.xPos + chicken.eatLeftXOffset - this.pieces.bluePieces[chicken.id].xPos);
          color = 'blue';
        }
        if (!closest) {
          closest = Math.abs(chicken.xPos + chicken.eatLeftXOffset - this.pieces.bluePieces[chicken.id].xPos);
          color = 'blue';
        }
      }
      if (this.pieces.greenPieces[chicken.id]) {
        if (closest
          && Math.abs(chicken.xPos + chicken.eatLeftXOffset - this.pieces.greenPieces[chicken.id].xPos) < closest) {
          closest = Math.abs(chicken.xPos + chicken.eatLeftXOffset - this.pieces.greenPieces[chicken.id].xPos);
          color = 'green';
        }
        if (!closest) {
          closest = Math.abs(chicken.xPos + chicken.eatLeftXOffset - this.pieces.greenPieces[chicken.id].xPos);
          color = 'green';
        }
      }
    } else {
      if (this.pieces.redPieces[chicken.id]) {
        closest = Math.abs(chicken.xPos + chicken.eatRightXOffset - this.pieces.redPieces[chicken.id].xPos);
        color = 'red';
      }
      if (this.pieces.bluePieces[chicken.id]) {
        if (closest
          && Math.abs(chicken.xPos + chicken.eatRightXOffset - this.pieces.bluePieces[chicken.id].xPos) < closest) {
          closest = Math.abs(chicken.xPos + chicken.eatRightXOffset - this.pieces.bluePieces[chicken.id].xPos);
          color = 'blue';
        }
        if (!closest) {
          closest = Math.abs(chicken.xPos + chicken.eatRightXOffset - this.pieces.bluePieces[chicken.id].xPos);
          color = 'blue';
        }
      }
      if (this.pieces.greenPieces[chicken.id]) {
        if (closest
          && Math.abs(chicken.xPos + chicken.eatRightXOffset - this.pieces.greenPieces[chicken.id].xPos) < closest) {
          closest = Math.abs(chicken.xPos + chicken.eatRightXOffset - this.pieces.greenPieces[chicken.id].xPos);
          color = 'green';
        }
        if (!closest) {
          closest = Math.abs(chicken.xPos + chicken.eatRightXOffset - this.pieces.greenPieces[chicken.id].xPos);
          color = 'green';
        }
      }
    }
    return { color, isWithinEatingDistance: closest <= chicken.speed };
  }

  setScreenWidth(newWidth) {
    this.screenWidth = newWidth;
    this.chickens.forEach(chicken => {
      chicken.screenWidth = newWidth; // eslint-disable-line no-param-reassign
    });
  }
}
