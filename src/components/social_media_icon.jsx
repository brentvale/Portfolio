import React, { Component } from 'react';

class SocialMediaIconDisplay extends Component{
	constructor(){
		super();
		this.state = {
			hovering: false
		}
		this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
		this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
	}
	
	handleOnMouseEnter(){
		this.setState({hovering:true});
	}
	
	handleOnMouseLeave(){
		this.setState({hovering:false});
	}
	
	render(){
		const {href, id, altText} = this.props;
		const klassName = (this.state.hovering) ? "crate spin" : "crate unspin";
		return(
			<a 	href={href} 
					alt={altText}
					target="_blank" >
	      <div id={id} 
							className={klassName} 
							onMouseEnter={this.handleOnMouseEnter} 
							onMouseLeave={this.handleOnMouseLeave}>
	        <div className="face one">
	        </div>
	        <div className="face two">
	        </div>
	        <div className="face three">
	        </div>
	        <div className="face four">
	        </div>
	        <div className="face five">
	        </div>
	        <div className="face six">
	        </div>
	      </div>
	    </a>)
	}
}

export default SocialMediaIconDisplay;