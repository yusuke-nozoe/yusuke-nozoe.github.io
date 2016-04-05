import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({dispatch}) => {
    let input
    return (
        <div>
            <input type="text" ref={node => { input = node }} />
            <button onClick={(e) => {
                dispatch(addTodo(input.value))
                input.value = ''
            }}>Add Todo</button>
        </div>
    )
}

AddTodo.propTypes = {
    handleAdd: PropTypes.func.isRequired
}

export default connect()(AddTodo);
