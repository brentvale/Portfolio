import React, { Component } from 'react';

import SocialMediaIcon from './components/social_media_icon';
import LightningStrike from './components/lightning_strike';
import DroneContainer from './components/drone_container';
import bv_icon from './images/horseshoe_brent_taylor_vale_200sq.png';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			backgroundHeight: null,
			windowWidth: null
		}
		this.handleResizeBackground = this.handleResizeBackground.bind(this);
	}
	
	componentDidMount(){
		window.addEventListener('resize', this.handleResizeBackground);
		this.handleResizeBackground();
	}
	
	componentWillUnmount(){
		window.addEventListener('resize', this.handleResizeBackground);
	}
	
	handleResizeBackground(){
		const windowWidth = window.innerWidth;
		//1600width x 2160 height = 74%
		const heightOfExpandingDiv = (windowWidth < 740) ? 1000 : 1.35*windowWidth;
		this.setState({backgroundHeight: heightOfExpandingDiv, windowWidth: windowWidth});
	}
	
  render() {
    return (
      <div className="App" style={{height:this.state.backgroundHeight}}>
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
						
				<LightningStrike backgroundHeight={this.state.backgroundHeight} windowWidth={this.state.windowWidth}/>
				<DroneContainer />
      </div>
    );
  }
}

export default App;
