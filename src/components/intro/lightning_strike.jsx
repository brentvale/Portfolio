import React, {Component} from 'react';

class LightningStrike extends Component{
	constructor(){
		super();
		this.state = {
			lightningTop: null,
			lightningBackPos: null
		}
		this.handleLightningStrike = this.handleLightningStrike.bind(this);
		this.updateLightningBackgroundPosition = this.updateLightningBackgroundPosition.bind(this);
	}
	
	componentDidMount(){
		let that = this;
		this.interval = setInterval(that.handleLightningStrike, 3000);
	}
	
	handleLightningStrike(){
		/*14.28, 28.57, 42.85, 57.14, 71.43, 85.71 */
		this.updateLightningBackgroundPosition(" 0 0%")
		setTimeout(() => {this.updateLightningBackgroundPosition(" 0 14.28%")}, 50);
		setTimeout(() => {this.updateLightningBackgroundPosition(" 0 28.57%")}, 100);
		setTimeout(() => {this.updateLightningBackgroundPosition(" 0 42.85%")}, 150);
		setTimeout(() => {this.updateLightningBackgroundPosition(" 0 57.14%")}, 200);
		setTimeout(() => {this.updateLightningBackgroundPosition(" 0 71.43%")}, 250);
		setTimeout(() => {this.updateLightningBackgroundPosition(" 0 85.71%")}, 300);
		
		setTimeout(() => {this.updateLightningBackgroundPosition(" 0 71.43%")}, 350);
		setTimeout(() => {this.updateLightningBackgroundPosition(" 0 28.57%")}, 400);
		setTimeout(() => {this.updateLightningBackgroundPosition(" 0 71.43%")}, 450);
		setTimeout(() => {this.updateLightningBackgroundPosition(" 0 85.71%")}, 500);
			
		setTimeout(() => {this.updateLightningBackgroundPosition(" 0 100%")}, 550);
	}
	
	updateLightningBackgroundPosition(backPos){
		this.setState({lightningBackPos: backPos});
	}
	
	render(){
		const {windowWidth, backgroundHeight} = this.props;
		const lightningWidth = (windowWidth < 800) ? windowWidth : 800;
		const lightningHeight = lightningWidth/8;
		
		let lightningTop;
		switch(true){
		case windowWidth < 460:
			lightningTop = backgroundHeight*48/72
			break;
		case windowWidth >= 460 && windowWidth <= 740:
			lightningTop = backgroundHeight*47/72;
			break;
		case windowWidth > 740:
			lightningTop = backgroundHeight*46/72;
			break;
		default: 
			lightningTop = backgroundHeight*46/72;
		}
		
		return(
			<div className="lightning" 
					 style={{	height: `${lightningHeight}px`, 
						 				width: `${lightningWidth}px`, 
						 				top: `${lightningTop}px`, 
						 				backgroundPosition: `${this.state.lightningBackPos}`
					 				}}>
			</div>
		)
	}
}

export default LightningStrike;