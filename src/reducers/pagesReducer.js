var defaultState = {
      home: true,
      skills: false,
      projects: false,
      about: false
};

function PagesReducer(state = defaultState, action) {
	let tmpState = Object.assign({}, state);
	
	switch(action.type) {
		case 'SELECT_PAGE':
			tmpState[action.from] = false;
			tmpState[action.to] = true;

			return tmpState;
      default:
         return state;
   }
}

export default PagesReducer;