export default ({dispatch}) => next => action => {

	// check to see if action has promise on payload property
	// if it does, wait for resolve, otherwise send on
	if (!action.payload || !action.payload.then) {

		return next(action)

	} else {
		action.payload.then((response) => dispatch({type: action.type, payload: response}))
		
	} 

}  

