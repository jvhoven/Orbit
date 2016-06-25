const deepFreeze = require('deep-freeze');
const expect = require('expect');
const projects = require('../index');

describe('Project', () => {
    describe('add_project', () => {
        it('should add a new project without modifying state', () => {
            const stateBefore = [];
            const action = {
                type: 'ADD_PROJECT',
                id: 0,
                text: 'Learn Redux'
            };
            const stateAfter = [{
                id: 0,
                text: 'Learn Redux',
                completed: false
            }];
            
            deepFreeze(stateBefore);
            deepFreeze(action);
            
            expect(
                projects(stateBefore, action)
            ).toEqual(stateAfter)
       });
       it('should remove a project without modifying state', () => {
          const stateBefore = [{
              id: 0,
              text: 'Learn Redux',
              completed: false
          }]; 
          const action = {
              type: 'REMOVE_PROJECT',
              id: 0
          };
          const stateAfter = [];
          
          deepFreeze(stateBefore);
          deepFreeze(action);
          
          expect(
              projects(stateBefore, action)
          ).toEqual(stateAfter);
       });
   }) 
});
