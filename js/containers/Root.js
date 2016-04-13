import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from '../components/Header';
import { baseURL } from '../constants';


function _linkItem(item) {
  const filePath = `toybox/${item.filePath}`;
  return (
    <li key={item.filePath}>
        <a href={filePath}>{item.title} ({item.date})
        </a> <a href={`${baseURL}/${filePath}`} target="_blank">Source</a>
    </li>
  );
}

const Root = ({cssList, jsList, d3List}) => (
  <main>
    <Header />
    <div className="container">
      <div className="panel">
        <h2>CSS</h2>
        <ul>{cssList.map(item => _linkItem(item))}</ul>
      </div>
      <div className="panel">
        <h2>JavaScript</h2>
        <ul>
          {jsList.map(item => _linkItem(item))}
          <li>Elm Hello world</li>
          <li>material-ui</li>
        </ul>
      </div>
      <div className="panel">
        <h2>Chart / Data Visualization</h2>
        <ul>
          {d3List.map(item => _linkItem(item))}
          <li>D3 area chart</li>
          <li>D3 pie chart</li>
          <li>D3 bar chart</li>
          <li>D3 bubble chart</li>
          <li>World Statistics (Population, GDP, etc.)</li>
          <li>Historical Stock Price Viewer(Ticker, Date range, Add-remove series)</li>
        </ul>
      </div>
      <div className="panel">
        <h2>Games</h2>
        <ul>
          <li>Othello</li>
          <li>Tetris</li>
        </ul>
      </div>
      <div className="panel">
        <h2>Apps</h2>
        <ul>
          <li>Browser Testing Tool (Create Test Schenario, Configure supporting browser, Record the test results)</li>
          <li>Routine Manager (Create routine list, Record / Visualize them)</li>
        </ul>
      </div>
      <div className="panel">
        <h2>Todo of this page</h2>
        <ul>
          <li>Filter by category</li>
          <li>Order by date</li>
          <li>About page with redux router</li>
        </ul>
      </div>
    </div>
  </main>
);

const mapStateToProps = (state) => {
  let cssList = [], jsList = [], d3List = [];
  state.forEach(item => {
    switch (item.category) {
      case 'css':
        cssList.push(item);
        break;
      case 'js':
        jsList.push(item);
        break;
      case 'd3':
        d3List.push(item);
        break;
      default:
        break;
    }
  });
  return { cssList, jsList, d3List };
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({type: 'INCREMENT'}),
    decrement: () => dispatch({type: 'DECREMENT'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);
