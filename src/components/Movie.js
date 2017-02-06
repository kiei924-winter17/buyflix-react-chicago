var React = require('react')

var Movie = React.createClass({
  render: function() {
    return (
      <div className="col-sm-2">
        <div className="thumbnail">
          <img className="img-responsive" role="presentation" src={this.props.poster} />
          <div className="caption">
            <h3>{this.props.title}</h3>
            <p>{this.props.genre}</p>
            <p>{this.props.runtime}</p>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Movie
