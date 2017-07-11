import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import SocialMediaIcon from './components/social_media_icon';

it('renders without crashing', () => {
  shallow(<App />);
});


describe('App', () => { 
	it('should render all 5 social media icons', () => {
	  const wrapper = shallow(<App/>);
	  expect(wrapper.containsAllMatchingElements([
	    <SocialMediaIcon id="linkedIn"/>,
	    <SocialMediaIcon id="twitter"/>,
			<SocialMediaIcon id="github"/>,
			<SocialMediaIcon id="youTube"/>,
			<SocialMediaIcon id="instagram"/>
	  ])).to.equal(true);
	});
});
