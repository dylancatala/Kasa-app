import React from 'react';
import "./Header.css";

import { classNames } from '../../helpers/style';

const Header = ({ title, home }) => {
  return (
    <div className={classNames(home ? 'home' : 'about', 'banner')}>
      <p className='home-title'>{title}</p>
    </div>
  );
};

export default Header;