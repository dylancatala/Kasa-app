import React, { Fragment, useState } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {

  const [image, setImage] = useState(0);

  function previous() {
    const newImage = image - 1 < 0 ? images.length - 1 : image - 1;
    setImage(newImage)
  };

  function next() {
    const newImage = image + 1 > images.length - 1 ? 0 : image + 1;
    setImage(newImage)
  };


  return (
    <div className='carousel-container' style={{ backgroundImage: `url(${images && images[image]})` }}>
      {images && (
        images.length > 1 && (
          <Fragment>
            <div className='arrows-buttons'>
              <i onClick={previous} className="fa-solid fa-chevron-left"></i>
              <i onClick={next} className="fa-solid fa-chevron-right"></i>
            </div>
            <p className='image-counter'>{image + 1}/{images.length}</p>
          </Fragment>
        )
      )}
    </div>
  );
};

export default Carousel;