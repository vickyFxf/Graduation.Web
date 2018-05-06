/**
 * 系统设置页
 */
import React from 'react';
import ApplicationList from '../ApplicationList';
import BlankArea from '../common/BlankArea';
export default class SetPage extends React.Component {
  render() {
    let items;
    items = [
      { avator: "", id: 60001, title: '分类管理', link: '/set/classificationMgt', info: '' },
      { avator: "", id: 60002, title: '文档管理', link: '/set/uploaderDocument', info: '' },
      { avator: "", id: 60002, title: '上传文档', link: '/set/test', info: '' }]
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