import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Products.css';
import Carousel from '../../components/carousel/Carousel';
import dataHouse from '../../data/logements.json';
import Accordion from '../../components/accordion/Accordion';
import Tags from '../../components/tags/Tags';
import Review from '../../components/review/Review';
import Profile from '../../components/profile/Profile';


const Products = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const data = dataHouse.find((item) => item.id === id);
    data ? setData(data) : navigate('/404', { replace: true });
  }, [id]);

  return (
    <div>
      <Carousel images={data?.pictures} />
      <div className='info-section'>
        <div className='accommodation-info'>
          <h1 className='main-title'>{data?.title}</h1>
          <p className='sub-title-location'>{data?.location}</p>
          <div className='tags-section'>
            {data?.tags.map((tag, idx) => (
              <Tags key={idx} title={tag} />
            ))}
          </div>
        </div>
        <div className='host-infos'>
          <Profile name={data?.host.name} picture={data?.host.picture} />
          <div className='review-section'>
            <Review rate={data?.rating} />
          </div>
        </div>
      </div>

      <div className='accordion-position'>
        <Accordion title="Description" content={data?.description} />
        <Accordion title="Équipements" content={data?.equipments} />
      </div>
    </div>
  )
};

export default Products;