var React = require('react')
var Movie = require('./Movie')

var MovieList = React.createClass({
  renderMovie: function(movie) {
    return (
      <Movie poster={movie.poster}
             title={movie.title}
             genre={movie.genre}
             runtime={movie.runtime} />
    )
  },
  render: function() {
    return (
      <div className="movies col-sm-8">
        <div className="row">
          {this.props.movies.map(this.renderMovie)}
        </div>
      </div>
    )
  }
})

module.exports = MovieList
