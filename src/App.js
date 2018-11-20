import React, { Component } from 'react';
import debounce from 'lodash/debounce';

import RobotChickens from './screens/chickens/robot_chickens';
import WorkExperience from './screens/work/work_experience';
import IntroSectionContainer from './screens/intro/section_container';
import Footer from './screens/footer';
import { isMobile } from './utils/isMobile';

import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			backgroundHeight: null,
			windowWidth: null
		};
	}
	
	componentDidMount(){
		window.addEventListener('resize', debounce(this.handleResizeBackground.bind(this), 200));
		this.handleResizeBackground();
		this.setState({ isMobile: isMobile() });
	}

	componentWillUnmount(){
		window.removeEventListener('resize', this.handleResizeBackground);
	}
	
	handleResizeBackground = () => {
		const windowWidth = window.innerWidth;
		//1600width x 2160 height = 74%
		const heightOfExpandingDiv = (windowWidth < 740) ? 1000 : 1.35*windowWidth;
		this.setState({ backgroundHeight: heightOfExpandingDiv, windowWidth: windowWidth });
	}
	
  render() {
    return (
      <div className="App">
				<IntroSectionContainer backgroundHeight={this.state.backgroundHeight}
															 windowWidth={this.state.windowWidth}/>

				<RobotChickens windowWidth={this.state.windowWidth}/>

				<WorkExperience />

				<Footer />
      </div>
    );
  }
}

export default App;
