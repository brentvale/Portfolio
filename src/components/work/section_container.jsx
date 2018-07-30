import React, {Component} from 'react';
import ProgrammingStackContainer from './programming_stack_container';
import WorkExperience from './work_experience';

export default class WorkSectionContainer extends Component{
	constructor(){
		super();
		this.state = {
			selectedTechnologies: []
		}
		this.addSelectedTechnology = this.addSelectedTechnology.bind(this);
		this.removeSelectedTechnology = this.removeSelectedTechnology.bind(this);
	}
	
	addSelectedTechnology(technology){
		const newState = this.state.selectedTechnologies.slice(0);
		newState.push(technology);
		this.setState({selectedTechnologies: newState});
	}
	
	removeSelectedTechnology(technology){
		const newState = this.state.selectedTechnologies.filter((techName) => {
			if(techName !== technology){
				return techName;
			}
		});
		this.setState({selectedTechnologies: newState});	
	}

	renderProgrammingStack = () => (
		<ProgrammingStackContainer addSelectedTechnology={this.addSelectedTechnology}
			removeSelectedTechnology={this.removeSelectedTechnology}
			selectedTechnologies={this.state.selectedTechnologies}/>
	);
	
	render(){
		return(
			<div>
				<WorkExperience />
			</div>
		);
	}
};