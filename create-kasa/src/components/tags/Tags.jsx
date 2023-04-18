import React from 'react';
import './Tags.css';

const Tags = ({title}) => {
  return (
    <div className='tags-container'>
      <p className='tags-content'>{title}</p>
    </div>
  );
};

export default Tags;