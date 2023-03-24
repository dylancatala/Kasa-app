import React from 'react';
import Header from '../../components/header/Header';
import './About.css';
import Accordion from '../../components/accordion/Accordion';

import data from '../../data/About.json';


const About = () => {
  return (
    <div className='page-wrapper'>
      <Header imageURL="images/about-banner.png" />
      <div className='about-content'>
        {data.map((item, idx) => (
          <Accordion key={idx} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
};

export default About;