
    import React from 'react';
    import Carousel from './Carousel.jsx';

    const IndexComponent = function () {
      return (
        React.createElement('section', {className: 'flex-container'}, [
    <Carousel style={{"margin":"10px","height":"400px","width":"400px","backgroundColor":"grey","alignItems":"center","position":"relative","justifyContent":"center","flexWrap":"wrap","flexDirection":"row","display":"flex"}} arrayChildren={[[{"margin":"10px","height":"300px","width":"100px","backgroundColor":"white","alignItems":"center","position":"relative","justifyContent":"center","flexWrap":"wrap","flexDirection":"column","display":"flex"},{"children":[],"parent":{"type":"GalleryPost","componentId":3},"type":"Image","css":{"margin":"10px","height":"100px","width":"100px"},"alt":"","src":"https://smalldogbreeds.net/img/dog.jpg","name":"Default Image Name"},{"parent":{"type":"GalleryPost","componentId":3},"type":"Textbox","children":[],"css":{"margin":"10px","height":"100px","width":"100px","backgroundColor":"cornflowerblue"},"text":"yo","name":"Default Textbox Name"}],[{"margin":"10px","height":"300px","width":"200px","backgroundColor":"white","alignItems":"center","position":"relative","justifyContent":"center","flexWrap":"wrap","flexDirection":"column","display":"flex"},{"children":[],"parent":{"type":"GalleryPost","componentId":6},"type":"Image","css":{"margin":"10px","height":"100px","width":"100px"},"alt":"","src":"https://smalldogbreeds.net/img/dog.jpg","name":"Default Image Name"},{"parent":{"type":"GalleryPost","componentId":6},"type":"Textbox","children":[],"css":{"margin":"10px","height":"100px","width":"100px","backgroundColor":"cornflowerblue"},"text":"yoyo","name":"Default Textbox Name"}],[{"margin":"10px","height":"300px","width":"300px","backgroundColor":"white","alignItems":"center","position":"relative","justifyContent":"center","flexWrap":"wrap","flexDirection":"column","display":"flex"},{"children":[],"parent":{"type":"GalleryPost","componentId":9},"type":"Image","css":{"margin":"10px","height":"100px","width":"100px"},"alt":"","src":"https://smalldogbreeds.net/img/dog.jpg","name":"Default Image Name"},{"parent":{"type":"GalleryPost","componentId":9},"type":"Textbox","children":[],"css":{"margin":"10px","height":"100px","width":"100px","backgroundColor":"cornflowerblue"},"text":"yoyoyo","name":"Default Textbox Name"}]]} />
        ])
      )
    };

    module.exports = IndexComponent;
    