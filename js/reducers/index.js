import { cssList, jsList, d3List } from '../constants/data';

export default function reducer(state = { cssList, jsList, d3List }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state
  }
}
