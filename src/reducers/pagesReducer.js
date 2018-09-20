var hash = window.location.hash.split('/')[1];

var defaultState = {
      home: hash === "home" || (hash && hash.length == 0 ? true : false),
      skills: hash === "skills" ? true : false,
      projects: hash === "projects" ? true : false,
      about: hash === "about" ? true : false
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