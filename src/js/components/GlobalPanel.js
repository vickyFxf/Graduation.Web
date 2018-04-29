/*
 * @Author: VickyFan 
 * @Date: 2018-04-10 15:28:16 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-19 15:35:56
 */
import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Icon } from 'antd';
export default class GlobalPanel extends React.Component {
  constructor(props){
    super(props);
    this.state={
      globalPermission:sessionStorage.getItem('permissions'),
      globalUserName:sessionStorage.getItem('name')
    }
  }
  componentWillMount(){

  }
  render() {
    return (
      <div className="global-panel">
        <div className="logo-box">
          <div>
            <img src="/src/img/logo.png" alt="温州医科大学" className="logo" style={{width:'100%'}}/>
          </div>
        </div>
        <div className="nav-box">
          {/* <Link to="index" activeClassName="active" className="global-panel-item"><i className="iconfont icon-tongzhi"></i><div>通知</div></Link> */}
          <Link to="subject" activeClassName="active" className="global-panel-item"><i className="iconfont icon-jilu"></i><div>课题</div></Link>
          <Link to="task" activeClassName="active" className="global-panel-item"><i className="iconfont icon-renwu"></i><div>任务</div></Link>
          <Link to="selfInfo" activeClassName="active" className="global-panel-item"><i className="iconfont icon-yonghu"></i><div>个人中心</div></Link>
          {
            this.state.globalPermission=="3"?
            <Link to="userMgt" activeClassName="active" className="global-panel-item"><i className="iconfont icon-yonghu"></i><div>用户</div></Link>:""
          }
          {
            this.state.globalPermission=="3"?
            <Link to="set" activeClassName="active" className="global-panel-item"><i className="iconfont icon-xitong"></i><div>系统设置</div></Link>:""
          }
        </div>
        <div className="info-box">
          <a className="global-panel-item"><span className="avatar">{}</span></a>
        </div>
        <div className="exit-box">
          <a className="global-panel-item">
            <i className="iconfont icon-gengduo"></i>
            <div className="dropDown">
              <div className="dropItem"><i className="iconfont icon-guanyu"></i>关于</div>
              <div className="dropItem"><i className="iconfont icon-tuichu"></i>退出登录</div>
            </div>
          </a>
        </div>
      </div>
    )
  }
  //查看是否是初次登录
  // isFirstLogin() {
  //   let data = {};
  //   data.id = this.state.id;
  //   GetUserInfo(data).then(res => {
  //     let mdPwd = hex_md5('123456');
  //     if (res.password == mdPwd) {
  //       this.state.isFirst = true;
  //     } else {
  //       this.state.isFirst = false;
  //     }
  //     this.setState({});
  //   })
  // }
  // logout() {
  //   const tips = '退出前，请先修改默认密码';
  //   if (this.state.isFirst) {
  //     Modal.warning({
  //       title: '警告！',
  //       content: tips,
  //       onOk: () => {
  //         window.location.href = '';
  //       }
  //     })
  //   } else {
  //     window.location.href = 'http://localhost:4000/login.html';
  //   }
  // }
}