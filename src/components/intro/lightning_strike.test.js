import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import LightningStrike from './lightning_strike';

describe('LightningStrike', () => {
	it('renders without crashing', () => {
		shallow(<LightningStrike />)
	})
});