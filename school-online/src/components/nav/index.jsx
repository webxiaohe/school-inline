import React, {Component} from 'react';
import './style.less';
import {NavLink} from 'react-router-dom';
class Nav extends Component {
  render () {
    return (
      <div className="nav-box">
        <ul>
          <li>
            <NavLink to="lesson">课程</NavLink>
          </li>
          <li>
            <NavLink to="appdown">App下载</NavLink>
          </li>
          <li>
            <NavLink to="rain">雨课程</NavLink>
          </li>
          <li>
            <NavLink to="login">登录</NavLink>
          </li>
          <li>
            <NavLink to="register">注册</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
export default Nav;
