const fs = require('fs')
const path = require('path')

const mapStateTreeToReact = (stateTree) => {

  let components = stateTree.componentReferences;
  let storage = stateTree.components;

  function formReactStringFromArray(components) {
    let reactStr = `
    import React from 'react';

    const IndexComponent = function () {
      return (
    `;
    for (var i = 0; i < components.length; i++) {
      let actual = storage[components[i].componentId];
      reactStr += getComponentString(actual);
    }
    reactStr += `
      )
    };

    module.exports = IndexComponent;
    `;

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

  if (template) {
    componentMaker = template;
  } else {
    throw 'Reference Error: This component doesn\'t have a valid template';
  }

  return componentMaker(component);
};

const templates = {
  Post: (props) => {
    let name = props.name
    let text = props.text

    let componentText = `
      React.createElement('Post', {}, '${text}');
    `;
    return componentText;
  },

  Image: (props) => {
    let name = props.name
    let src = props.src

    let componentText = `
      React.createElement('img', {src: '${src}'})
    `;
    return componentText;
  }
 // Textbox etc.
}

const escapeSpecialChars = function(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s][\n\r]/g, "\\$&");
};

const keywordParser = function(text) {
  // break 'return' out of the middle
  let retSplit = text.split('return')
  return 'let ' + trimWhitespace(retSplit[0]) + ' return ' + (trimWhitespace(retSplit[1]))
}

// need to make this more sophisticated to ignore inner strings
const trimWhitespace = function(text) {
  return text.replace(/ /g,'');
};


module.exports.mapStateTreeToReact = mapStateTreeToReact
module.exports.escapeSpecialChars = escapeSpecialChars
module.exports.trimWhitespace = trimWhitespace
module.exports.keywordParser = keywordParser
