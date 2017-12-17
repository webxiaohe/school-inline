import React, {Component} from 'react';
import './style.less';
class Title extends Component {
  render () {
    let {title, moreShow} = this.props;
    return (
      <div className="title-box">
        <h3>
          {title}
          {
            moreShow && <span>
              更多
              <i className="iconfont">&#xe6a7;</i>
            </span>
          }
        </h3>
      </div>
    );
  }
}
export default Title;
