// const path = require('path');
// const styles = path.join(__dirname, '../src/styles')

require('babel-register')(
  // {
  // ignore: function(filename) {
  //   if (filename === '../src/styles/basic.less') {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // },
//   extensions: ['.js', '.jsx', '.es6', '.es']
// }
);

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;