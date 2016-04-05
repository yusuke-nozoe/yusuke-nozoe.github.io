import React, { PropTypes } from 'react';
import { DragSource, DropTarget } from 'react-dnd';

const dropTarget = {
    drop(props) {
        console.log('dropped!');
    }
};

function collectDrop(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}

const cardSource = {
    beginDrag(props) {
        return {
            todo: props.todo
        };
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}

const TodoItem = ({isDragging, connectDragSource, connectDropTarget, todo}) => {
    return connectDropTarget(connectDragSource(<div className="todo-item">{todo.text}</div>))
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired
}

export default DropTarget('CARD', dropTarget, collectDrop)(DragSource('CARD', cardSource, collect)(TodoItem));
