import React, { Component } from 'react';
import { map } from 'lodash';

const HORSE_MOVE_DISTANCE = 4; // pixel horse moves per interval
const HORSE_SPRITE_INTERVAL_DURATION = 40;

export default class HorseRide extends Component {
  constructor() {
    super();
    this.state = {
      left: 0,
      windowWidth: 0,
    };
  }

  shouldComponentUpdate(nextProps){
    if(this.props.windowWidth !== nextProps.windowWidth){
      return true;
    }
    return false;
  }

  componentDidUpdate(nextProps){
    if(this.props.windowWidth !== nextProps.windowWidth){
      this.updateDimensions();
    }
  }

  startHorseTimer = () => {
    this.horseInterval = setInterval(() => {
      this.setState({
        left: (this.state.left < this.props.windowWidth) ? this.state.left + HORSE_MOVE_DISTANCE : 0,
      }, () => {
        this.forceUpdate();
      });
    }, HORSE_SPRITE_INTERVAL_DURATION);
  };

  updateDimensions = () => {
    if (this.horseInterval) {
      clearInterval(this.horseInterval);
    }
    this.setState({
      windowWidth: window.innerWidth,
    }, () => {
      this.startHorseTimer();
    });
  };

  render() {
    return (
      <div style={container}>
        <div
          id={'horseSprite'}
          style={{ left: this.state.left }}
        />
      </div>
    );
  }
}

const container = {
  position: 'relative',
  width: '100%',
  height: '40px',
};