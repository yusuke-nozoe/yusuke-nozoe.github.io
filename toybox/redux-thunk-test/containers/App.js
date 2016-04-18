import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

const App = ({value, increment, decrement}) => (
    <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <span>{value}</span>
    </div>
)

const mapStateToProps = (state) => {
    console.log('state: ', state);
    return {
        value: state.value
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(actions.increment()),
        decrement: () => dispatch(actions.decrement()),
        asyncIncrement: () => dispatch(actions.asyncIncrement()),
        asyncDecrement: () => dispatch(actions.asyncDecrement())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
