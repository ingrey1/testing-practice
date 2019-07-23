import {SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH} from 'actions/types'
import axios from 'axios'


export const changeAuth = (logIn) => {

	return {
		type: CHANGE_AUTH,
		payload: logIn
	}


}

export const saveComment = comment => {
	return {
		type: SAVE_COMMENT,
		payload: comment
	}
}

export const fetchComments = () => {

	const response = axios.get('http://jsonplaceholder.typicode.com/comments')

	return {
		type: FETCH_COMMENTS,
		payload: response
	}



}