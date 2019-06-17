import React from 'react'
import ReactDOM from 'react-dom'
import {mount, unmount} from 'enzyme'
import CommentBox from 'components/CommentBox'

let wrapped;

beforeEach(() => {

	wrapped = mount(<CommentBox />)

})

afterEach(() => {
	wrapped.unmount()
})


it('has textarea and button', () => {

	expect(wrapped.find('textarea').length).toEqual(1)
	expect(wrapped.find('button').length).toEqual(1)

})


describe('the text area', () => {

beforeEach(() => {

	// simulate uses html name for event, not React component onChange function
	wrapped.find('textarea').simulate('change', {
		target: {
			value: 'new comment'
		}
	})
	// force component to re-render, since renders are normally async
	wrapped.update()


})	


it('has a text area that users can input text into', () => {


	expect(wrapped.find('textarea').prop('value')).toEqual('new comment')



})

it('has a textarea that is emptied when the form is submitted', () => {

	// simulate uses html name for event, not React component onChange function
	wrapped.find('form').simulate('submit')
	// force component to re-render, since renders are normally async
	wrapped.update()

	expect(wrapped.find('textarea').prop('value')).toEqual('')



})





})


