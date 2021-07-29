import React from 'react';

function Card(props) {
  function handleCardClick() {
    props.onClick(props.card);
  }

  return (
    <li className="place">
      <img onClick={handleCardClick} src={props.card.link} className="place__image" alt={props.name} />
      <button className="place__delete-button" type="button"></button>
      <div className="place__text">
        <h2 className="place__name">{props.card.name}</h2>
        <div className="plase__likes">
          <button className="place__like" type="button"></button>
          <span className="place__like-meter">{props.card.likes.length}</span>
        </div>
      </div>  
    </li>
  );
}

export default Card;