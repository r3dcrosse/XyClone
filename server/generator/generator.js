"use strict"; // This is necessary to pass TravisCI tests
const fs = require('fs')
const path = require('path')

const mapBodyCSS = (stateTree) => {
  const cssProperites = stateTree.storage.body.css;
  var bodyCSSasString = `body {`;

  // Helper hash to return templated css string
  const buildCSSstring = {
    backgroundColor: (val) => {
      return `background-color:${val};`;
    }
  };

  // Build a string of all the css properties to be included in body element
  for (var cssProp in cssProperites) {
    // check if cssProp is in the helper hash, if not, do nothing
    buildCSSstring[cssProp] !== undefined ?
      bodyCSSasString += buildCSSstring[cssProp](cssProperites[cssProp]) : null;
  }

  bodyCSSasString += `}`; // Build up the end of body css syntax

  //////////////////////////////////////////////////////////////////////////////
  // FLEXBOX CONTAINER CSS template to be written to .css file
  bodyCSSasString += `.flex-container {display: inline-flex;margin: 0px;padding: 0px;width: 100%;height: 100%;flex-direction: row;flex-wrap: wrap;justify-content: center;position: relative;align-items: center;}`;
  //////////////////////////////////////////////////////////////////////////////

  return bodyCSSasString;
};

const mapStateTreeToReact = (stateTree) => {

  let components = stateTree.components;
  let storage = stateTree.storage;

  function formReactStringFromArray(components) {
    let reactStr = `
    import React from 'react';

    const IndexComponent = function () {
      return (
        React.createElement('section', {}, [
    `;
    for (var i = 0; i < components.length; i++) {
      let actual = storage[components[i].componentId];
      reactStr += getComponentString(actual, storage);
      i <= components.length - 2 ?
        reactStr += `,` : null; // Makes it so there is no coma for last component
    }
    reactStr += `
        ])
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

const getComponentString = (component, storage) => {
  let componentType = component.type;
  let template = templates[componentType];
  let componentMaker;

  if (template) {
    componentMaker = template;
  } else {
    throw 'Reference Error: This component doesn\'t have a valid template';
  }

  return componentMaker(component, storage);
};

const templates = {
  GalleryPost: (props, storage) => {
    let name = props.name;
    let css = JSON.stringify(props.css);
    let children = props.children;
    var builtChildren = ``;

    // Build out children as a string of react components
    if (children !== []) {
      // Wrap the children in a div
      builtChildren += `React.createElement('div', {style: ${css}}, [`;
      for (var i = 0; i < children.length; i++) {
        builtChildren += getComponentString(storage[children[i].componentId], storage);
        // Append a comma to to seperate the children, except the last child
        i <= children.length - 2 ? builtChildren += ',' : null;
      }
      builtChildren += `])`;
    }

    let componentText = `React.createElement('GalleryPost', {}, [${builtChildren}])`;
    return componentText;
  },

  Image: (props) => {
    let name = props.name;
    let src = props.src;
    let css = JSON.stringify(props.css);

    let componentText = `React.createElement('img', {src: '${src}', style: ${css}})`;

    return componentText;
  },

  UserContainer: (props, storage) => {
    let name = props.name;
    let css = JSON.stringify(props.css);
    let children = props.children;
    var builtChildren = ``;

    // Build out the children as a string of react components, if it has children
    if (children !== []) {
      for (var i = 0; i < children.length; i++) {
        builtChildren += getComponentString(storage[children[i].componentId], storage);
        // Append a comma to to seperate the children, except the last child
        i <= children.length - 2 ? builtChildren += ',' : null;
      }
    }

    let componentText = `React.createElement('div', {style: ${css}}, [${builtChildren}])`;

    return componentText;
  },

 // Textbox
 Textbox: (props) => {
   let text = props.text;
   let css = JSON.stringify(props.css);

   let componentText = `React.createElement('div', {style: ${css}}, '${text}')`;

   return componentText;
 }
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

module.exports.mapBodyCSS = mapBodyCSS;
module.exports.mapStateTreeToReact = mapStateTreeToReact;
module.exports.getComponentString = getComponentString;
module.exports.escapeSpecialChars = escapeSpecialChars;
module.exports.trimWhitespace = trimWhitespace;
module.exports.keywordParser = keywordParser;
