import React, { Component } from 'react';
import RoRsrc from './rubyonrails.png';

class RoRLogo extends Component {
  render(){
    return(
      <div>
        <img src={RoRsrc} alt={'Ruby on Rails'}  style={{ height: 40, width: 40 }}/>
      </div>
    )
  }
};

export default RoRLogo;



