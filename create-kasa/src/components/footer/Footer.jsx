import React from 'react';
import "./Footer.css";
import kasalogo from '../../images/White-logo.png';

//Footer
const Footer = () => {
  return (
    <div className='footer'>
      <img src={kasalogo} alt="" />
      <div className='footer-rights'>
        <span className='footer-text'>©2023 Kasa. All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;