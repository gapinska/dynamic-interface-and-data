import React, { Component } from 'react'
import api from '../api'

class Movie extends Component {
	state = {
		movie: {}
	}
	componentDidMount() {
		const { params } = this.props.match
		api
			.get(`/movies/${params.id}`)
			.then((data) => this.setState({ movie: data }))
			.catch((error) => console.error(error))
	}
	render() {
		return (
			<div>
				<h1>{this.state.movie.title}</h1>
			</div>
		)
	}
}

export default Movie
