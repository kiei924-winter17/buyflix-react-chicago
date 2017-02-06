var React = require('react')

var Header = React.createClass({

  render: function() {
    return (
      <div className="hello col-sm-3 text-center">
        <h2>Hi, {this.props.name}!</h2>
      </div>
    )
  }

})

module.exports = Header;
