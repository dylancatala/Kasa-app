import React, { Fragment, useState } from 'react';
import './Carousel.css';
import chevronleft from '../../images/Chevron-left.png';
import chevronright from '../../images/Chevron-right.png';

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
              <img src={chevronleft} alt="Chevron left" onClick={previous} />
              <img src={chevronright} alt="Chevron right" onClick={next} />
            </div>
            <p className='image-counter'>{currentImage + 1}/{images.length}</p>
          </Fragment>
        )
      )}
    </div>
  );
};

export default Carousel;