import { combineReducers } from 'redux';
import lists from './list';
import cards from './card';

export default combineReducers({
  lists, cards
});
