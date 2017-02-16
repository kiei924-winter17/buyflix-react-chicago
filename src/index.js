// React
var React = require('react')
var ReactDOM = require('react-dom')

// Sample data
var movieData = require('./data/movie-data.json') // 12 movies
var lotsMoreMovies = require('./data/lots-more-movies.json') // lots more

// Components
var Header = require('./components/Header')
var MovieList = require('./components/MovieList')
var SortBar = require('./components/SortBar')
var MovieDetails = require('./components/MovieDetails')

// Firebase
var Rebase = require('re-base')
var base = Rebase.createClass({
  apiKey: "AIzaSyD3SEaqljU1DdT72tf7nEsKEWAHcgHa7Rs",
  authDomain: "buyflix-d7037.firebaseapp.com",
  databaseURL: "https://buyflix-d7037.firebaseio.com/",
});

var App = React.createClass({
  movieClicked: function(movie) {
    this.setState({
      currentMovie: movie
    })
  },
  movieWatched: function(movie) {
    var existingMovies = this.state.movies
    var moviesWithWatchedMovieRemoved = existingMovies.filter(function(existingMovie) {
      return existingMovie.id !== movie.id
    })
    this.setState({
      movies: moviesWithWatchedMovieRemoved,
      currentMovie: null
    })
  },
  resetMovieListClicked: function() {
    var allTheMovies = movieData.concat(lotsMoreMovies)
    this.setState({
      movies: allTheMovies
    })
  },
  authChanged: function(user) {
    if (user) {
      this.setState({
        currentUser: user
      })
      console.log(user)
    } else {
      this.setState({
        currentUser: null
      })
      console.log("Logged out") }
  },
  loginComplete: function(error, response) {
    if (error) {
      console.log("Login failed")
    } else {
      console.log("Login succeeded")
    }
  },
  login: function() {
    base.authWithOAuthPopup('google', this.loginComplete)
  },
  logout: function() {
    base.unauth()
  },
  getInitialState: function() {
    return {
      movies: movieData.concat(lotsMoreMovies),
      currentMovie: null,
      currentUser: null
    }
  },
  componentDidMount: function() {
    base.syncState('/movies', { context: this, state: 'movies', asArray: true })
    base.onAuth(this.authChanged)
  },
  render: function() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}
                login={this.login}
                logout={this.logout} />
        <SortBar movieCount={this.state.movies.length} />
        <div className="main row">
          <MovieList movieClicked={this.movieClicked}
                     movies={this.state.movies} />
          <MovieDetails movieWatched={this.movieWatched}
                        resetMovieListClicked={this.resetMovieListClicked}
                        movie={this.state.currentMovie} />
        </div>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById("app"))
