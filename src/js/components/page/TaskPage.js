/*
 * @Author: VickyFan 
 * @Date: 2018-04-19 15:14:36 
 * @Last Modified by:   VickyFan 
 * @Last Modified time: 2018-04-19 15:14:36 
 */
/**
 * 任务页面
 */
import React from 'react';
import ApplicationList from '../ApplicationList';
import BlankArea from '../common/BlankArea';
export default class TaskPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
    }
  }
  componentWillMount(){
    let permissions=sessionStorage.getItem('permissions');
    let item=[];
    if(permissions=='1'){
      item.push({avator: "", id: 20001, title: '在线选题', link: '/subject/subjectChoosed', info: ''});
    }else if(permissions=='2'){
      item.push({avator: "", id: 20002, title: '我的课题', link: '/subject/list', info: ''});
    }else if(permissions=='3'){
      item.push({avator: "", id: 20003, title: '待审批课题', link: '/subject/subjectApproval', info: ''});
    }
    this.state.items=item;
    this.setState({});
  }
  render() {
    let items;
    items = [
      { avator: "", id: 30001, title: '任务书', link: '/task/taskBook', info: '' },
      { avator: "", id: 30002, title: '开题报告', link: '/task/openingReport', info: '' },
      { avator: "", id: 30003, title: '外文翻译', link: '/task/englishTranslation', info: '' },
      { avator: "", id: 30004, title: '文献综述', link: '/task/literatureReview', info: '' },
      { avator: "", id: 30005, title: '毕业论文', link: '/task/graduationThesis', info: '' },
      { avator: "", id: 30006, title: '文档中心', link: '/task/documentCenter', info: '' }]
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