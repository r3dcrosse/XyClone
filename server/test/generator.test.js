const fs = require('fs')
const path = require('path')
const chai = require('chai')
const expect = chai.expect
const reactGenerator = require('../generator/generator.js')
const writeToFile = require('../generator/writeToFile.js')

const dataPath = path.join(__dirname + '../fakeData/message.txt')

const escapeSpecialChars = reactGenerator.escapeSpecialChars
const mapStateTreeToReact = reactGenerator.mapStateTreeToReact
const trimWhitespace = reactGenerator.trimWhitespace

describe('Server: ', function() {
  describe('Generator', function() {
    const state = 
    {
      components: [
        {
          id: 0, 
          type: 'Post'
        }
      ],
      storage: {
        0: {
          name: 'ThatPost',
          css: {
            color: 'blue', 
            position: 'flex'
          },
          type: 'Post',
          text: 'Hello world', 
          children: []
        }
      }
    }

    it('should return a post with props regardless of whitespace', function() {
      let rawText = `let ThatPost =    function () {
        return React.createElement('Post', {}, 'Hello world')
      }`;
      let scriptText = trimWhitespace(rawText)
      expect(mapStateTreeToReact(state))
        .to.equal(scriptText)
    })

    it('should write to a file', function() {
      let testText = mapStateTreeToReact(state)
      let rawText = `let ThatPost =    function () {
        return React.createElement('Post', {}, 'Hello world')
      }`;
      let scriptText = trimWhitespace(rawText)

      writeToFile(testText)
      expect(fs.readFileSync(dataPath, 'utf8')).to.equal(scriptText)
    })
  })
})