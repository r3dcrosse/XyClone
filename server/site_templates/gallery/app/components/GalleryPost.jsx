import React from 'react';

const GalleryPost = ({style, name, image, textbox}) => {

  return (
    <div style={style}>
      <img src={image.src} style={image.css}/>
      <div style={textbox.css}>
        {textbox.text}
      </div>
    </div>

  )

}

export default GalleryPost;