import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import List from '../components/List';

const Root = ({lists, addList, addCard, saveList, editList, editCard, saveCard}) => (
  <main>
    {lists.map((list, i) => 
        <List key={i} list={list} addCard={addCard} saveList={saveList} editList={editList} 
              editCard={editCard} saveCard={saveCard}/>)}
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
        addList: () => dispatch(actions.addList()),
        editList: (list) => dispatch(actions.editList(list)),
        saveList: (list, title) => dispatch(actions.saveList(list, title)),
        addCard: (list) => dispatch(actions.addCard(list)),
        editCard: (list, card) => dispatch(actions.editCard(list, card)),
        saveCard: (list, card, text) => dispatch(actions.saveCard(list, card, text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);
