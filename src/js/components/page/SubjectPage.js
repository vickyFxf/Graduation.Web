import React from 'react';
import ApplicationList from '../ApplicationList';
import BlankArea from '../common/BlankArea';
export default class SubjectPage extends React.Component {
  render() {
    let items;
    items=[{avator: "", id: 10001, title: '申请选题', link: '/subject/subjectAdd', info: ''}]
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