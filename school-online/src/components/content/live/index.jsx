import React, {Component} from 'react';
import './style.less';
import Title from '../title';
class Live extends Component {
  render () {
    let {value} = this.props;
    console.log(value)
    return (
      <section className="live-box">
        <Title title={value.title} moreShow={true}></Title>
        {/* <h3>
          {value.title}
          <span>
            更多
            <i className="iconfont">&#xe6a7;</i>
          </span>
        </h3> */}
        <ul>
          {
            value.list.map((item, index) => {
              return <li key={index}>
                <div className="live-img">
                  <img src={item.src} alt=""/>
                </div>
                <div className="live-infor">
                  <p className="single-omit">
                    {item.name}：
                    {item.word}
                  </p>
                  <span>观看回顾</span>
                </div>
              </li>
            })
          }
        </ul>
      </section>
    );
  }
}
export default Live;
