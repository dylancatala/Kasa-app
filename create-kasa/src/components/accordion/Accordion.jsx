import React, { useEffect, useState } from 'react';
import './Accordion.css';
import { classNames } from './../../helpers/style';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    if (Array.isArray(content))
      setData(content.join('<br />'))
    else
      setData(content);
  }, [content]);




  return (
    <div className={classNames(!isOpen && 'collapse', 'accordion-container')}>
      <header onClick={() => setIsOpen(!isOpen)} className='accordion-header '>
        <p className='accordion-title'>{title}</p>
        <button><i className="fa-solid fa-chevron-down"></i></button>
      </header>
      <div className='accordion-content' dangerouslySetInnerHTML={{ __html: data }} />
    </div>

  );
};

export default Accordion;