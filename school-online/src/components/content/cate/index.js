import React, {Component} from 'react';
import './style.less';
class Cate extends Component {
  render () {
    let {cateList} = this.props;
    return (
      <div className="cate-box">
        <ul className="cate-list">
          {
            cateList.map((item, index) => {
              return <li key={index}>
                <div className="icon">
                  <img src={item.icon} alt=""/>
                </div>
                <p>{item.word}</p>
              </li>
            })
          }
        </ul>
      </div>
    );
  }
}
export default Cate;
