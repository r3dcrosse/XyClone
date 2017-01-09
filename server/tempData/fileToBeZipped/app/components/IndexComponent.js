
    import React from 'react';

    const IndexComponent = function () {
      return (
        React.createElement('section', {className: 'flex-container'}, [
    React.createElement('GalleryPost', {}, [React.createElement('div', {style: {"margin":"10px","height":"400px","width":"400px","backgroundColor":"white","alignItems":"center","position":"relative","justifyContent":"center","flexWrap":"wrap","flexDirection":"column","display":"flex"}}, [React.createElement('img', {src: 'https://smalldogbreeds.net/img/dog.jpg', style: {"margin":"10px","height":"100px","width":"100px"}}),React.createElement('div', {style: {"margin":"10px","height":"100px","width":"100px","backgroundColor":"cornflowerblue"}}, 'sdfasdf')])]),React.createElement('div', {style: {"margin":"10px","height":"100px","width":"100px","backgroundColor":"cornflowerblue"}}, 'I AM A TEXTBOX I GOT LOADED HAHA'),React.createElement('img', {src: 'https://smalldogbreeds.net/img/dog.jpg', style: {"margin":"10px","height":"100px","width":"100px"}})
        ])
      )
    };

    module.exports = IndexComponent;
    