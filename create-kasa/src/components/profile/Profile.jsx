import React from 'react';
import './Profile.css';

const Profile = ({ name, picture }) => {
  return (
    <div className='profile-container'>
      <div className='profile-name'>{name?.split(" ").map((item, idx) => <p key={idx}>{item}</p>)}</div>
      <div className='profile-picture'>
        <img src={picture} alt="Host" />
      </div>
    </div>
  );
};

export default Profile;