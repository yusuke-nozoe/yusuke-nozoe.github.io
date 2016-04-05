import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Root = ({todos, doings, dones, addTodo}) => (
  <main>
      <div className="todo">
        <h2>Todo ({todos.length})</h2>
        {todos.map((todo, i) => <div key={i}>{todo}</div>)}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div className="doing">
        <h2>Doing ({doings.length})</h2>
      </div>
      <div className="done">
        <h2>Done ({dones.length})</h2>
      </div>
  </main>
)

const mapStateToProps = (state) => {
    console.log('state: ', state);
    return {
        todos: state.todos,
        doings: state.doings,
        dones: state.dones,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (value) => dispatch({type: 'ADD_TODO', value})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);
