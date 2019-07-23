import React, {Component} from 'react'
import {connect} from 'react-redux'


export default (ChildComponent) => {

	class ComposedComponent extends Component {
		
		navigateAway() {
		if (!this.props.auth) {
			this.props.history.push('/')
		}
	}

	// component just got rendered
	componentDidMount() {

		this.navigateAway()	

	}
	
	// called when component receives new set of props
	componentDidUpdate() {

		this.navigateAway()

	}



		render() {

			return <ChildComponent {...this.props} />
		}
	}


	const mapStateToProps = state => {
	return {
		auth: state.auth
	}
}




	return connect(mapStateToProps)(ComposedComponent)

}