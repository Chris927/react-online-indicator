import React from 'react';

import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Indicator from '../index';

// Shallow Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
describe('Shallow Rendering', () => {

    it('to have `.indicator`', () => {
        const wrapper = shallow(<Indicator />);
        expect(wrapper.find('.indicator')).to.have.length(1);
    });

});

// Full DOM Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md
describe('Full DOM Rendering', () => {

});

// Static Rendered Markup
// https://github.com/airbnb/enzyme/blob/master/docs/api/render.md
describe('Static Rendered Markup', () => {

});
