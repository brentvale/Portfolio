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
})