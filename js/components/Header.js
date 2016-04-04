import React from 'react';

const Header = () => (
  <div className="header">
    <div className="brand">
      <a href="/">Front-end Playground</a>
    </div>
    <div className="header-nav">
      <ul className="nav-right">
        <li>
          <a href="https://github.com/yusuke-nozoe/yusuke-nozoe.github.io" target="_blank">
               <i className="fa fa-github" /></a></li>
        <li>
          <a href="https://twitter.com/yusuke_nozoe" target="_blank">
            <i className="fa fa-twitter" />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
