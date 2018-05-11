export function selectPageForTransition(from, to, cb) {
   return (dispatch, prevState) => {
      dispatch({type: 'SELECT_PAGE', from, to, cb})
   };
}