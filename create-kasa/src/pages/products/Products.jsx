import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Products.css';
import Carousel from '../../components/carousel/Carousel';
import dataHouse from '../../data/logements.json';

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
    </div>
  );
};

export default Products;