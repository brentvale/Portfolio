import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import DroneContainer from './drone_container';

describe('DroneContainer', () => {
	it('renders without crashing', () => {
		shallow(<DroneContainer />)
	})
});