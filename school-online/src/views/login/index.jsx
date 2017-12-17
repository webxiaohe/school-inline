import React, { Component } from 'react';
import Btn from '@/components/content/btn';
import './style.less';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorFlag: false,
      codeFlag: false
    }
  }
  render() {
    return (
      <div className="login-box">
        <div className="login-banner">
          <img src="//storagecdn.xuetangx.com/static/images/new_header/login_header_daytime.08fd32d3db87.gif" alt=""/>
        </div>
        <div className="third-party">
          <div>
            <span>第三方账号登录</span>
            <div className="third-icon">
              <div className="micro-icon">
                <img src="http://www.xuetangx.com/static/images/phone/weibolog.png" alt=""/>
              </div>
              <div className="qq-icon">
                <img src="http://www.xuetangx.com/static/images/phone/qqlog.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
        <div className="form-box">
            <div className="form-title">
              <span>学堂在线账号登录</span>
              <a href="javascript:;">没有账号，免费注册</a>
            </div>
            <form>
              <input type="text" placeholder="登录邮箱/用户名/手机号"/>
              <input type="password" placeholder="密码"/>
              <div className="code-box">
                {
                  this.state.codeFlag && <div>
                    <div className="code-img">
                      <img src="http://www.xuetangx.com/validate_image/?4741603" alt=""/>
                    </div>
                    <input type="text" placeholder="请填写验证码"/>
                  </div>
                }
              </div>
              <div className="error-box">
                {
                  this.state.errorFlag && '用户名或密码错误'
                }
              </div>
              <div className="btn-box">
                <Btn title={'立即登录'}></Btn>
              </div>
            </form>
          </div>
      </div>
    );
  }
}

export default Login;
