const fs = require('fs')
const path = require('path')

const mapStateTreeToReact = (stateTree) => {

  let components = stateTree.components;
  let storage = stateTree.storage;

  function formReactStringFromArray(components) {
    let reactStr = '';
    for (var i = 0; i < components.length; i++) {
      let actual = storage[components[i].id];
      reactStr += getComponentString(actual);
    }
    console.log('react str', reactStr);
    return reactStr;
  }

  let reactStr = formReactStringFromArray(components);
  // while (node.children) {
  //   return getComponentString(node)
  // }

  // mapState(node.children)
  return reactStr;
};

const getComponentString = (component) => {

  let componentType = component.type;
  let template = templates[componentType];
  let componentMaker;

  let name = component.name;
  let props = component.props;

  if (template) {
    componentMaker = template;
  } else {
    throw 'Reference Error: This component doesn\'t have a valid template';
  }

  return componentMaker(name, props);
};

const templates = {
  Post: (name, props) => {
    let componentText = `
      let ${name} = function() {
        return React.createElement('Post', {}, '${props.text}');
      };
    `;
    return trimWhitespace(componentText);
  },

  Image: (name, props) => {
    let componentText = `
      let ${name} = function() {
        return React.createElement('Image', {src: '${props.src}'});
      };
    `;
    return trimWhitespace(componentText);
  }
 // Textbox etc.
};

const escapeSpecialChars = function(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s][\n\r]/g, "\\$&");
};

const trimWhitespace = function(text) {
  return text.replace(/ /g,'');
};

module.exports.mapStateTreeToReact = mapStateTreeToReact;
module.exports.escapeSpecialChars = escapeSpecialChars;
module.exports.trimWhitespace = trimWhitespace;
