import React, { useEffect, useState } from 'react';
import './Accordion.css';
import { classNames } from './../../helpers/style';
import chevron from '../../images/chevron.png';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    if (Array.isArray(content))
      setData(content.join('<br />'))
    else
      setData(content);
  }, [content]);


  const style = {
    transform: !isOpen ? 'rotate(180deg)' : '',
    transition: 'transform 0.4s',
  }


  return (
    <div className={classNames(!isOpen && 'collapse', 'accordion-container')}>
      <header onClick={() => setIsOpen(!isOpen)} className='accordion-header '>
        <p className='accordion-title'>{title}</p>
        <button><img src={chevron} alt="Chevron" style={style} /></button>
      </header>
      <div className='accordion-content' dangerouslySetInnerHTML={{ __html: data }} />
    </div>

  );
};

export default Accordion;