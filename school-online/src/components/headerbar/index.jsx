import React, { Component } from 'react';
import './style.less';
class HomeBar extends Component {
  render () {
    let {navFlag} = this.props
    return (
      <header className="header-bar">
        <div className="logo">
          <img src="http://storage.xuetangx.com/public_assets/xuetangx/xuetangxImg/logo_web.png" alt=""/>
        </div>
        <div className="option" onClick={e => {navFlag(e)}}>
          <img src="//storagecdn.xuetangx.com/public_assets/xuetangx/xuetangxImg/mobile_nav_switch2.png" alt=""/>
        </div>
        <div className="login-btn">
          <span>登录</span>
        </div>
      </header>
    );
  }
}
export default HomeBar;
