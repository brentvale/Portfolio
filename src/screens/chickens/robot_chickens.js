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
    }, 32);
  };

  render() {
    return (
      <div id={'chickenContainer'}>

        <h2>Feed my robot chickens!</h2>
        <p></p>

        <CansContainer tossRecycleable={this.tossRecycleable}/>

        <div style={{ height: '50px' }} />
        <div className={'inner'}>
          {map(this.state.chickens, (chicken, idx) => {
            return <div key={idx.toString()}
                        style={{ left: chicken.xPos }}
                        className={chicken.getKlassName()}/>
          })}
          {Boolean(this.state.field) &&
            map(this.state.field.pieces, (obj, chickenId) => {
              return <div key={chickenId}
                          className={`recycle-depth-${obj.yPos} recycle-piece`}
                          style={{ left: obj.xPos, backgroundColor: obj.color }}/>
          })}

        </div>
      </div>
    );
  }
}

const CansContainer = ({ tossRecycleable }) => (
  <div className={'all-cans-container'}>
    <div className={'can-container'}>
      <div onClick={() => { tossRecycleable('blue') }}
           className={'can blue-can'}/>
    </div>
    <div className={'can-container'}>
      <div onClick={() => { tossRecycleable('green') }}
           className={'can green-can'}/>
    </div>
    <div className={'can-container'}>
      <div onClick={() => { tossRecycleable('red') }}
           className={'can red-can'}/>
    </div>
  </div>
);

export default RobotChickens;
