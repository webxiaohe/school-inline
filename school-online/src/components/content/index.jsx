import React, {Component} from 'react';
import Swiper from './swiper';
import Cate from './cate';
import './style.less';
import list from '@/mockjs';
import Interlayer from './interlayer';
import Section from './section';
import Soruce from './source';
import Live from './live';
import Degree from './degree';
import Banner from './banner';
import Knowledge from './knowledge';
class Content extends Component {
  render () {
    return (
      <div className="content-box">
        <Swiper imgList={list.src}></Swiper>
        <Cate cateList={list.item}></Cate>
        <Interlayer></Interlayer>
        <article>
          {
            list.course.map((item, index) => {
              return index === 1 ? <Soruce key={index}></Soruce> : <Section key={index} value={item}></Section>
            })
          }
          <Live value={list.live}></Live>
          <Degree value={list.degree}></Degree>
          <Banner></Banner>
          <Knowledge value={list.knowledge}></Knowledge>
        </article>
      </div>
    );
  }
}
export default Content;