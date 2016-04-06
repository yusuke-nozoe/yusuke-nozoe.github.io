import cards from './card';
let nextListID = 1;
const listItem = (state, action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return {
        id: nextListID++,
        title: '',
        cards: [],
        isEditing: true
      };
    case 'EDIT_LIST':
      if (state.id !== action.list.id) {
        return state;
      }
      return Object.assign({}, state, { isEditing: true });      
    case 'SAVE_LIST':
      if (state.id !== action.list.id) {
        return state;
      }
      return Object.assign({}, state, { title: action.title, isEditing: false });
    case 'CANCEL_EDIT_LIST':
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, { isEditing: false });
    case 'ADD_CARD':
      if (state.id !== action.list.id) {
        return state;
      }
      return Object.assign({}, state, {
          cards: cards(state.cards, action)
      });
    case 'EDIT_CARD':
      if (state.id !== action.list.id) {
        return state;
      }
      return Object.assign({}, state, {
          cards: cards(state.cards, action)
      });
    case 'SAVE_CARD':
      if (state.id !== action.list.id) {
        return state;
      }
      return Object.assign({}, state, {
          cards: cards(state.cards, action)
      });
    default:
      return state;
  }
}
const lists = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return [...state, listItem(undefined, action)];
    case 'EDIT_LIST':
      return state.map(item => listItem(item, action));
    case 'SAVE_LIST':
      return state.map(item => listItem(item, action));
    case 'CANCEL_EDIT_LIST':
      return state.map(item => listItem(item, action));      
    case 'ADD_CARD':
      return state.map(item => listItem(item, action));      
    case 'EDIT_CARD':
      return state.map(item => listItem(item, action));      
    case 'SAVE_CARD':
      return state.map(item => listItem(item, action));      
    default:
      return state;
  }
}
export default lists;
