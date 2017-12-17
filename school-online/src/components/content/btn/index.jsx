import React, {Component} from 'react';
import './style.less';
class Btn extends Component {
  render () {
    let {title, clickBtn} = this.props;
    return (
      <button onClick={e => {clickBtn(e)}}>{title}</button>
    );
  }
}
export default Btn;