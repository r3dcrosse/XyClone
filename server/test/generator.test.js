const fs = require('fs')
const path = require('path')
const chai = require('chai')
const expect = chai.expect
const reactGenerator = require('../generator/generator.js')
const fileWriter = require('../generator/writeToFile.js')

const dataPath = path.resolve(__dirname, '../fakeData/test.js')

const writeToFile = fileWriter.writeToFile
const writeToFileSync = fileWriter.writeToFileSync

const escapeSpecialChars = reactGenerator.escapeSpecialChars
const mapStateTreeToReact = reactGenerator.mapStateTreeToReact
const trimWhitespace = reactGenerator.trimWhitespace
const keywordParser = reactGenerator.keywordParser

describe('Server: ', function() {
  describe('Generator', function() {
    const singleState = 
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
          props: {
            text: 'Hello world'
          },
          children: []
        }
      }
    }

    describe('Post component: ', function() {

      it('should return a post with props regardless of whitespace', function() {
        let rawText = `
          let ThatPost = function () {
            return React.createElement('Post', {}, 'Hello world');
          };
        `;
        let scriptText = trimWhitespace(rawText)
        expect(mapStateTreeToReact(singleState))
      })
    })

    describe('Image component: ', function() {
      it('should return an image component with props regarless of whitespace', function() {
        var state =
          {
            components: [
              {
                id: 1,
                type: 'Image'
              }
            ],
            storage: {
              1: {
                name: 'ThatImageComp',
                css: {
                  position: 'flex'
                },
                type: 'Image',
                src: 'http://placecorgi.com/260/180',
                children: []
              }
            }
          }

        let rawText = `
          let ThatImageComp = function () {
            return React.createElement('img', {src: 'http://placecorgi.com/260/180'});
          };
        `;
        let scriptText = trimWhitespace(rawText);
        expect(mapStateTreeToReact(state)).to.equal(scriptText);
      });


      it('should write to a file', function() {
        let testText = mapStateTreeToReact(singleState) 

        let rawText = `ThatPost = function () {
          return React.createElement('Post', {}, 'Hello world')
        }`;

        let scriptText = keywordParser(rawText)

        writeToFileSync(scriptText, function() {
        })
        
        let file = fs.readFileSync(dataPath, 'utf8')

        expect(file).to.equal(scriptText)

      })
    })

    describe('Generator depth: ', function() {
      it('should handle multiple flat components', function() {
        const flatState = 
        {
          components: [
            {
              id: 0, 
              type: 'Post'
            }, 
            {
              id: 1,
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
            },
            1: {
              name: 'AnotherPost',
              css: {
                color: 'blue', 
                position: 'flex'
              },
              type: 'Post',
              text: 'Hello again world', 
              children: []
            }  
          }
        }

        let testText = [
          `ThatPost = function () {
            return React.createElement('Post', {}, 'Hello world')
          }`,
          `AnotherPost = function () {
            return React.createElement('Post', {}, 'Hello again world')
          }`
        ]

        var testScript = ''

        testText.forEach(string => {
          testScript += '\n' + keywordParser(string)
        })

        writeToFileSync(testScript, function() {
        })
        
        let file = fs.readFileSync(dataPath, 'utf8')

        expect(file).to.equal(testScript)
      })
    })
  })
})
