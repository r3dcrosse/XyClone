"use strict"; // This is necessary to pass TravisCI tests
const fs = require('fs')
const path = require('path')

const mapBodyCSS = (stateTree) => {
  const projectId = stateTree.projectId;
  const cssProperites = stateTree.storage[`body${projectId}`].css;
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

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Generates index.jsx
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
const generateIndexFile = (stateTree) => {
  let components = stateTree.components;
  let storage = stateTree.storage;
  var pages = _sortComponentsByPage(components); // build up obj of components
  var indexFileAsString = ``;

////////////////////////////////////////////////////////////////////////////////
// Generate header of file (all the require/import statements)
////////////////////////////////////////////////////////////////////////////////
  indexFileAsString += `import React from 'react';\nimport { render } from 'react-dom';\nimport { Router, DefaultRoute, Link, Route, hashHistory } from 'react-router';\n`;

  // Generate import statements for each page component
  for (var page in pages) {
    let pathToFile = './components/';
    indexFileAsString += `${_makeRequireStatement(page, pathToFile)}`;
  }

////////////////////////////////////////////////////////////////////////////////
// Generate class declaration of index.jsx
////////////////////////////////////////////////////////////////////////////////
  indexFileAsString += `
class Index extends React.Component {
  render() {
    return (
      <div className="flex-container">
        <IndexPage />
      </div>
    )
  }
}`;

////////////////////////////////////////////////////////////////////////////////
// Generate react-route routes based on different pages
////////////////////////////////////////////////////////////////////////////////
  indexFileAsString += `
render((
  <Router history={hashHistory}>
    <Route path="/" component={Index} />
`;

  // Generate custom routes for everything that is not an IndexPage
  for (var page in pages) {
    page !== 'IndexPage' ? indexFileAsString += `${_makeRoutes(page)}` : null;
  }

  indexFileAsString +=
`  </Router>
), document.getElementById('react'));`;

  return indexFileAsString;
};

// Helper function for generateIndexFile
// @input: an array of component references
// @output: an object where key is pageName, value is an array of component
// references for that page
const _sortComponentsByPage = (components) => {
  var pageHash = {};

  components.forEach((component) => {
    pageHash[component.page] === undefined ?
      pageHash[component.page] = [component] :
      pageHash[component.page].push(component);
  });

  return pageHash;
};

// Helper function to generate require statement for pageName
// @input: name of page <String>
// @output: constant declaration with link to name of page <String>
const _makeRequireStatement = (pageName, pathToFile) => {
  return `const ${pageName} = require('${pathToFile}${pageName}.js');\n`;
};

// Helper function to generate react router route for pageName
// @input: name of page <String>
// @output: react router component for pageName <String>
const _makeRoutes = (pageName) => {
  return `    <Route path="/${pageName}" component={${pageName}} />\n`;
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Generates a string to be written to [page].js
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
const generateComponentFile = (currentPage, pageHash, stateTree) => {
  // Only include components that match the page we are going to generate
  let components = stateTree.components.filter((component) => {
    return component.page === currentPage;
  });
  let storage = stateTree.storage;
  var fileAsString = ``;

////////////////////////////////////////////////////////////////////////////////
// Generate headers for component file
////////////////////////////////////////////////////////////////////////////////
  fileAsString += `import React from 'react';import Carousel from './Carousel.jsx';import { Link } from 'react-router';`;
  for (var page in pageHash) {
    page !== currentPage ?
      fileAsString += `${_makeRequireStatement(page, './')}` : null;
  }
////////////////////////////////////////////////////////////////////////////////
// Generate class for component file
////////////////////////////////////////////////////////////////////////////////
  fileAsString +=
`const ${currentPage} = function() {
  return (
    React.createElement('section', {className: 'flex-container'}, [
`;
  // Build out all components included currentPage DOM
  for (var i = 0; i < components.length; i++) {
    let actual = storage[components[i].componentId];
    fileAsString += getComponentString(actual, storage);
    // Make it so there is no comma after the last component
    i <= components.length - 2 ?
      fileAsString += `,` : null;
  }

  // Closing part of file
  fileAsString +=
`    ])
  )
};

module.exports = ${currentPage};`;

  return fileAsString;
};
////////////////////////////////////////////////////////////////////////////////

const mapStateTreeToReact = (stateTree) => {

  let components = stateTree.components;
  let storage = stateTree.storage;

  function formReactStringFromArray(components) {
    let reactStr = `
    import React from 'react';
    import Carousel from './Carousel.jsx';

    const IndexComponent = function () {
      return (
        React.createElement('section', {className: 'flex-container'}, [
    `;
    for (var i = 0; i < components.length; i++) {
      let actual = storage[components[i].componentId];
      reactStr += getComponentString(actual, storage);
      i <= components.length - 2 ?
        reactStr += `,` : null; // Makes it so there is no comma for last component
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
 },

 Carousel: (props, storage) => {
  let childrenArr = [];

  let children = props.children;
  let css = JSON.stringify(props.css);

  for (var i = 0; i < children.length; i++) {
    let galleryPost = storage[children[i].componentId];
    childrenArr.push([galleryPost.css, storage[galleryPost.children[0].componentId], storage[galleryPost.children[1].componentId]])
  }

  let stringChildren = JSON.stringify(childrenArr);

  let componentText = `<Carousel style={${css}} arrayChildren={${stringChildren}} />`;
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

module.exports.generateIndexFile = generateIndexFile;
module.exports.generateComponentFile = generateComponentFile;
module.exports.mapBodyCSS = mapBodyCSS;
module.exports.mapStateTreeToReact = mapStateTreeToReact;
module.exports.getComponentString = getComponentString;
module.exports.escapeSpecialChars = escapeSpecialChars;
module.exports.trimWhitespace = trimWhitespace;
module.exports.keywordParser = keywordParser;
