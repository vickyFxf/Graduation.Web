/*
 * @Author: VickyFan 
 * @Date: 2018-04-19 15:15:14 
 * @Last Modified by:   VickyFan 
 * @Last Modified time: 2018-04-19 15:15:14 
 */
/**
 * 用户管理页
 */
import React from 'react';
import ApplicationList from '../ApplicationList';
import BlankArea from '../common/BlankArea';
export default class UserPage extends React.Component {
  render() {
    let items;
    items = [
      { avator: "", id: 40001, title: '教师', link: '/userMgt/teacherMgt', info: '' },
      { avator: "", id: 40002, title: '学生', link: '/userMgt/studentMgt', info: '' },
      { avator: "", id: 40003, title: '管理员', link: '/userMgt/adminMgt', info: '' }]
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