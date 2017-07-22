import React, {Component} from 'react';
import ProgrammingStackComponent from './programming_stack_component';
import PropTypes from 'prop-types';

let TECHNOLOGIES = ["React", "Jest", "Mocha", "Chai", "Enzyme", "Express", "Rails", "Ruby", "Rspec", "Photoshop", "Java", "Python"];

export default class ProgrammingStackContainer extends Component{
	constructor(props){
		super(props);
		this.createSelectedHashFromProps = this.createSelectedHashFromProps.bind(this);
	}
	
	createSelectedHashFromProps(){
		let hash = {};
		if(typeof this.props.selectedTechnologies !== "undefined"){
			this.props.selectedTechnologies.map((technology) => {
				hash[technology] = true;
			});
		}
		return hash;
	}
	
	render(){
		const { addSelectedTechnology, removeSelectedTechnology } = this.props;

		const selectedHash = this.createSelectedHashFromProps();

		return(
			<div>
				{TECHNOLOGIES.map((technology,idx) => {
					return <ProgrammingStackComponent  id={technology} 
																						 key={idx}
																				  	 addSelectedTechnology={addSelectedTechnology} 
																						 removeSelectedTechnology={removeSelectedTechnology}
																						 selected={selectedHash[technology]} />
				})}
			</div>);
	}
};

ProgrammingStackContainer.PropTypes = {
	addSelectedTechnology: PropTypes.func.isRequired,
	removeSelectedTechnology: PropTypes.func.isRequired,
	selectedTechnologies: PropTypes.array.isRequired
}