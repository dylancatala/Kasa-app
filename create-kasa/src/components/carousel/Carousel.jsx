import React, { Fragment, useState } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {

  const [currentImage, setCurrentImage] = useState(0);

  function previous() {
    const newImage = currentImage - 1 < 0 ? images.length - 1 : currentImage - 1;
    setCurrentImage(newImage);
  };

  function next() {
    const newImage = currentImage + 1 > images.length - 1 ? 0 : currentImage + 1;
    setCurrentImage(newImage);
  };


  return (
    <div className='carousel-container' style={{ backgroundImage: `url(${images && images[currentImage]})` }}>
      {images && (
        images.length > 1 && (
          <Fragment>
            <div className='arrows-buttons'>
              <i onClick={previous} className="fa-solid fa-chevron-left"></i>
              <i onClick={next} className="fa-solid fa-chevron-right"></i>
            </div>
            <p className='image-counter'>{currentImage + 1}/{images.length}</p>
          </Fragment>
        )
      )}
    </div>
  );
};

export default Carousel;