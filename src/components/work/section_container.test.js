import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
import WorkSectionContainer from './section_container';

import ProgrammingStackContainer from './programming_stack_container';

it('renders without crashing', () => {
	shallow(<WorkSectionContainer />)
});

describe('WorkSectionContainer', () => {
	it('should render ProgrammingStackContainer', () => {
		const wrapper = mount(<WorkSectionContainer />);
		
		expect(wrapper.find(ProgrammingStackContainer)).to.have.length(1);
	});
	
	it('should start with an empty list of selected technologies', () => {
		const wrapper = shallow(<WorkSectionContainer />);
		
		expect(wrapper.state('selectedTechnologies')).to.eql([]);
	});
	
	it('adds a selected technology to selectedTechnologies', () => {
		const wrapper = shallow(<WorkSectionContainer />);
		wrapper.instance().addSelectedTechnology('React');
		
		expect(wrapper.state('selectedTechnologies')).to.eql(['React']);
	});
	
	it('removes a technology from selectedTechnologies', () => {
		const wrapper = shallow(<WorkSectionContainer />);
		wrapper.setState({selectedTechnologies: ['React', 'Jest']});
		
		wrapper.instance().removeSelectedTechnology('React');
		
		expect(wrapper.state('selectedTechnologies')).to.eql(['Jest']);
	});
})



