import React, {Component} from 'react';
import './style.less';
import Title from '../title';
class Degree extends Component {
  render () {
    let {value} = this.props;
    return (
      <div className="degree-box">
        <Title title={value.title} moreShow={true}></Title>
        <div className="degree-scroll">
          <ul className="list-box">
            {
              value.list.map((item, index) => {
                return <li className="item-box" key={index}>
                  <img src={item.src} alt=""/>
                  <div className="img-top">
                    <p className="degree-name">{item.name}</p>
                    <p className="degree-company">{item.company}</p>
                  </div>
                </li>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}
export default Degree;