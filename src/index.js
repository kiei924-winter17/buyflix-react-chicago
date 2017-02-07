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

var App = React.createClass({
  render: function() {
    return (
      <div>
        <div className="header row">
          <div className="col-sm-9">
            <h1>Buyflix</h1>
          </div>
          <Header name={this.props.name} />
        </div>
        <div className="sort row">
          <div className="col-sm-12">
            <ul className="nav nav-pills">
              <li className="active"><a href="#">Latest Releases</a></li>
              <li><a href="#">A-Z</a></li>
              <li className="nav-text pull-right">8 movies</li>
            </ul>
          </div>
        </div>
        <div className="main row">
          <MovieList />
          <div className="details col-sm-4">
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
