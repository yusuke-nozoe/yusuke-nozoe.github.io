let nextCardID = 1;
const card = (state, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return {
        id: nextCardID++,
        text: '',
        isEditing: true
      };
    case 'EDIT_CARD':
      if (state.id !== action.id) {
        return;
      }
      return Object.assign({}, state, { isEditing: true });      
    case 'SAVE_CARD':
      if (state.id !== action.card.id) {
        return;
      }
      return Object.assign({}, state, { text: action.text, isEditing: false });
    case 'CANCEL_EDIT_CARD':
      if (state.id !== action.id) {
        return;
      }
      return Object.assign({}, state, { isEditing: false });
    case 'MOVE_CARD':
      if (state.id !== action.id) {
        return;
      }
      return Object.assign({}, state, { isEditing: false });
    default:
      return state;
  }
}
const cards = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return [...state, card(undefined, action)];
    case 'EDIT_CARD':
      return state.map(item => card(item, action));
    case 'SAVE_CARD':
      return state.map(item => card(item, action));
    case 'CANCEL_EDIT_CARD':
      return state.map(item => card(item, action));      
    default:
      return state;
  }
}
export default cards;
