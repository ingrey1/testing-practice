import React from 'react'
import CommentBox from './CommentBox'
import CommentList from './CommentList'
import {Provider} from 'react-redux'



const App = () => {
	return (
		<div>

		<CommentBox />
		<CommentList />


		</div>
		)
}

export default App