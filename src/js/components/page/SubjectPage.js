import React from 'react';
import ApplicationList from '../ApplicationList';
import BlankArea from '../common/BlankArea';
export default class SubjectPage extends React.Component {
  render() {
    let items;
    items=[{avator: "", id: 10000, title: '数据录入', link: '/efficiency/efficiencyData', info: ''}]
    return (
      <div className="page-container clear">
        <div className="sub-panel">
          <div className="sub-panel-content">
            <ApplicationList items={items}/>
          </div>
        </div>
        <div className="global-detail-area">
          <BlankArea/>
        </div>
      </div>
    )
  }
}