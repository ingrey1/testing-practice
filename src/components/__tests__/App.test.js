import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App'
import {shallow} from 'enzyme'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

// JSDOM dependency tricks React library into thinking it's in the browser environment; simulates relevant behavior
// document object provided by JSDOM

let wrapped;

beforeEach(() => {

	wrapped = shallow(<App />)

})

it('shows a comment box', () => {

	
	expect(wrapped.find(CommentBox).length).toEqual(1)

})

it('shows a comment list', () => {

	
	expect(wrapped.find(CommentList).length).toEqual(1)

})