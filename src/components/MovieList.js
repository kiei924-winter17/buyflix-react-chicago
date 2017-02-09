var React = require('react')
var Movie = require('./Movie')

var MovieList = React.createClass({
  render: function() {
    return (
      <div className="movies col-sm-8">
        <div className="row">
          {this.props.movies.map(function(movie) {
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
