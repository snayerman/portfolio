var defaultState = {};

function testReducer(state = defaultState, action) {
   switch(action.type) {
      case 'TEST':
      default:
         return state;
   }
}

export default testReducer;