import React from "react";
import './card-styles.css';

export const Card = (props) => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${props.card.id}?set=set2&size=180x180`} alt="monster" />
      <h1>{props.card.name}</h1>
      <p>props.card.email</p>
    </div>
  );
}
