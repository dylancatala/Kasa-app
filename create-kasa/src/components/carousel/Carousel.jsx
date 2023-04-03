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
    <div className='carousel-container'>
      {images && (
        <Fragment>
          <img src={images[image]} alt="Accommodation" />
          <button onClick={previous}>-</button>
          <button onClick={next}>+</button>
        </Fragment>
      )}
    </div>
  );
};

export default Carousel;