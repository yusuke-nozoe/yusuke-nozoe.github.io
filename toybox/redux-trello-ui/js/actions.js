export function addList() {
    return {type: 'ADD_LIST'};
}

export function editList(list) {
    return {type: 'EDIT_LIST', list};
}

export function saveList(list, title) {
    return {type: 'SAVE_LIST', list, title}
}

export function addCard(list) {
    return {type: 'ADD_CARD', list};
}

export function editCard(list, card) {
    return {type: 'EDIT_CARD', list, card}
}

export function saveCard(list, card, text) {
    return {type: 'SAVE_CARD', list, card, text}
}
