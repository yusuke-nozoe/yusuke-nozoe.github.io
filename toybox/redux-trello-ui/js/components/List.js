import React, { PropTypes } from 'react';
import Card from './Card';

const List = ({list, addCard}) => (
    <div className="list">
      {list.cards.map(card => <Card key={card.id} card={card} />)}
      <div className="add-card" onClick={() => addCard(list)}>
        <a href="javascript:;">Add a Card</a>
      </div>
    </div>
);

export default List;
