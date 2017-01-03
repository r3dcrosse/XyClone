var dummyPropTree = [{

}];

// helper function to parse propTree
// @input: propTree
// @output: array of components based on order of propTree
var parseComponents = function(propTree) {
  // DUMMY DATA FOR TESTING
  var components = [
    {
      type: 'image',
      src: 'http://placecorgi.com/260/180',
      alt: 'DOGE1',
      key: 'H3dz4d'
    },
    {
      type: 'text',
      text: 'DOGGGGGEEEEEEE',
      key: 'zs3d9d'
    },
    {
      type: 'image',
      src: 'http://placecorgi.com/260/180',
      alt: 'DOGE 2',
      key: 'Hd82x9'
    }];

  return components;
};

exports.index = function(req, res) {
  // TODO: Pull propTree from database
  var components = parseComponents(dummyPropTree);

  res.render('index', {
    name: 'John',            // RANDOM DATA, just ignore for now
    title: 'Hello world!',   // RANDOM DATA, just ignore for now
    'components': components // THIS IS THE PROP TREE
  });
};
