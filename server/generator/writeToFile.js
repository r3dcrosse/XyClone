const fs = require('fs')
const path = require('path')

const dataPath = path.join(__dirname + '../fakeData/message.txt')

const writeToFile = (component) => {
  fs.writeFileSync(dataPath, component, (err) => {
    if (err) throw err;
    console.log('It\'s saved!');
  });
}

module.exports = writeToFile