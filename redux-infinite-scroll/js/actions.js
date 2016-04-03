export function loadMore(dispatch) {
    dispatch({type: 'LOAD_MORE'});
    setTimeout(() => {
        dispatch({
            type: 'LOAD_FINISHED'
        });
    }, 2000);
}
