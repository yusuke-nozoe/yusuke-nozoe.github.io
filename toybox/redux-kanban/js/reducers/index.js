const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                status: 'TODO'
            }
        case 'CHANGE_STATUS':
            if (state.id !== action.todo.id) {
                return state;
            }
            return Object.assign({}, state, {status: action.status});
        default:
            return state
    }
}

export const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, todo(undefined, action)]
        case 'CHANGE_STATUS':
            return state.map(item => todo(item, action))
        default:
            return state;
    }
}
