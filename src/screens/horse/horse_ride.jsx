import React, { Component } from 'react';

const HORSE_MOVE_DISTANCE = 4; // pixel horse moves per interval
const HORSE_SPRITE_INTERVAL_DURATION = 40;

export default class HorseRide extends Component {
  constructor() {
    super();
    this.state = {
      left: 0,
    };
  }

  componentDidMount(){
    this.startHorseTimer();
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