import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Products.css';
import Carousel from '../../components/carousel/Carousel';
import dataHouse from '../../data/logements.json';
import Accordion from '../../components/accordion/Accordion';
import Tags from '../../components/tags/Tags';


const Products = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    const data = dataHouse.find((item) => item.id === id);
    setData(data)
  }, [id]);



  return (
    <div>
      <Carousel images={data?.pictures} />
      <h1 className='main-title'>{data?.title}</h1>
      <p className='sub-title-location'>{data?.location}</p>
      <div className='tags-section'>
        <Tags />
      </div>
      <div className='accordion-position'>
        <Accordion title="Description" content={data?.description} />
        <Accordion title="Equipements" content={data?.equipments} />
      </div>
    </div>
  );
};

export default Products;