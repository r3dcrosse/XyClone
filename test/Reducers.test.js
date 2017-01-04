import rootReducer from '../src/reducers/editingReducer';
import { expect } from 'chai';
import { fromJS } from 'immutable';


describe('rootReducer', function() {
  it('should return the initial state', function() {
    expect(
        rootReducer(undefined, {})
    ).to.deep.equal(
        {
            components: [],
            currComponentId: null
        }
    )
  })

  it('should handle ADD_COMPONENT', function() { 
      expect(
          rootReducer(undefined, {
              type: 'ADD_COMPONENT',
              componentType: 'Navbar'
          })
      ).to.deep.equal(
              {
                  components: [
                      {
                          componentId: 0, // the id generator starts at 0 and increments by 1 
                          type: 'Navbar'
                      }
                  ],
                  currComponentId: null
              }
          )
  })
})