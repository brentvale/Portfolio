import React, {Component} from 'react';

let ANIMATION_INTERVAL = 2000; 
//time for drone to move away and return to center
//if animation interval is changed, likely will need to update classes that define the animations
//.drone-container, .drone-container-hovering, .avoid-left, .avoid-right

class DroneContainer extends Component{
	constructor(){
		super();
		this.state = {
			mouseHovered: false
		}
		this.handleDroneAvoid = this.handleDroneAvoid.bind(this);
	}
	
	handleDroneAvoid(e){
		setTimeout(() => {
			this.setState({mouseHovered: false});
		}, ANIMATION_INTERVAL)
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