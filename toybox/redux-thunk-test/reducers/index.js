export default function someReducer(state = {value: 0}, action) {
    switch (action.type) {
        case 'INCREMENT':
            return Object.assign({}, {value: state.value + 1});
        case 'DECREMENT':
            return Object.assign({}, {value: state.value - 1});
        default:
            return state;
    }
}
