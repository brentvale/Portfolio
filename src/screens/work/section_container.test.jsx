import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import WorkSectionContainer from './section_container';

import WorkExperience from './work_experience';

it('renders without crashing', () => {
  shallow(<WorkSectionContainer />);
});
