import React, { PropTypes } from 'react';
import Card from './Card';

const List = ({list, addCard, editList, saveList, saveCard}) => {
  let input;
  return (
    <div className="list">
      {
          list.isEditing ? (
              <div>
                <input type="text" ref={node => { input = node }} defaultValue={list.title} />
                <button onClick={() => saveList(list, input.value)}>Save</button>
              </div>
          ) : <div className="list-title" onClick={() => editList(list)}>{list.title}</div>
      }
      {list.cards.map(card => <Card key={card.id} list={list} card={card} saveCard={saveCard} />)}
      <div className="add-card" onClick={() => addCard(list)}>
        <a href="javascript:;">Add a Card</a>
      </div>
    </div>
  );
};

export default List;
