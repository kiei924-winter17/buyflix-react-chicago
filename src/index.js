// React
var React = require('react')
var ReactDOM = require('react-dom')

// Sample data
var movieData = require('./movie-data.json') // 12 movies
var lotsMoreMovies = require('./lots-more-movies.json') // lots more

// Components
var Header = require('./components/Header')
var Movie = require('./components/Movie')
var MovieList = require('./components/MovieList')
var SortBar = require('./components/SortBar')

var App = React.createClass({
  movieClicked: function(movie) {
    this.setState({
      currentMovie: movie
    })
  },
  loadMoreMoviesClicked: function() {
    var allTheMovies = movieData.concat(lotsMoreMovies)
    this.setState({
      movies: allTheMovies
    })
  },
  getInitialState: function() {
    return {
      movies: movieData,
      currentMovie: movieData[0]
    }
  },
  render: function() {
    return (
      <div>
        <div className="header row">
          <div className="col-sm-9">
            <h1>Buyflix</h1>
          </div>
          <Header name={this.props.name} />
        </div>
        <SortBar movieCount={this.state.movies.length} />
        <div className="main row">
          <MovieList movieClicked={this.movieClicked} movies={this.state.movies} />
          <div className="details col-sm-4">
            <h3><a href="#" onClick={this.loadMoreMoviesClicked} className="btn btn-success">Load More Movies!</a></h3>
            <div className="row">
              <div className="col-sm-6">
                <img className="poster img-responsive" role="presentation" src={this.state.currentMovie.poster} />
              </div>
              <div className="col-sm-6">
                <h3>{this.state.currentMovie.title}</h3>
                <p className="rating">{this.state.currentMovie.rating}</p>
                <p><strong>Genre:</strong> {this.state.currentMovie.genre}</p>
                <p><strong>Runtime:</strong> {this.state.currentMovie.runtime}</p>
                <p><strong>Released:</strong> {this.state.currentMovie.released}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <h4>Summary</h4>
                <p>{this.state.currentMovie.plot}</p>
                <h4>Cast</h4>
                <p>{this.state.currentMovie.cast}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

ReactDOM.render(<App name="Jeff" />, document.getElementById("app"))
