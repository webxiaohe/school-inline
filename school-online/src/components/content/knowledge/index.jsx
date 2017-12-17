import React, {Component} from 'react';
import '../degree/style.less';
import Title from '../title';
class Knowledge extends Component {
  render () {
    let {value} = this.props;
    console.log(value)
    return (
      <div className="knowledge-box">
        <Title title={value.title} moreShow={true}></Title>
        <div className="knowledge-scroll">
          <ul className="list-box knowledge-list">
            {
              value.list.map((item, index) => {
                return <li className="item-box" key={index}>
                  <img src={item.src} alt=""/>
                  <p className="single-omit">{item.word}</p>
                </li>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}
export default Knowledge;
