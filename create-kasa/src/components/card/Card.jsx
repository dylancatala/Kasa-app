import React from 'react';
import './Card.css';

const Card = ({ data }) => {
  console.log(data)



  return (
    <div className='card-template'>
      <a href={data.id} className='card-template'>
      <img src={data.cover} alt="Picture of the house" />
      <p className='card-title'>{data.title}</p>
      </a>
    </div>
  );
};

export default Card;