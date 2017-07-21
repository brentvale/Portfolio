import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import DroneContainer from './drone_container';

describe('DroneContainer', () => {
	it('renders without crashing', () => {
		shallow(<DroneContainer />)
	})
	
	it('should evade users mouse', () => {
		const wrapper = shallow(<DroneContainer />);
		const drone = wrapper.find('.drone-container');
		drone.simulate('mouseEnter');
		expect(wrapper.state('mouseHovered')).to.equal(true);
	});
});