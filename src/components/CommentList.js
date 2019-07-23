import React, {Component} from 'react'
import {connect} from 'react-redux'



export class CommentList extends Component {


	renderComments = () => {

		return this.props.comments.map((comment, i) => {

			return <li key={i}>{comment}</li>

		})

	}



	render() {


		{console.log(this.props.comments)}
		return (


			<div>
			    <h4>Comment List</h4>
				<ul>
				{this.renderComments()}
				</ul>

			</div>

			)


	}


}

const mapStateToProps = state => {

	return {
		comments: state.comments
	}

}

export default connect(mapStateToProps)(CommentList)