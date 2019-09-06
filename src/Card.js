import React from 'react';
import './Card-styles.css';

function Card (props) {
    return (
        <div className='Card'>
            <button onClick={() => props.onDeleteCard(props.id)} type="button">delete</button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
}

Card.propTypes = {
    onClickDelete: () => {}
  }

export default Card;