import React from 'react';

const ThatPost = function () {
        return React.createElement('Post', {}, [
          React.createElement('div', {}, [
            React.createElement('p', {}, 'doge')
          ]),
          React.createElement('img', {src: 'http://placecorgi.com/260/180'})
        ])
      };

module.exports = ThatPost;
