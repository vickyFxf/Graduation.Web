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