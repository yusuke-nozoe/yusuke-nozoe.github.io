import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';

const Root = ({todos, doings, dones}) => (
  <main>
      <div className="todo">
        <h2>Todo ({todos.length})</h2>
        {todos.map((todo, i) => <div key={i}>{todo.text}</div>)}
        <AddTodo />
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
    let todos = [], doings = [], dones = [];
    state.forEach(item => {
        switch (item.status) {
            case 'TODO':
                todos.push(item)
                break
            case 'DOING':
                doings.push(item)
                break
            case 'DONE':
                dones.push(item)
                break
            default:
                break
        }
    })
    return { todos, doings, dones }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);
