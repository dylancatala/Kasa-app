import React, { useState } from 'react';
import './Accordion.css';
import { classNames } from './../../helpers/style';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classNames(!isOpen && 'collapse', 'accordion-container')}>
      <header className='accordion-header'>
        <p className='accordion-title'>{title}</p>
        <button onClick={() => setIsOpen(!isOpen)}>+</button>
      </header>
      <div className='accordion-content'>{content}</div>
    </div>

  );
};

export default Accordion;