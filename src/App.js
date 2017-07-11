import React, { Component } from 'react';

import SocialMediaIcon from './components/social_media_icon';
import LightningStrike from './components/lightning_strike';
import bv_icon from './images/horseshoe_brent_taylor_vale_200sq.png';
import './App.css';

class App extends Component {
	
	
  render() {
    return (
      <div className="App">
        <div className="App-header">
			
					<div className="App-header-icon">
						<h2 className="rye">coding&nbsp;</h2>
			      <img src={bv_icon} className="App-header-icon-image" alt="logo" />
						<h2 className="rye">&nbsp;cowboy</h2>
					</div>
					
				  <div id="socialIconsContainer">
						<SocialMediaIcon id="linkedIn" href="https://www.linkedin.com/in/brentvale" altText="Brent Taylor Vale LinkedIn Profile"/>
						<SocialMediaIcon id="twitter" href="https://twitter.com/ValeBrent" altText="Brent Taylor Vale Twitter Profile" />
						<SocialMediaIcon id="github" href="https://github.com/brentvale" altText="Brent Taylor Vale Github Profile"/>
						<SocialMediaIcon id="youTube" href="https://www.youtube.com/channel/UCwdDBC24kbciRy2tSpO6OPA" altText="Brent Taylor Vale youTube Profile"/>
						<SocialMediaIcon id="instagram" href="https://www.instagram.com/coding_cowboy/" altText="Brent Taylor Vale Instagram Profile"/>
				  </div>
						
        </div>
				<LightningStrike />
				<div style={{height:"1000px"}}></div>
      </div>
    );
  }
}

export default App;