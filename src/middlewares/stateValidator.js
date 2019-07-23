import stateSchema from 'middlewares/stateSchema'
import tv4 from 'tv4'



export default ({dispatch, getState}) => (next) => (action) => {

	next(action)



	const validData = tv4.validate(getState(), stateSchema) 

	if (!validData) console.warn("invalid store schema")



}