import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import {shallow} from 'enzyme'
import CommentBox from '../CommentBox'
import CommentList from '../CommentList'

// JSDOM dependency tricks React library into thinking it's in the browser environment; simulates relevant behavior
// document object provided by JSDOM


it('shows a comment box', () => {

	const wrapped = shallow(<App />)
	expect(wrapped.find(CommentBox).length).toEqual(1)

})

it('shows a comment list', () => {

	const wrapped = shallow(<App />)
	expect(wrapped.find(CommentList).length).toEqual(1)

})