import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { DropTarget } from 'react-dnd';

const dropTarget = {
    drop(props, monitor) {
        props.dispatch({type: 'CHANGE_STATUS', todo: monitor.getItem().todo, status: props.category});
    }
};

function collectDrop(conn, monitor) {
    return {
        connectDropTarget: conn.dropTarget(),
        isOver: monitor.isOver()
    };
}

const List = ({dispatch, list, category, connectDropTarget}) => {
    console.log('dispatch: ', dispatch);
    return connectDropTarget(<div className="todo-list">{list.map((todo, i) => <TodoItem key={i} todo={todo} />)}</div>);
}

List.propTypes = {
    list: PropTypes.array.isRequired,
    connectDropTarget: PropTypes.func.isRequired
}

export default connect()(DropTarget('CARD', dropTarget, collectDrop)(List));
