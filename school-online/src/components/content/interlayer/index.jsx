import React, {Component} from 'react';
import './style.less';
class Interlayer extends Component {
  render () {
    return (
      <div className="interlayer-box">
        <div className="watch-history">
          <i>
            <img src="http://storage.xuetangx.com/public_assets/xuetangx/xuetangxImg/video.png" alt=""/>
          </i>
          <span>观看历史</span>
        </div>
        <div className="infor-wrapper">
          <i className="iconfont">&#xe694;</i>
          <p className="infor-title">
            来清华大学的《创业引导》课
          </p>
          <p className="infor-cont">
          齐伟：创业路上那些简单好用的招《创业导引2017秋》11
          </p>
        </div>
      </div>
    );
  }
}
export default Interlayer;
