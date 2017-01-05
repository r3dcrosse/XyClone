var React = require('react');
var DefaultLayout = require('./components/default');

class HelloMessage extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title} propTree={this.props}>
        {/* <div>Hello {this.props.name}</div>  this is the children of props */}
      </DefaultLayout>
    );
  }
}

module.exports = HelloMessage;
