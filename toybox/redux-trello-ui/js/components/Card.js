import React, { PropTypes } from 'react';

const Card = ({list, card, editCard, saveCard}) => {
  let input;
  let content, buttons;
  if (card.isEditing) {
      content = <input type="text" ref={node => { input = node }} defaultValue={card.text} />
      buttons = <button onClick={() => saveCard(list, card, input.value)}>Save</button>
  } else {
      content = <div onClick={() => editCard(list, card)}>{card.text}</div>
  }
  return (
    <div className="card">
    {content}
    {buttons}
    </div>
  );
};
export default Card;
