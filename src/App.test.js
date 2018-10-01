import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import App from './App';

import WorkSectionContainer from './components/work/section_container';
import IntroSectionContainer from './components/intro/section_container';

it('renders without crashing', () => {
  shallow(<App />);
});

describe('App', () => {
  it('should render intro section', () => {
    shallow(<IntroSectionContainer />);
  });

  it('should render work section', () => {
    shallow(<WorkSectionContainer />);
  });
});
