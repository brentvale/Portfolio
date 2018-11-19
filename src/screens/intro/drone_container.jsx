import React, { Component } from 'react';
import indexOf from 'lodash/indexOf';
import filter from 'lodash/filter';

const DRONE_IMAGE_HEIGHT = 100; // height set in class .drone-hovering

// KEY CODES
// 37 => 'left'
// 38 => 'up'
// 39 => 'right'
// 40 => 'down'

//original image width - 1600, height = 2160
const BOUNDARIES_HEIGHT = 550; // based off dimensions of original image
const BOUNDARIES_FROM_BOTTOM = 200; // "    "   "

class DroneContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keysDown: [],
      position: {
        x: props.windowWidth/2,
        y: props.backgroundHeight / 2160 * BOUNDARIES_HEIGHT / 2,
      },
    };
  }

  componentDidMount(){
    window.addEventListener('keydown', this.handleKeyDowns);
    window.addEventListener('keyup', this.handleKeyUps);
    this.animateScene();
  }

  componentWillUnmount(){
    window.removeEventListener('keydown', this.handleKeyDowns);
    window.removeEventListener('keyup', this.handleKeyUps);
    clearInterval(this.animationInterval);
  }

  animateScene = () => {
    this.animationInterval = setInterval(() => {
      let top = this.state.position.y;
      let left = this.state.position.x;

      // 65, 87, 68, 83 => A W D S
      // 74, 73, 76, 75 => J I L K
      //HORIZONTAL MOVEMENT
      if(indexOf(this.state.keysDown, 65) !== -1){ // left
        left = left < DRONE_IMAGE_HEIGHT/2 ? 100 : left - 10;
      }
      if(indexOf(this.state.keysDown, 68) !== -1){ // right
        left = left > this.props.windowWidth - DRONE_IMAGE_HEIGHT/2 ? this.props.windowWidth - 100 : left + 10;
      }

      // VERTICAL MOVEMENT
      if(indexOf(this.state.keysDown, 87) !== -1){ // up
        top = top < -1000 ? -900 : top - 10;
      }
      if(indexOf(this.state.keysDown, 83) !== -1){ // down
        top = top > 1000 ? 900 : top + 10;
      }

      if(this.state.keysDown.length === 0){
        //add some wobble
      }

      this.setState({ position: { x: left, y: top }}, () => {
        this.forceUpdate();
      });
    }, 16);
  };

  handleKeyDowns = (e) => {
    const keysDown = this.state.keysDown.slice(0);
    if(indexOf(keysDown, e.keyCode) === -1){
      keysDown.push(e.keyCode);
    }
    this.setState({ keysDown });
  };

  handleKeyUps = (e) => {
    this.setState({ keysDown: filter(this.state.keysDown, o => o !== e.keyCode) })
  };

  shouldComponentUpdate(nextProps){
    if(this.props.windowWidth !== nextProps.windowWidth){
      return true;
    }
    return false;
  }

  componentDidUpdate(prevProps){
    if(prevProps.windowWidth !== this.props.windowWidth){
      this.setState({ position:
        {
          x: this.props.windowWidth/2,
          y: this.props.backgroundHeight / 2160 * BOUNDARIES_HEIGHT / 2,
        }
      }, () => {
        this.forceUpdate();
      });
    }
  }

  render() {
    const droneBoundariesHeight = this.props.backgroundHeight / 2160 * BOUNDARIES_HEIGHT;
    const droneBoundariesFromBottom = this.props.backgroundHeight / 2160 * BOUNDARIES_FROM_BOTTOM;
    return (
      <div className={'drone-boundaries'}
           style={{
             height: droneBoundariesHeight,
             paddingBottom: droneBoundariesFromBottom,
           }}>
        <div
          className={'drone-propellers drone-hovering'}
          style={{
            // top: this.state.position.y - .5*DRONE_IMAGE_HEIGHT,
            left: this.state.position.x - .5*DRONE_IMAGE_HEIGHT,
          }}
        />
        <div id={'skypixelContainer'}>
          <a
            href={'https://www.skypixel.com/users/brentvale_user'}
            target={'_blank'}
            rel={'noopener noreferrer'}
          >
            SKYPIXEL
          </a>
        </div>
      </div>
    );
  }
}
export default DroneContainer;
