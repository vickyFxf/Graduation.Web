/*
 * @Author: VickyFan 
 * @Date: 2018-04-19 15:13:54 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-19 16:01:29
 */
/**
 * 课题页面
 */
import React from 'react';
import ApplicationList from '../ApplicationList';
import BlankArea from '../common/BlankArea';
export default class SubjectPage extends React.Component {
  render() {
    let items;
    items=[
      //学生选题
      {avator: "", id: 20001, title: '在线选题', link: '/subject/subjectChoosed', info: ''},
      //单个教师发布的课题
      {avator: "", id: 20002, title: '我的课题', link: '/subject/list', info: ''},
      //全部教师发布的课题
      {avator: "", id: 20003, title: '全部课题', link: '/subject/subjectAdd', info: ''},
      //主任待审批课题
      {avator: "", id: 20004, title: '待审批课题', link: '/subject/subjectAdd', info: ''}]
    return (
      <div className="page-container clear">
        <div className="sub-panel">
          <div className="sub-panel-content">
            <ApplicationList items={items}/>
          </div>
        </div>
        <div className="global-detail-area">
        {this.props.children == undefined ?
          <div className="global-detail-area">
            <BlankArea />
          </div> : this.props.children}
        </div>
      </div>
    )
  }
}