/*
 * @Author: VickyFan 
 * @Date: 2018-04-10 15:28:16 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-05-08 12:38:22
 */
import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Icon ,Modal} from 'antd';
import {GetUserInfo} from '../services/usersService.js';
export default class GlobalPanel extends React.Component {
  static contextTypes={  
      router:React.PropTypes.object  
  } 
  constructor(props,context){
    super(props,context);
    this.context.router;
    this.state={
      globalPermission:sessionStorage.getItem('permissions'),
      iconName:'',
      id:sessionStorage.getItem('id'),
      teacher:-1,
    }
  }
  componentWillMount(){
    let a = sessionStorage.getItem('userName');
    this.state.iconName = a.substr(0,1);
    this.getCurrentUser();
    this.setState({})
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
          {
            this.state.globalPermission=="1"||this.state.globalPermission=="2"?
            <Link to="subject" activeClassName="active" className="global-panel-item"><i className="iconfont icon-buoumaotubiao25"></i><div>课题</div></Link>:""
          }
          {
            (this.state.globalPermission=="1")||(this.state.teacher==1)?
            <Link to="task" activeClassName="active" className="global-panel-item"><i className="iconfont icon-renwu"></i><div>任务</div></Link>:""
          }
          {
            this.state.globalPermission=="3"?
            <Link to="userMgt" activeClassName="active" className="global-panel-item"><i className="iconfont icon-renyuanguanli"></i><div>用户</div></Link>:""
          }
          <Link to="selfInfo" activeClassName="active" className="global-panel-item"><i className="iconfont icon-geren"></i><div>个人中心</div></Link>
          {
            this.state.globalPermission=='2'&&this.state.teacher==2?
            <Link to="set" activeClassName="active" className="global-panel-item"><i className="iconfont icon-xitong"></i><div>系统设置</div></Link>:""
          }
        </div>
        <div className="info-box">
          <a className="global-panel-item"><span className="avatar">{this.state.iconName}</span></a>
        </div>
        <div className="exit-box">
          <a className="global-panel-item">
            <i className="iconfont icon-gengduomore12"></i>
            <div className="dropDown">
              <div className="dropItem"><i className="iconfont icon-about"></i>关于</div>
              <div className="dropItem" onClick={this.logout.bind(this)}><i className="iconfont icon-tuichu"></i>退出登录</div>
            </div>
          </a>
        </div>
      </div>
    )
  }
  getCurrentUser(){
    let data={};
    data.id=sessionStorage.getItem('id');
    GetUserInfo(data).then(res=>{
      if(res){
        if(res[0].position){
          this.state.teacher=res[0].position;
        }
      }
      this.setState({});
    })
  }
  logout(e) {
    e.stopPropagation();
    let data = {};
    data.id = sessionStorage.getItem('id');
    GetUserInfo(data).then(res => {
      let mdPwd = hex_md5('123456');
      if (res[0].password == mdPwd) {
        Modal.warning({
          title: '警告！',
          content: '退出前，请先修改系统默认密码！',
          onOk: () => {
            this.context.router.push("/selfInfo/changePwd");
          }
        })
      } else {
        sessionStorage.removeItem("id");
        sessionStorage.removeItem("userName");
        sessionStorage.removeItem("permissions");
        window.location.href = 'http://localhost:4000/login.html';
      }
    })
  }
}