const fs = require('fs')
const path = require('path')
const Promise = require('bluebird')

const dataPath = path.resolve(__dirname, '../fakeData/test.js')

const writeFile = Promise.promisify(fs.writeFile)

const writeToFile = (component, cb) => {
  writeFile(dataPath, component, (err) => {
  }).then(() => {
    console.log('It\'s saved!');
    cb()
  }).catch(err => {
    throw err;
  })
}

// sync version is just for testing
const writeToFileSync = (component, cb) => {
  fs.writeFileSync(dataPath, component)
}

module.exports.writeToFile = writeToFile
module.exports.writeToFileSync = writeToFileSync