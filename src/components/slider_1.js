import React from "react";
import ImageGallery from 'react-image-gallery';
//import images from "./slide_images"

import "react-image-gallery/styles/css/image-gallery.css"
//import "react-image-gallery/styles/css/image-gallery-no-icon.css"

const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

const Slider = () => {


    return(
        
        <ImageGallery 
            items={images} 
            showThumbnails={false}
        />
    )
}

export default Slider