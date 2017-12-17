import React, {Component} from 'react';
import './style.less';
class Rail extends Component {
  render () {
    let {bailFlag} = this.props;
    return (
      <div className="rail-box">
        <div className="close" onClick={e => {bailFlag(e)}}>
        ×
        </div>
        <div className="rail-title">
          <p>学堂在线</p>
          <p>名校精品MOOC公开课</p>
        </div>
        <div className="down-app">
          <span>下载App</span>
        </div>
      </div>
    );
  }
}
export default Rail;