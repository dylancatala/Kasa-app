import React from 'react';
import { Link } from "react-router-dom";
import './NotFound.css';

const NotFound = () => {
  return (
    <div className='content'>
      <p className='Nf-error'>404</p>
      <span className='Nf-text'>Oups! La page que vous demandez n'existe pas.</span>
      <Link className='Nf-goback' to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
};

export default NotFound;