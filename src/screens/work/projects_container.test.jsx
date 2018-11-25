import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import ProjectsContainer from './projects_container';

it('renders without crashing', () => {
  shallow(<ProjectsContainer />);
});
