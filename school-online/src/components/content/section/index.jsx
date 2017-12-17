import React, {Component} from 'react';
import Title from '../title';
class Section extends Component {
  render () {
    let {value} = this.props;
    return (
      <section className="section-box">
      <Title title={value.title} moreShow={true}></Title>
      <div className="list-box">
      {
        value.list.map((item, index) => {
          return <dl key={index}>
            <dt>
              <img src={item.src} alt=""/>
            </dt>
            <dd>
              <p className="infor">{item.word}</p>
              <span>{item.college}</span>
            </dd>
          </dl>
        })
      }
      </div>
      </section>
    );
  }
}
export default Section;
