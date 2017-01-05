var React = require('react');
var ImageComponent = require('./ImageComponent');

// HELPER FUNCTION TO RETURN REACT COMPONENTS BASED ON PROP TREE
// @input: component object from propTree
// @output: react component to be rendered
var getComponentBasedOnType = (comp) => {
  switch (comp.type) {
    case 'image':
      return (
        <ImageComponent
          src={comp.src}
          alt={comp.alt}
          id={comp.id}
        />
      );
    case 'text':
      return (
        <h1 id={comp.id}>{comp.text}</h1>
      );
  };
}

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <body>
          {
            this.props.propTree.components.map((comp) => {
              return getComponentBasedOnType(comp);
            })
          }
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
