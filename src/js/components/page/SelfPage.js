/*
 * @Author: VickyFan 
 * @Date: 2018-04-19 15:14:54 
 * @Last Modified by:   VickyFan 
 * @Last Modified time: 2018-04-19 15:14:54 
 */
/**
 * 个人中心页
 */
import React from 'react';
import ApplicationList from '../ApplicationList';
import BlankArea from '../common/BlankArea';
export default class SelfPage extends React.Component {
  render() {
    let items;
    items = [
      { avator: "", id: 50001, title: '基本信息', link: '/selfInfo/basicInfo', info: '' },
      { avator: "", id: 50002, title: '修改密码', link: '/selfInfo/changePwd', info: '' }];
    return (
      <div className="page-container clear">
        <div className="sub-panel">
          <div className="sub-panel-content">
            <ApplicationList items={items} />
          </div>
        </div>
        {this.props.children == undefined ?
          <div className="global-detail-area">
            <BlankArea />
          </div> : this.props.children}
      </div>
    )
  }
}