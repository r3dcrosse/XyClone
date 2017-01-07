"use strict";
const fs = require('fs')
const path = require('path')
const chai = require('chai')
const expect = chai.expect
const reactGenerator = require('../generator/generator.js')
const fileWriter = require('../generator/writeToFile.js')

const Promise = require('bluebird')

const dataPath = path.resolve(__dirname, '../fakeData/test.js')

const writeToFile = fileWriter.writeToFile
const writeToFileSync = fileWriter.writeToFileSync

const escapeSpecialChars = reactGenerator.escapeSpecialChars
const mapStateTreeToReact = reactGenerator.mapStateTreeToReact
const getComponentString = reactGenerator.getComponentString
const trimWhitespace = reactGenerator.trimWhitespace
const keywordParser = reactGenerator.keywordParser

describe('Server: ', function() {
  describe('Generator', function() {
    const singleState =
    {
      components: [
        {
          componentId: 0,
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

    // describe('Post component: ', function() {
    //
    //   it('should return a post with props regardless of whitespace', function() {
    //     let rawText = `
    //       let ThatPost = function () {
    //         return React.createElement('Post', {}, 'Hello world');
    //       };
    //     `;
    //     let scriptText = trimWhitespace(rawText)
    //     expect(mapStateTreeToReact(singleState))
    //   })
    // })

    describe('Text component: ', function() {
      it('should return a text component with props', function() {
      var testState =
        {
          components: [
            {
              id: 1,
              type: 'Textbox'
            }
          ],
          storage: {
            1: {
              name: 'ThatTextBox',
              css: {
                color: 'red',
                height: '200px'
              },
              type: 'Textbox',
              text: 'Hello World!!!!!!'
            }
          }
        }
        let testText = getComponentString(testState.storage[1], testState.storage);
        // console.log('%%%%% TEST TEXTBOX ^^^^^^^^');
        // console.log(testText);
        let rawText = `React.createElement('div', {style: {"color":"red","height":"200px"}}, 'Hello World!!!!!!')`;
        expect(testText).to.equal(rawText);
      })
    });

    describe('Image component: ', function() {
      it('should return an image component with props', function() {
      var testState =
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
                width: '260',
                height: '180',
                padding: '10px'
              },
              type: 'Image',
              src: 'http://placecorgi.com/260/180'
            }
          }
        }
        let testText = getComponentString(testState.storage[1], testState.storage);
        let rawText = `React.createElement('img', {src: 'http://placecorgi.com/260/180', style: {"width":"260","height":"180","padding":"10px"}})`;
        expect(testText).to.equal(rawText);
      })
    });

    describe('UserContainer:', function() {
      it('Should return a react div component', function() {
        var testState =
          {
            components: [
              {
                componentId: 8675309,
                type: 'UserContainer'
              }
            ],
            storage: {
              8675309: {
                name: 'ThatUserComp',
                css: {
                  backgroundColor: 'blue'
                },
                type: 'UserContainer',
                children: []
              }
            }
          }

          let testText = getComponentString(testState.storage[8675309], testState.storage);
          let rawText = `React.createElement('div', {style: {"backgroundColor":"blue"}}, [])`;
          expect(testText).to.equal(rawText);
      })

      it('Should return nested react div components', function() {
        var testState =
          {
            components: [
              {
                componentId: 1,
                type: 'UserContainer'
              }
            ],
            storage: {
              1: {
                name: 'FirstUserContainer',
                css: {
                  backgroundColor: 'blue'
                },
                type: 'UserContainer',
                children: [
                  {
                    componentId: 2,
                    type: 'UserContainer'
                  }
                ]
              },
              2: {
                name: 'SecondUserContainer',
                css: {
                  backgroundColor: 'green'
                },
                type: 'UserContainer',
                children: [
                  {
                    componentId: 3,
                    type: 'UserContainer'
                  }
                ]
              },
              3: {
                name: 'OtherUserContainer',
                css: {
                  backgroundColor: 'green'
                },
                type: 'UserContainer',
                children: [
                  {
                    componentId: 4,
                    type: 'Image'
                  },
                  {
                    componentId: 5,
                    type: 'Image'
                  }
                ]
              },
              4: {
                name: 'Image1',
                css: {
                  padding: '10px'
                },
                type: 'Image',
                src: 'http://placecorgi.com/260/180'
              },
              5: {
                name: 'Image2',
                css: {
                  width: '26',
                  height: '18',
                  padding: '20px'
                },
                type: 'Image',
                src: 'http://placecorgi.com/260/180'
              }
            }
          }

          let testText = getComponentString(testState.storage[1], testState.storage);
          let rawText = `React.createElement('div', {style: {"backgroundColor":"blue"}}, [React.createElement('div', {style: {"backgroundColor":"green"}}, [React.createElement('div', {style: {"backgroundColor":"green"}}, [React.createElement('img', {src: 'http://placecorgi.com/260/180', style: {"padding":"10px"}}),React.createElement('img', {src: 'http://placecorgi.com/260/180', style: {"width":"26","height":"18","padding":"20px"}})])])])`;
          expect(testText).to.equal(rawText)
      });

    //   it('should write to a file', function() {
    //     let testText = mapStateTreeToReact(singleState)
    //
    //     let rawText = `ThatPost = function () {
    //       return React.createElement('Post', {}, 'Hello world')
    //     }`;
    //
    //     let scriptText = keywordParser(rawText)
    //
    //     writeToFileSync(scriptText, function() {
    //     })
    //
    //     let file = fs.readFileSync(dataPath, 'utf8')
    //
    //     expect(file).to.equal(scriptText)
    //
    //   })
  });

    // describe('Generator depth: ', function() {
    //   it('should handle multiple flat components', function() {
    //     const flatState =
    //     {
    //       components: [
    //         {
    //           id: 0,
    //           type: 'Post'
    //         },
    //         {
    //           id: 1,
    //           type: 'Post'
    //         }
    //       ],
    //       storage: {
    //         0: {
    //           name: 'ThatPost',
    //           css: {
    //             color: 'blue',
    //             position: 'flex'
    //           },
    //           type: 'Post',
    //           text: 'Hello world',
    //           children: []
    //         },
    //         1: {
    //           name: 'AnotherPost',
    //           css: {
    //             color: 'blue',
    //             position: 'flex'
    //           },
    //           type: 'Post',
    //           text: 'Hello again world',
    //           children: []
    //         }
    //       }
    //     }
    //
    //     let testText = [
    //       `ThatPost = function () {
    //         return React.createElement('Post', {}, 'Hello world')
    //       }`,
    //       `AnotherPost = function () {
    //         return React.createElement('Post', {}, 'Hello again world')
    //       }`
    //     ]
    //
    //     var testScript = ''
    //
    //     testText.forEach(string => {
    //       testScript += '\n' + keywordParser(string)
    //     })
    //
    //     writeToFileSync(testScript, function() {
    //     })
    //
    //     let file = fs.readFileSync(dataPath, 'utf8')
    //
    //     expect(file).to.equal(testScript)
    //   })
    // })
  })
})
