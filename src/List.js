//Import Card component
import React from 'react';
import Card from './Card';
import './List-styles.css';

export default function List (props) {
  return (
    <section className='List'>
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
       {props.cards.map(card => 
       <Card 
        title={card.title}
        content={card.content}
        id={card.id} 
        key={card.id} 
        onDeleteCard={props.onDeleteCard}
        />
       )}
      </div>
    </section>
  );
}