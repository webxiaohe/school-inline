import React, { Component } from 'react';
import Btn from '@/components/content/btn'
import './style.less';
class AppDown extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '下载'
    }
  }
  clickBtn (e) {
    switch(e.target.innerText) {
      case '下载':
        console.log('下载完成')
      break;
      default:
      break;
    }
  }
  render() {
    return (
      <div className="app-download">
        <div className="back">
          <img src="http://storagecdn.xuetangx.com/public_assets/xuetangx/mdownload/bg.png" alt=""/>
        </div>
        <h2>全球好课在你指尖</h2>
        <div className="down-img">
          <img src={require('@/static/images/mobail.png')} alt=""/>
        </div>
        <h4>学堂在线</h4>
        <p>iPhone客户端</p>
        <div className="down-btn">
          <Btn title={this.state.title} clickBtn={this.clickBtn}></Btn>
        </div>
      </div>
    );
  }
}

export default AppDown;
