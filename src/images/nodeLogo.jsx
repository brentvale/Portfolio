import React, { Component } from 'react';
import nodeSrc from './node.png';

class NodeLogo extends Component {
  render() {
    return (
      <div>
        <img src={nodeSrc} alt="node.js" style={{ height: 40, width: 40 }} />
      </div>
    );
  }
}

export default NodeLogo;
