import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import List from '../components/List';

const Root = ({lists, addList, addCard, saveList, editList}) => (
  <main>
    {lists.map((list, i) => 
        <List key={i} list={list} addCard={addCard} saveList={saveList} editList={editList} />)}
    <div className="add-list" onClick={addList}>
      <a href="javascript:;">Add a List</a>
    </div>
  </main>
);

const mapStateToProps = (state) => {
    return {
        lists: state.lists
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addList: () => dispatch({type: 'ADD_LIST'}),
        editList: (list) => dispatch({type: 'EDIT_LIST', list}),
        saveList: (list, title) => dispatch({type: 'SAVE_LIST', list, title}),
        addCard: (list) => dispatch({type: 'ADD_CARD', list})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);
