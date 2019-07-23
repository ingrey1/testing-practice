import React from 'react'
import {mount} from 'enzyme'
import Root from 'Root'
import App from 'components/App'
import moxios from 'moxios';



beforeEach(() => {

	// stop axios sending out requests
	moxios.install()
	// trick axios into thinking it got response; provide mock response
	moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
		status: 200,
		response: [{name: 'fetched comment 1'}, {name: 'fetched comment 2'}]
	})

})

afterEach(() => {

	// clear stub requests from previous test
	moxios.uninstall(); 

})

it('can fetch a list of comments and display them', (done) => {
	// Attempt to render the entire app

	const wrapped = mount(

		<Root>
		 <App />
		</Root>


		)

	// find the fetch comments button and click it
	wrapped.find('.fetch-comments').simulate('click')


	moxios.wait( () => {
		wrapped.update()
		expect(wrapped.find('li').length).toEqual(2)
		done()
		wrapped.unmount()
	})


	
	
})