import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';

import IntroSectionContainer from './section_container';
import SocialMediaIcon from './social_media_icon';

it('renders without crashing', () => {
	shallow(<IntroSectionContainer />);
})

describe('IntroSectionContainer', () => {
	it('should render all 5 social media icons', () => {
	  const wrapper = mount(<IntroSectionContainer/>);
	  expect(wrapper.containsAllMatchingElements([
	    <SocialMediaIcon id="linkedIn"/>,
	    <SocialMediaIcon id="twitter"/>,
			<SocialMediaIcon id="github"/>,
			<SocialMediaIcon id="youTube"/>,
			<SocialMediaIcon id="instagram"/>
	  ])).to.equal(true);
	});
	
	it('should render linkedIn at the top of the social media icons list', ()=> {
		const wrapper = shallow(<IntroSectionContainer/>);
		expect(wrapper.find(SocialMediaIcon).at(0).props().id).to.equal('linkedIn');
	});
	
})