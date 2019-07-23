import {SAVE_COMMENT} from 'actions/types'
import {saveComment} from 'actions/index'


describe('saveComment action Creator', () => {

	it('has correct type', () => {
		const action = saveComment()
		const expectedType = SAVE_COMMENT
		expect(action.type).toEqual(expectedType)
	})

	it('has correct payload', () => {
		const comment = 'new comment'
		const action = saveComment(comment)
		expect(action.payload).toEqual(comment)

	})



})