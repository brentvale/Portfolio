import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import WorkSectionContainer from './screens/work/section_container';
import IntroSectionContainer from './screens/intro/section_container';

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
