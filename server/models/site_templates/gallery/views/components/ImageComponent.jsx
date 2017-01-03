var React = require('react');

class ImageComponent extends React.Component {
  render() {
    return (
        <img src={this.props.src} alt={this.props.alt}/>
    );
  }
}

module.exports = ImageComponent;
