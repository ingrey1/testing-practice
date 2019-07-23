import React, {Component} from 'react'
import * as actions from 'actions/index'
import {connect} from 'react-redux'
import requireAuth from 'components/requireAuth'




class CommentBox extends Component {

	
	componentDidMount() {
		console.log("props", this.props)
	}


	state = {comment: ''}

	handleChange = (e, field) => {
		
		this.setState({[field]: e.target.value})

	}

	handleSubmit = (e) => {

		e.preventDefault()
		

		// call action creator, save comment entered by user
		this.props.saveComment(this.state.comment)
		this.setState({comment: ""})

	}

	getComments = () => {



		this.props.fetchComments()

	}
	
	render() {
		return (
			<div>
			<form onSubmit={this.handleSubmit}>
				<h4>Add A Comment</h4>
				<textarea value={this.state.comment} onChange={(e) => this.handleChange(e, 'comment') } />
				<div><button>Submit Comment</button></div>
			</form>
			<button className="fetch-comments" onClick={this.getComments}>Fetch Comments</button>
			</div>

			)
	}



}

const mapStateToProps = state => {
	return {
		auth: state.auth
	}
}

export default connect(null, actions)(requireAuth(CommentBox))