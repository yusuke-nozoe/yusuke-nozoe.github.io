import React, { PropTypes } from 'react';

const Card = ({card}) => {
  let content, buttons;
  if (card.isEditing) {
      content = <input type="text" />
      buttons = <button>Save</button>
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
