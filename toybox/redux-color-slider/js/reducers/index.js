export function slider(state = { red: 0, green: 0, blue: 0 }, action) {
  switch (action.type) {
    case 'SLIDE_RED':
      return Object.assign({}, state, { red: action.value });
    case 'SLIDE_GREEN':
      return Object.assign({}, state, { green: action.value });
    case 'SLIDE_BLUE':
      return Object.assign({}, state, { blue: action.value });
    default: 
      return state;
  }
}
