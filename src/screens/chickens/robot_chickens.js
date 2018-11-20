import React, { Component } from 'react';
import forEach from 'lodash/forEach';
import map from 'lodash/map';

import Chicken from '../../js/Chicken';

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
            new Chicken({ screenWidth: this.props.windowWidth, yPos: 10 }),
            new Chicken({ screenWidth: this.props.windowWidth, yPos: 8 }),
            new Chicken({ screenWidth: this.props.windowWidth, yPos: 6 }),
            new Chicken({ screenWidth: this.props.windowWidth, yPos: 4 }),
            new Chicken({ screenWidth: this.props.windowWidth, yPos: 1 }),
          ],
        }, () => {
          this.forceUpdate();
          this.animateX();
        });
      } else {
        forEach(this.state.chickens, chicken => {
          chicken.setScreenWidth(this.props.windowWidth);
        })
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
        <h2>Feed my robot chickens!</h2>
        <div style={{ height: '50px' }} />
        <div className={'inner'}>
          {map(this.state.chickens, (chicken, idx) => {
            return <div key={idx.toString()}
                        style={{ left: chicken.xPos }}
                        className={chicken.getKlassName()}/>
          })}
        </div>

      </div>
    );
  }
}
export default RobotChickens;
