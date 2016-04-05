import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';
import List from '../components/List';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const Root = ({todos, doings, dones}) => (
  <main className="row">
      <div className="list todo">
        <h2>Todo ({todos.length})</h2>
        <List list={todos} category="TODO" />
        <AddTodo />
      </div>
      <div className="list doing">
        <h2>Doing ({doings.length})</h2>
        <List list={doings} category="DOING" />
      </div>
      <div className="list done">
        <h2>Done ({dones.length})</h2>
        <List list={dones} category="DONE" />
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

export default DragDropContext(HTML5Backend)(connect(mapStateToProps, mapDispatchToProps)(Root));
