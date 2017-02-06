var React = require('react')
var Movie = require('./Movie')

// Sample data
var movieData = require('../movie-data.json')
var lotsMoreMovies = require('../lots-more-movies.json')

var MovieList = React.createClass({
  render: function() {
    return (
      <div className="movies col-sm-8">
        <div className="row">
          {movieData.map(function(movie) {
            return (
              <Movie poster={movie.poster}
                     title={movie.title}
                     genre={movie.genre}
                     runtime={movie.runtime} />
            )
          })}
        </div>
      </div>
    )
  }
})

module.exports = MovieList
