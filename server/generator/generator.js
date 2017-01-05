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
      let ${name} = function() {
        return React.createElement('Post', {}, '${text}');
      };
    `;
    return keywordParser(componentText);
  },

  Image: (props) => {
    let name = props.name
    let src = props.src

    let componentText = `
      let ${name} = function() {
        return React.createElement('img', {src: '${src}'});
      };
    `;
    return trimWhitespace(componentText);
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
