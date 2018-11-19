import React, { Component } from 'react';

import PropTypes from 'prop-types';
import SocialMediaIcon from './social_media_icon';
import LightningStrike from './lightning_strike';
import DroneContainer from './drone_container';

import bv_icon from '../../images/horseshoe_brent_taylor_vale_200sq.png';

export default class IntroSectionContainer extends Component {
  render() {
    const { backgroundHeight, windowWidth } = this.props;
    if(!backgroundHeight && !windowWidth){
      return null;
    }

    return (
      <div className={'top-section'} style={{ height: backgroundHeight }}>

        <CodingCowboyTitle />

        <SocialIcons />

        <LightningStrike backgroundHeight={backgroundHeight} windowWidth={windowWidth} />

        <DroneContainer backgroundHeight={backgroundHeight} windowWidth={windowWidth}/>
      </div>
    );
  }
}

const CodingCowboyTitle = () => (
  <div id={'title'}>
    <div>
      <h1 className="rye">coding&nbsp;</h1>
      <img src={bv_icon} alt="coding cowboy logo" />
      <h1 className="rye">&nbsp;cowboy</h1>
    </div>
  </div>
)

const SocialIcons = () => (
  <div id="socialIconsContainer" style={{ zIndex: 5 }}>
    <SocialMediaIcon id="linkedIn" href="https://www.linkedin.com/in/brentvale" altText="Brent Taylor Vale LinkedIn Profile" />
    <SocialMediaIcon id="twitter" href="https://twitter.com/ValeBrent" altText="Brent Taylor Vale Twitter Profile" />
    <SocialMediaIcon id="github" href="https://github.com/brentvale" altText="Brent Taylor Vale Github Profile" />
    <SocialMediaIcon id="youTube" href="https://www.youtube.com/channel/UCwdDBC24kbciRy2tSpO6OPA" altText="Brent Taylor Vale youTube Profile" />
    <SocialMediaIcon id="instagram" href="https://www.instagram.com/coding_cowboy/" altText="Brent Taylor Vale Instagram Profile" />
  </div>
)

IntroSectionContainer.propTypes = {
  backgroundHeight: PropTypes.number,
  windowWidth: PropTypes.number,
};
