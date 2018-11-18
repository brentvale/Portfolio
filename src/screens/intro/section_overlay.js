import React, { Component } from 'react';

export default class IntroSectionOverlay extends Component {
  render() {
    const { backgroundHeight, windowWidth } = this.props;

    return (
      <div className="App-header-overlay" style={{ height: backgroundHeight, width: windowWidth }}>
        <p style={{ fontSize: 40, color: 'white', position: 'absolute', top: backgroundHeight/2.5, zindex: 2 }}>
          TEXT IN LOWER LAYER
        </p>
      </div>
    );
  }
}