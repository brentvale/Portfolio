import React, { Component } from 'react';
import map from 'lodash/map';

import Chicken from '../../js/Chicken';
import Field from '../../js/Field';

const ANIMATION_INTERVAL = 32;

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
          this.tossRecycleable();
          this.animateX();
        });
      } else {
        this.tossRecycleable();
        this.animateX();
      }
    }
  }

  tossRecycleable = (color = 'red') => {
    this.state.field.setScreenWidth(this.props.windowWidth);
    this.state.field.tossRecycleable(color);
  };

  componentWillUnmount(){
    clearInterval(this.animationInterval);
  }

  animateX = () => {
    if(this.animationInterval){
      clearInterval(this.animationInterval);
    }
    this.animationInterval = setInterval(() => {
      this.state.field.moveChickens();
      this.forceUpdate();
    }, ANIMATION_INTERVAL);
  };

  render() {
    return (
      <div id={'chickenContainer'}>
        <h2>Feed my robot chickens!</h2>

        {Boolean(this.state.field) &&
          <CansContainer tossRecycleable={this.tossRecycleable}
                         blueUnavailable={Object.keys(this.state.field.pieces.bluePieces).length}
                         greenUnavailable={Object.keys(this.state.field.pieces.greenPieces).length}
                         redUnavailable={Object.keys(this.state.field.pieces.redPieces).length}
          />}


        <div style={{ height: '50px' }} />

        <div className={'inner'}>
          {map(this.state.chickens, chicken => {
            return <div key={chicken.id.toString()}
                        style={{ left: chicken.xPos }}
                        className={chicken.getKlassName()}/>
          })}
          {Boolean(this.state.field) &&
            map(this.state.field.pieces, obj => {
              return map(obj, (chickenObj, chickenId) => {
                return <div key={chickenId}
                            className={`recycle-depth-${chickenObj.yPos} recycle-piece recycle-background-${chickenObj.color}`}
                            style={{ left: chickenObj.xPos }}/>
              })
          })}

        </div>
      </div>
    );
  }
}

const CansContainer = ({
  tossRecycleable,
  blueUnavailable,
  greenUnavailable,
  redUnavailable,
}) => (
  <div className={'all-cans-container'}>
    <div className={'can-container'}>
      <div onClick={() => { tossRecycleable('blue') }}
           className={`can ${blueUnavailable ? 'can-inactive' : ''} blue-can${blueUnavailable ? '-inactive' : ''}`}/>
    </div>
    <div className={'can-container'}>
      <div onClick={() => { tossRecycleable('green') }}
           className={`can ${greenUnavailable ? 'can-inactive' : ''} green-can${greenUnavailable ? '-inactive' : ''}`}/>
    </div>
    <div className={'can-container'}>
      <div onClick={() => { tossRecycleable('red') }}
           className={`can ${redUnavailable ? 'can-inactive' : ''} red-can${redUnavailable ? '-inactive' : ''}`}/>
    </div>
  </div>
);

export default RobotChickens;
