import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import SocialMediaIcon from './social_media_icon';

describe('SocialMediaIcon', () => {
	it('renders without crashing', () => {
	  shallow(<SocialMediaIcon />);
	});

	it('should start with hovering as false', () => {
	    const wrapper = shallow(<SocialMediaIcon/>);
	    expect(wrapper.state('hovering')).to.equal(false);
	});
	
	it('should add the class spin when hovering', () => {
	    const wrapper = shallow(<SocialMediaIcon/>);
			wrapper.instance().handleOnMouseEnter();
	    expect(wrapper.state('hovering')).to.equal(true);
	});
});
