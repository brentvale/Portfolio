import React, { Component } from 'react';

const container = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 50,
  width: '100%',
  height: 200,
  borderTop: '1px solid #e9e9e9'
};

class Footer extends Component {
  render(){
    return(
      <div style={container}>
        <a
          href={'https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fbrentvale.github.io%2Fportfolio'}
          target={'_blank'}
          rel={'noopener noreferrer'}
        >
          Speed Matters
        </a>
      </div>
    )
  }
}

export default Footer;