import commentsReducer from 'reducers/comments'
import {SAVE_COMMENT} from 'actions/types'




describe('comments Reducer', () => {


it('handles actions of type SAVE_COMMENT', () => {

	const action = {
		type: SAVE_COMMENT,
		payload: 'New Comment'
	}

	const actualState = commentsReducer([], action)

	const expectedState = ['New Comment']

	expect(actualState).toEqual(expectedState )

})

it('handles action with unknown type', () => {


	const actualState = commentsReducer([], {type: 'Unknown'})
	const expectedState = []
	expect(actualState).toEqual([])
})

})