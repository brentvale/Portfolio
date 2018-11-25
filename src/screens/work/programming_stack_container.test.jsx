import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import ProgrammingStackContainer from './programming_stack_container';
import ProgrammingStackComponent from './programming_stack_component';

it('renders without crashing', () => {
  shallow(<ProgrammingStackContainer />);
});

describe('ProgrammingStackContainer', () => {
  it('renders React Jest Mocha Chai Enzyme Express Rails Ruby Rspec Photoshop Java Python', () => {
    const wrapper = shallow(<ProgrammingStackContainer />);
    // ORDERING MATTERS -> test was failing with with improper order
    expect(wrapper.containsAllMatchingElements([
      <ProgrammingStackComponent id="React" />,
      <ProgrammingStackComponent id="Jest" />,
      <ProgrammingStackComponent id="Mocha" />,
      <ProgrammingStackComponent id="Chai" />,
      <ProgrammingStackComponent id="Enzyme" />,
      <ProgrammingStackComponent id="Express" />,
      <ProgrammingStackComponent id="Rails" />,
      <ProgrammingStackComponent id="Ruby" />,
      <ProgrammingStackComponent id="Rspec" />,
      <ProgrammingStackComponent id="Photoshop" />,
      <ProgrammingStackComponent id="Java" />,
      <ProgrammingStackComponent id="Python" />,
    ])).to.equal(true);
  });
});

describe('ProgrammingStackContainer.selectedHashFromProps', () => {
  it('should create a hash from the array of selectedTechnologies props', () => {
    const wrapper = shallow(<ProgrammingStackContainer />);
    wrapper.setProps({ selectedTechnologies: ['React', 'Jest'] });
    const generatedHash = wrapper.instance().createSelectedHashFromProps();

    expect(generatedHash).to.be.eql({ React: true, Jest: true });
  });
});
