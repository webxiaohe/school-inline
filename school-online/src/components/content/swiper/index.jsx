import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
import './style.less';
class Swipers extends Component {
  render () {
    let {imgList} = this.props;
    return (
      <div className="swiper-box">
        <ReactSwipe className="carousel" swipeOptions={{continuous: true, auto: 1000, stopPropagation: false}}>
          {
            Array.from(imgList).map((item, index) => {
              return <img src={item} alt="" key={index}/>
            })
          }
        </ReactSwipe>
      </div>
    );
  }
}
export default Swipers;
