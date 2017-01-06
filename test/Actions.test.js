import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import * as Actions from '../src/actions/EditingActions'

import Sidebar from '../src/components/Sidebar'

describe('Actions', function() {
    describe('Add action: ', function() {
        it('should have a type of ADD_COMPONENT ', function () {
            expect(Actions.addComponent().type)
                .to.equal('ADD_COMPONENT');
        });
        
        it('should return the component type', function() {
            let component = 'component';

            expect(Actions
                .addComponent(component).componentType)
                .to.equal(component);
        });

        // it('simulates click events', () => {
        //     const onButtonClick = sinon.spy();
        //     const wrapper = mount(
        //     <Sidebar onSidebarClick={onButtonClick} />
        //     );
        //     wrapper.find('button').simulate('click');
        //     expect(onButtonClick).to.have.property('callCount', 1);
        // });
    });
    
    describe('Edit action: ', function() {
        it('should have a type of EDIT_COMPONENT ', function () {
            expect(Actions.editComponent().type)
                .to.equal('EDIT_COMPONENT');
        });
        
        it('should have id of the selected component', function() {
            it('should return the component type', function() {
            let component = 'component';

            expect(Actions
                .editComponent(component).componentId)
                .to.equal(component);
            });
        }) 
    })
});