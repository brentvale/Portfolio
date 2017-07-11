import React, {Component} from 'react';

class LightningStrike extends Component{
	constructor(){
		super();
		this.state = {
			lightningWidth: null,
			lightningHeight: null,
			lightningTop: null,
			lightningBackPos: null
		}
		this.handleLightningStrike = this.handleLightningStrike.bind(this);
		this.handleResizeLightning = this.handleResizeLightning.bind(this);
		this.updateLightningBackgroundPosition = this.updateLightningBackgroundPosition.bind(this);
	}
	
	componentDidMount(){
		let that = this;
		this.interval = setInterval(that.handleLightningStrike, 3000);
		this.handleResizeLightning();
		window.addEventListener('resize', this.handleResizeLightning);
	}
	
	componentWillUnmount(){
		window.removeEventListener('resize', this.handleResizeLightning);
	}
	
	handleLightningStrike(){
		setTimeout(() => {this.updateLightningBackgroundPosition(" 0 14.28%")}, 75);
		setTimeout(() => {this.updateLightningBackgroundPosition(" 0 28.57%")}, 150);
		setTimeout(() => {this.updateLightningBackgroundPosition(" 0 42.85%")}, 225);
			
		setTimeout(() => {this.updateLightningBackgroundPosition(" 0 28.57%")}, 300);
		setTimeout(() => {this.updateLightningBackgroundPosition(" 0 42.85%")}, 375);
			
		setTimeout(() => {this.updateLightningBackgroundPosition(" 0 28.57%")}, 450);
		setTimeout(() => {this.updateLightningBackgroundPosition(" 0 42.85%")}, 525);
	}
	
	handleResizeLightning(){
		const windowWidth = window.innerWidth;
		//image is made up of 8 frames => height is 1/8 width
		const height = windowWidth/8;
		//ratio of width to height of background image = 1600/2160
		
		let top;
		switch(true){
		case windowWidth < 768:
			top = 750;
			break;
		case (windowWidth > 768 && windowWidth < 929):
			top = 780;
			break;
		case windowWidth >= 929:
			top = windowWidth*0.83;
			break;
		}
		
		this.setState({lightningWidth: windowWidth, lightningHeight: height, lightningTop: top});
	}
	
	updateLightningBackgroundPosition(backPos){
		this.setState({lightningBackPos: backPos});
	}
	
	render(){
		return(
			<div className="lightning" 
					 style={{	height: `${this.state.lightningHeight}px`, 
						 				width: `${this.state.lightningWidth}px`, 
						 				top: `${this.state.lightningTop}px`, 
						 				backgroundPosition: this.state.lightningBackPos
					 				}}>
			</div>
		)
	}
}

export default LightningStrike;