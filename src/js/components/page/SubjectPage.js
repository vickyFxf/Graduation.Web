/*
 * @Author: VickyFan 
 * @Date: 2018-04-19 15:13:54 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-27 15:28:39
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
    items = [
      {avator: "", id: 20001, title: '在线选题', link: '/subject/subjectChoosed', info: ''},
      {avator: "", id: 20002, title: '我的课题', link: '/subject/list', info: ''}]
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