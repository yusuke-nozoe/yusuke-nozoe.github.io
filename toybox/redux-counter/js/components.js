import React, { PropTypes } from 'react';
import { connect } from 'react-redux'

const RootComponent = ({ count, increment, decrement }) => (
   <div>
       <button onClick={increment}>Increment</button>
       <button onClick={decrement}>Decrement</button>
       <span>{count}</span>
   </div>
);

RootComponent.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({type: 'INCREMENT'}),
    decrement: () => dispatch({type: 'DECREMENT'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);
