import React from "react";
import './card-list.styles.css';
import { Card } from '../card/card.component'

export const CardList = (props) => {
  return <div className="card-list">
    {props.cards.map(card => (
      <Card key={card.id} card={card}/>
    ))}
  </div>;
};
