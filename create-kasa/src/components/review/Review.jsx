import React from 'react';
import './Review.css';

const Review = ({ rate }) => {
  return (
    <div className='review-container'>
      {Array.from({ length: 5 }).map((x, i) => (
        <i key={i} className="fa-solid fa-star" style={{ color: (i < rate) && '#FF6060' }}></i>
      ))}
    </div>
  );
};

export default Review;