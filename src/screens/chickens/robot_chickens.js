import React, { Component } from 'react';
import forEach from 'lodash/forEach';
import map from 'lodash/map';

import Chicken from '../../js/Chicken';
import Field from '../../js/Field';

class RobotChickens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field: null,
      chickens: [],
      keysDown: [],
      xPos: props.windowWidth,
    }
  }

  shouldComponentUpdate(nextProps){
    if (this.props.windowWidth !== nextProps.windowWidth) {
      return true;
    }
    return false;
  }

  componentDidUpdate(prevProps){
    if(this.props.windowWidth !== prevProps.windowWidth){
      if(!this.state.chickens.length){
        const chickens = [
          new Chicken({ screenWidth: this.props.windowWidth, yPos: 10 }),
          new Chicken({ screenWidth: this.props.windowWidth, yPos: 8 }),
          new Chicken({ screenWidth: this.props.windowWidth, yPos: 6 }),
          new Chicken({ screenWidth: this.props.windowWidth, yPos: 4 }),
          new Chicken({ screenWidth: this.props.windowWidth, yPos: 1 }),
        ];
        const field = new Field({ screenWidth: this.props.windowWidth, chickens });

        this.setState({
          field,
          chickens,
        }, () => {
          this.forceUpdate();
          this.tossRecycleable();
          this.animateX();
        });
      } else {
        forEach(this.state.chickens, chicken => {
          chicken.setScreenWidth(this.props.windowWidth);
        });
      }
    }
  }

  tossRecycleable = () => {
      this.state.field.tossRecycleable();
  };

  componentWillUnmount(){
    clearInterval(this.animationInterval);
  }

  animateX = () => {
    this.animationInterval = setInterval(() => {
      this.state.field.moveChickens();
      this.forceUpdate();
    }, 32);
  };

  render() {
    return (
      <div id={'chickenContainer'}>
        <h2>Feed my robot chickens!</h2>
        <div style={{ height: '50px' }} />
        <div className={'inner'}>
          <div onClick={() => { this.tossRecycleable() }}
               className={'recycleable-can'}/>
          {map(this.state.chickens, (chicken, idx) => {
            return <div key={idx.toString()}
                        style={{ left: chicken.xPos }}
                        className={chicken.getKlassName()}/>
          })}
          {Boolean(this.state.field) &&
            map(this.state.field.pieces, (pos, chickenId) => {
              return <div key={chickenId}
                          className={`recycle-depth-${pos.yPos} recycle-piece`}
                          style={{ left: pos.xPos }}/>
          })}

        </div>

      </div>
    );
  }
}
export default RobotChickens;
