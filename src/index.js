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
  loadMoreMoviesClicked: function() {
    var allTheMovies = movieData.concat(lotsMoreMovies)
    this.setState({
      movies: allTheMovies
    })
  },
  getInitialState: function() {
    return {
      movies: movieData
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
          <MovieList movies={this.state.movies} />
          <div className="details col-sm-4">
            <h3><a href="#" onClick={this.loadMoreMoviesClicked} className="btn btn-success">Load More Movies!</a></h3>
            <div className="row">
              <div className="col-sm-6">
                <img className="poster img-responsive" role="presentation" src="http://ia.media-imdb.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg" />
              </div>
              <div className="col-sm-6">
                <h3>Star Wars: The Force Awakens</h3>
                <p className="rating">PG-13</p>
                <p><strong>Genre:</strong> Action, Adventure, Fantasy</p>
                <p><strong>Runtime:</strong> 135 mins</p>
                <p><strong>Released:</strong> 12/18/15</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <h4>Summary</h4>
                <p>Three decades after the defeat of the Galactic Empire, a new threat arises. The First Order attempts to rule the galaxy and only a ragtag group of heroes can stop them, along with the help of the Resistance.</p>
                <h4>Cast</h4>
                <p>Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

ReactDOM.render(<App name="Jeff" />, document.getElementById("app"))
