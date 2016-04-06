import React, { PropTypes } from 'react';

const Card = ({list, card, saveCard}) => {
  let input;
  let content, buttons;
  if (card.isEditing) {
      content = <input type="text" ref={node => { input = node }} defaultValue={card.text} />
      buttons = <button onClick={() => saveCard(list, card, input.value)}>Save</button>
  } else {
      content = card.text
  }
  return (
    <div className="card">
    {content}
    {buttons}
    </div>
  );
};
export default Card;
