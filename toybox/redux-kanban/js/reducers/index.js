export function list(state = {todos: [], doings: [], dones: []}, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return Object.assign({}, state, {todos: [...state.todos, action.value]});
        default:
            return state;
    }
}
