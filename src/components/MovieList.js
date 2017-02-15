var React = require('react')
var Movie = require('./Movie')

var MovieList = React.createClass({
  renderMovie: function(movie) {
    return (
      <Movie movieClicked={this.props.movieClicked}
             key={movie.id}
             movie={movie} />
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
