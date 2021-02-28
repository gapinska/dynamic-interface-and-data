import React from 'react'
import './App.css'
import MoviesList from './components/MoviesList'
import Movie from './components/Movie'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<Router>
				<nav>
					<Link to="/">Home</Link>
				</nav>
				<Switch>
					<Route path="/movies/:id" component={Movie} />
					<Route path="/" exact component={MoviesList} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
