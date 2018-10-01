import React, { Component } from 'react';

import WorkExperience from './components/work/work_experience';
import IntroSectionContainer from './components/intro/section_container';
import Footer from './components/footer';

import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			backgroundHeight: null,
			windowWidth: null
		}
		this.handleResizeBackground = this.handleResizeBackground.bind(this);
	}
	
	componentDidMount(){
		window.addEventListener('resize', this.handleResizeBackground);
		this.handleResizeBackground();
	}
	
	componentWillUnmount(){
		window.addEventListener('resize', this.handleResizeBackground);
	}
	
	handleResizeBackground(){
		const windowWidth = window.innerWidth;
		//1600width x 2160 height = 74%
		const heightOfExpandingDiv = (windowWidth < 740) ? 1000 : 1.35*windowWidth;
		this.setState({backgroundHeight: heightOfExpandingDiv, windowWidth: windowWidth});
	}
	
  render() {
    return (
      <div className="App">
				<IntroSectionContainer backgroundHeight={this.state.backgroundHeight} windowWidth={this.state.windowWidth}/>
			
				<WorkExperience />

				<Footer />
      </div>
    );
  }
}

export default App;
