var React = require('react');

var MovieDetails = React.createClass({
  movieWatched: function() {
    this.props.movieWatched(this.props.movie)
  },
  render: function() {
    if (this.props.movie === null) {
      return (
        <div>
          <h3>Select a movie!</h3>
          <p>
            <a href="#" 
               className="btn btn-warning" 
               onClick={this.props.resetMovieListClicked}>
              Reset Movie List
            </a>
          </p>
        </div>
      )
    }
    return (
      <div className="details col-sm-4">
        <h3>
          <a href="#" 
             className="btn btn-success" 
             onClick={this.movieWatched}>
            I watched it!
          </a>
          &nbsp;
          <a href="#" 
             className="btn btn-warning" 
             onClick={this.props.resetMovieListClicked}>
            Reset Movie List
          </a>
        </h3>
        <div className="row">
          <div className="col-sm-6">
            <img className="poster img-responsive" role="presentation" src={this.props.movie.poster} />
          </div>
          <div className="col-sm-6">
            <h3>{this.props.movie.title}</h3>
            <p className="rating">{this.props.movie.rating}</p>
            <p><strong>Genre:</strong> {this.props.movie.genre}</p>
            <p><strong>Runtime:</strong> {this.props.movie.runtime}</p>
            <p><strong>Released:</strong> {this.props.movie.released}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <h4>Summary</h4>
            <p>{this.props.movie.plot}</p>
            <h4>Cast</h4>
            <p>{this.props.movie.cast}</p>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = MovieDetails;
