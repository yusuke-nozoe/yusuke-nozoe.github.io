import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const RootApp = ({red, green, blue, slideRed, slideGreen, slideBlue}) => (
  <main>
    <div className="palette" style={{backgroundColor: `rgb(${red},${green},${blue})`}} />
    <div>
      <label>Red</label>
      <input type="number" value={red} onChange={slideRed} />
      <input type="range" min="0" value={red} max="255" step="1" onChange={slideRed} />
    </div>
    <div>
      <label>Green</label>
      <input type="number" value={green} onChange={slideGreen} />
      <input type="range" min="0" value={green} max="255" step="1" onChange={slideGreen} />
    </div>
    <div>
      <label>Blue</label>
      <input type="number" value={blue} onChange={slideBlue} />
      <input type="range" min="0" value={blue} max="255" step="1" onChange={slideBlue} />
    </div>
  </main>
);

const mapStateToProps = (state) => {
  return Object.assign({}, state);
}

const mapDispatchToProps = (dispatch) => {
  return {
    slideRed: (e) => dispatch(actions.slideRed(e.target.value)),
    slideGreen: (e) => dispatch(actions.slideGreen(e.target.value)),
    slideBlue: (e) => dispatch(actions.slideBlue(e.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootApp);
