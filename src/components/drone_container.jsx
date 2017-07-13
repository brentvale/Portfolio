import React, {Component} from 'react';

class DroneContainer extends Component{
	constructor(){
		super();
		this.state = {
			mouseHovered: false,
			//need to make sure duration in miliseconds matches up with animation timing for two classes:
			//.drone-container-hovering.avoid-left && .drone-container-hovering.avoid-right
			animationInterval: 2000
		}
		this.handleDroneAvoid = this.handleDroneAvoid.bind(this);
	}
	
	handleDroneAvoid(e){
		setTimeout(() => {
			this.setState({mouseHovered: false});
		}, this.state.animationInterval)
		this.setState({mouseHovered: true});
	}
	render(){
		let klass = "drone-container drone-container-hovering";
		if(this.state.mouseHovered){
			klass += (Math.random() < 0.50) ? " avoid-left" : " avoid-right";
		} 

		if(this.state.mouseHovered){
			return(
				<div className={klass}>
				</div>
			);
		} else {
			return(
				<div className={klass} onMouseEnter={this.handleDroneAvoid} onTouchStart={this.handleDroneAvoid}>
				</div>
			);
		}
		
	}
}
export default DroneContainer;