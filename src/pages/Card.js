import React from 'react';

const Card = ({ title, date, image, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-date">{date}</p>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
