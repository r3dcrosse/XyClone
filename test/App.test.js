import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { App } from '../src/containers/App';

describe("App", function() {
  it("has a classname of app", function() {
    expect(shallow(<App />).contains(<div className="App" />)).to.equal(true);
  });

//   it("contains spec with an expectation", function() {
//     expect(shallow(<Foo />).is('.foo')).to.equal(true);
//   });

//   it("contains spec with an expectation", function() {
//     expect(mount(<Foo />).find('.foo').length).to.equal(1);
//   });
});