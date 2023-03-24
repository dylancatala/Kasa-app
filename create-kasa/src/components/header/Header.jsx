import React from 'react';
import "./Header.css";

const Header = ({title, imageURL}) => {
  return (
    <div className="banner">
      <img src={imageURL} alt="Landscape" />
      <h1 className='home-title'>{title}</h1>
    </div>
  );
};

export default Header;