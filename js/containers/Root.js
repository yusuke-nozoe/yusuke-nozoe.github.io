import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from '../components/Header';

const baseURL = 'https://github.com/yusuke-nozoe/yusuke-nozoe.github.io/blob/master';
const cssList = [
  { date: '2016/04/01', filePath: "two-columns.html", title: 'Two columns' },
  { date: '2016/04/01', filePath: 'five-sections.html', title: 'Five sections' },
  { date: '2016/04/02', filePath: 'circle.html', title: 'Circle' },
  { date: '2016/04/02', filePath: 'triangle.html', title: 'Triangle' },
  { date: '2016/04/02', filePath: 'grid.html', title: 'Grid Structure' },
  { date: '2016/04/02', filePath: 'responsive.html', title: 'Responsive Grid' },
  { date: '2016/04/02', filePath: 'pinterest-ui.html', title: 'Pinterest like UI' },
  { date: '2016/04/03', filePath: 'sidebar-scroll.html', title: 'Sidebar Scroll' },
  { date: '2016/04/03', filePath: 'sidebar-responsive.html', title: 'Sidebar Responsive' },
  { date: '2016/04/03', filePath: 'fonts.html', title: 'Fonts' },
  { date: '2016/04/03', filePath: 'dashboard', title: 'Dashboard UI' },
  { date: '2016/04/04', filePath: 'icons', title: 'Icons' }
];
const jsList = [
  { date: '2016/04/03', filePath: "angular-hello-world.html", title: 'Hello world in AngularJS 1.x' },
  { date: '2016/04/03', filePath: "backbone-hello-world.html", title: 'Hello world in BackboneJS' },
  { date: '2016/04/03', filePath: "vue-hello-world.html", title: 'Hello world in Vue.js' },
  { date: '2016/04/03', filePath: "react-hello-world", title: 'Hello world in React' },
  { date: '2016/04/03', filePath: "redux-counter", title: 'Redux Counter' },
  { date: '2016/04/03', filePath: "redux-infinite-scroll", title: 'Redux Infinite Scroll' },
  { date: '2016/04/04', filePath: "redux-color-slider", title: 'Redux Color Slider' },
  { date: '2016/04/05', filePath: "redux-kanban", title: 'Redux Kanban Board UI' }
];
const d3List = [
  { date: '2016/04/03', filePath: "d3-line.html", title: 'D3 line chart (Yahoo stock price)' },
  { date: '2016/04/03', filePath: "d3-multi-line.html", title: 'D3 multi-series line chart' }
];

function _linkItem(item) {
  const filePath = `toybox/${item.filePath}`;
  return (
    <li key={item.filePath}>
        <a href={filePath}>{item.title} ({item.date})
        </a> <a href={`${baseURL}/${filePath}`} target="_blank">Source</a>
    </li>
  );
}

const Root = ({}) => (
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
          <li>Trello like UI</li>
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

export default connect(mapStateToProps, mapDispatchToProps)(Root);
