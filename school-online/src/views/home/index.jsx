import React, { Component } from 'react';
import HeaderBar from '@/components/headerbar';
import Rail from '@/components/rail'; // 头部的下载App;
import Nav from '@/components/nav';
import Content from '@/components/content';
import FooterBar from '@/components/footerbar';
class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      bailFlag: true,
      navFlag: false
    }
  }
  changeBail () {
    this.setState({
      bailFlag: false
    })
  }
  changeNav () {
    this.setState({
      navFlag: !this.state.navFlag
    })
  }
  render() {
    return (
      <div className="home-box">
        {
          this.state.bailFlag && <Rail bailFlag={this.changeBail.bind(this)}></Rail>
        }
        {
          this.state.navFlag && <Nav></Nav>
        }
        <HeaderBar navFlag={this.changeNav.bind(this)}></HeaderBar>
        <Content></Content>
        <FooterBar></FooterBar>
      </div>
    );
  }
}

export default Home;
