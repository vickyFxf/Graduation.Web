import React from 'react';
import ApplicationList from '../ApplicationList';
import BlankArea from '../common/BlankArea';
export default class TaskPage extends React.Component {
  render() {
    let items;
    items = [
      { avator: "", id: 40001, title: '任务书', link: '/task/openingReport', info: '' },
      { avator: "", id: 40002, title: '开题报告', link: '', info: '' },
      { avator: "", id: 40003, title: '外文原文', link: '', info: '' },
      { avator: "", id: 40003, title: '外文翻译', link: '', info: '' },
      { avator: "", id: 40003, title: '文献综述', link: '', info: '' },
      { avator: "", id: 40003, title: '论文', link: '', info: '' }]
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