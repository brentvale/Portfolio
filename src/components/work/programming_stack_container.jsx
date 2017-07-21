import React, {Component} from 'react';
import ProgrammingStackModule from './programming_stack_module';

export default class ProgrammingStackContainer extends Component{
	render(){
		return(
			<div style={{position:"relative"}}>
				<ProgrammingStackModule id="React"/>
				<ProgrammingStackModule id="Jest"/>
				<ProgrammingStackModule id="Mocha"/>
				<ProgrammingStackModule id="Chai"/>
				<ProgrammingStackModule id="Enzyme"/>
				<ProgrammingStackModule id="Express"/>
				<ProgrammingStackModule id="Rails"/>
				<ProgrammingStackModule id="Ruby"/>
				<ProgrammingStackModule id="Rspec"/>
				<ProgrammingStackModule id="Java"/>
				<ProgrammingStackModule id="Python"/>
				<ProgrammingStackModule id="Photoshop"/>
			</div>);
	}
};