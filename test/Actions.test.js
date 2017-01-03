import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import * as Actions from '../src/actions/editingActions'

describe('Actions', function() {
    it('has an add action', function () {
        describe('addComponent', function() {
            expect(Actions.addComponent().type).to.equal('ADD_COMPONENT');
        });
    });
});