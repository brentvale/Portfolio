import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';

import ProgrammingStackContainer from './programming_stack_container';
import ProgrammingStackModule from './programming_stack_module';

it('renders without crashing', () => {
	shallow(<ProgrammingStackContainer />)
});

describe('ProgrammingStackContainer', () => {
	it('renders React Jest Mocha Chai Enzyme Express Rails Ruby Rspec Photoshop Java Python', () => {
		const wrapper = shallow(<ProgrammingStackContainer />);
		expect(wrapper.containsAllMatchingElements([
			<ProgrammingStackModule id="React"/>,
			<ProgrammingStackModule id="Jest"/>,
			<ProgrammingStackModule id="Mocha"/>,
			<ProgrammingStackModule id="Chai"/>,
			<ProgrammingStackModule id="Enzyme"/>,
			<ProgrammingStackModule id="Express"/>,
			<ProgrammingStackModule id="Rails"/>,
			<ProgrammingStackModule id="Ruby"/>,
			<ProgrammingStackModule id="Rspec"/>,
			<ProgrammingStackModule id="Java"/>,
			<ProgrammingStackModule id="Python"/>,
			<ProgrammingStackModule id="Photoshop"/>
		])).to.equal(true);
	});
})