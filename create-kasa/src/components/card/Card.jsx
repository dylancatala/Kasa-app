import React from 'react';
import { NavLink } from "react-router-dom";
import './Card.css';

const Card = ({ data }) => {
  return (
    <div className='card-template'>
      <NavLink to={`/products/${data.id}`} className='card-template'>
      <img src={data.cover} alt="Picture of the house" />
      <p className='card-title'>{data.title}</p>
      </NavLink>
    </div>
  );
};

export default Card;