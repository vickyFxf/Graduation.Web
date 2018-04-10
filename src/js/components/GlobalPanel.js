/*
 * @Author: VickyFan 
 * @Date: 2018-04-10 15:28:16 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-10 20:28:15
 */
import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Icon } from 'antd';
export default class GlobalPanel extends React.Component {
  render() {
    return (
      <div className="global-panel">
        <div className="logo-box">
          <div>
            <img src="/src/img/logo.gif" alt="温州医科大学" className="logo" style={{width:'100%'}}/>
          </div>
        </div>
        <div className="nav-box">
          <Link to="index" activeClassName="active" className="global-panel-item"><i className="iconfont icon-tongzhi"></i><div>通知</div></Link>
          {/* <Link to="" activeClassName="active" className="global-panel-item"><i className="iconfont icon-jilu"></i><div>课题</div></Link> */}
          {/* <Link to="" activeClassName="active" className="global-panel-item"><i className="iconfont icon-renwu"></i><div>任务</div></Link> */}
          <Link to="userMgt" activeClassName="active" className="global-panel-item"><i className="iconfont icon-yonghu"></i><div>用户</div></Link>
          {/* <Link to="" activeClassName="active" className="global-panel-item"><i className="iconfont icon-xitong"></i><div>系统设置</div></Link> */}
        </div>
        <div className="info-box">
          <a className="global-panel-item"><span className="avatar">范</span></a>
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
}