import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { App } from '../src/containers/App';
import sinon from 'sinon';

function setup() {
  const props = {
    addComponent: sinon.spy()
  }

  const enzymeWrapper = shallow(<App {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', function() {
  describe('App: ', function() {
    it('should render itself and subcomponents', function() {
      const { enzymeWrapper } = setup()

      expect(enzymeWrapper.find('.App')).to.have.length(1)
    });
  })

//   it("contains spec with an expectation", function() {
//     expect(shallow(<Foo />).is('.foo')).to.equal(true);
//   });

//   it("contains spec with an expectation", function() {
//     expect(mount(<Foo />).find('.foo').length).to.equal(1);
//   });
});