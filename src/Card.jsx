import React from 'react';
import './Custom.css'; //import the CSS file

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.alt} />
      <div className="card-content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
