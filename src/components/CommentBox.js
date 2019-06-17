import React, {Component} from 'react'


class CommentBox extends Component {

	state = {comment: ''}

	handleChange = (e, field) => {
		
		this.setState({[field]: e.target.value})

	}

	handleSubmit = (e) => {

		e.preventDefault()
		

		// call action creator, save comment entered by user

		this.setState({comment: ""})

	}
	
	render() {
		return (

			<form onSubmit={this.handleSubmit}>
				<h4>Add A Comment</h4>
				<textarea value={this.state.comment} onChange={(e) => this.handleChange(e, 'comment') } />
				<div><button>Submit Comment</button></div>
			</form>

			)
	}



}

export default CommentBox