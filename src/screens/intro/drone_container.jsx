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
  }

  componentWillUnmount(){
    window.removeEventListener('keydown', this.handleKeyDowns);
    window.removeEventListener('keyup', this.handleKeyUps);
  }

  handleKeyDowns = (e) => {
    const keysDown = this.state.keysDown.slice(0);
    keysDown.push(e.keyCode);
    this.setState({ keysDown });
  };

  handleKeyUps = (e) => {
    this.setState({ keysDown: filter(this.state.keysDown, o => o === e.keyCode) })
  };

  shouldComponentUpdate(nextProps){
    if(this.props.windowWidth !== nextProps.windowWidth){
      return true;
    }
    return false;
  }

  componentDidUpdate(prevProps, prevState){
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

  handlePositionFromKeysDown = () => {
    if(indexOf(this.state.keysDown, 37) !== -1){

    }
    if(this.state.keysDown.length === 0){
      //add some wobble
    }
    return {
      top: this.state.position.y - .5 * DRONE_IMAGE_HEIGHT,
      left: this.state.position.x - .5 * DRONE_IMAGE_HEIGHT,
    };
  };

  render() {
    const { top, left } = this.handlePositionFromKeysDown();
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
          style={{ top, left }}
        />
      </div>
    );
  }
}
export default DroneContainer;
