import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
import {spy} from 'sinon';

import ProgrammingStackComponent from './programming_stack_component';

it('renders without crashing', () => {
	shallow(<ProgrammingStackComponent />);
})

describe('ProgrammingStackComponent', () => {
	it('has a selected class if component is selected', () => {
		const wrapper = shallow(<ProgrammingStackComponent />);
		wrapper.setProps({selected: true});
		
		expect(wrapper.find('.technology-component').hasClass('selected')).to.equal(true);
	});
	
	it('should call addSelectedComponent when clicked if the component is UNSELECTED', () => {
		const unSelectedComponentSpy = spy();
		const wrapper = shallow(<ProgrammingStackComponent addSelectedTechnology={unSelectedComponentSpy}/>);
		wrapper.setProps({selected: false});
		const container = wrapper.find('.technology-component');
		
		container.simulate('click');
		expect(unSelectedComponentSpy.calledOnce).to.be.true;
	});
	
	it('should call removeSelectedComponent when clicked if the component is SELECTED', () => {
		const selectedComponentSpy = spy();
		const wrapper = shallow(<ProgrammingStackComponent removeSelectedTechnology={selectedComponentSpy}/>);
		wrapper.setProps({selected: true});
		const container = wrapper.find('.technology-component');
		
		container.simulate('click');
		expect(selectedComponentSpy.calledOnce).to.be.true;
	})
});
