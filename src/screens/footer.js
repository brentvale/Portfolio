import React, { Component } from 'react';

const container = {
  width: '100%',
  borderTop: '1px solid #e9e9e9'
};
const bottomSection = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: 200,
}

class Footer extends Component {
  render(){
    return(
      <div style={container}>
        <div style={bottomSection}>
          <a
            href={'https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fbrentvale.github.io%2Fportfolio'}
            target={'_blank'}
            rel={'noopener noreferrer'}
          >
            Speed Matters
          </a>
        </div>
      </div>
    )
  }
}

export default Footer;