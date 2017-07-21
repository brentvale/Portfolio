import React, {Component} from 'react';

import SocialMediaIcon from './social_media_icon';
import LightningStrike from './lightning_strike';
import DroneContainer from './drone_container';

import bv_icon from '../../images/horseshoe_brent_taylor_vale_200sq.png';

export default class IntroSectionContainer extends Component{
	constructor(props){
		super(props);
	}
	
	render(){
		const {backgroundHeight, windowWidth} = this.props;
		
		return(
			<div className="App-header-container" style={{height:backgroundHeight}}>
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
			
				<LightningStrike backgroundHeight={backgroundHeight} windowWidth={windowWidth}/>
			
				<DroneContainer />
			</div>
		)
	}
};