import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import api from '../api'

class MoviesList extends Component {
	state = {
		movies: []
	}
	componentDidMount() {
		api.get('/movies').then((data) => this.setState({ movies: data })).catch((error) => console.error(error))
	}
	render() {
		return (
			<div>
				{this.state.movies.map((movie) => (
					<div key={movie.id}>
						<Link to={`/movies/${movie.id}`}>{movie.title}</Link>
					</div>
				))}
			</div>
		)
	}
}

export default MoviesList
