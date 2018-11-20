import React, { Component } from 'react';
import forEach from 'lodash/forEach';
import map from 'lodash/map';

import Chicken from '../../js/Chicken';

const CHICKEN_IMAGE_WIDTH = 100;
const HALF_WIDTH = CHICKEN_IMAGE_WIDTH/2;

class RobotChickens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chickens: [],
      keysDown: [],
      xPos: props.windowWidth,
    }
  }

  shouldComponentUpdate(nextProps){
    if(this.props.windowWidth !== nextProps.windowWidth){
      return true;
    }
    return false;
  }

  componentDidUpdate(prevProps){
    if(this.props.windowWidth !== prevProps.windowWidth){
      if(!this.state.chickens.length){
        this.setState({
          chickens: [
            new Chicken({ screenWidth: this.props.windowWidth }),
            new Chicken({ screenWidth: this.props.windowWidth }),
          ],
        }, () => {
          this.forceUpdate();
          this.animateX();
        });
      }
    }
  }

  componentWillUnmount(){
    clearInterval(this.animationInterval);
  }

  animateX = () => {
    this.animationInterval = setInterval(() => {
      forEach(this.state.chickens, chicken => {
        chicken.move();
      });
      this.forceUpdate();
    }, 32);
  };

  render() {
    return (
      <div id={'chickenContainer'}>
        {map(this.state.chickens, (chicken, idx) => {
          return <div key={idx.toString()}
                      style={{ left: chicken.xPos }}
                      className={'robot-chicken robot-chicken-walking'}/>
        })}
      </div>
    );
  }
}
export default RobotChickens;
