/*
 * @Author: VickyFan 
 * @Date: 2018-04-19 15:14:36 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-05-08 12:49:43
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
      item=[
        { avator: "", id: 30001, title: '我的课题(学生)', link: '/task/mySubject', info: '' },
        { avator: "", id: 30002, title: '任务书', link: '/task/taskBook', info: '' },
        { avator: "", id: 30003, title: '开题报告', link: '/task/openingReport', info: '' },
        { avator: "", id: 30004, title: '外文翻译', link: '/task/englishTranslation', info: '' },
        { avator: "", id: 30005, title: '文献综述', link: '/task/literatureReview', info: '' },
        { avator: "", id: 30006, title: '毕业论文', link: '/task/graduationThesis', info: '' },
        { avator: "", id: 30007, title: '文档中心', link: '/task/documentCenter', info: '' }];
    }else if(permissions=='2'){
      item=[
        //我的学生页面，主要是包括教师所带学生列表、是否通过该生、学生详情、学生文档
        { avator: "", id: 30001, title: '我的学生', link: '/task/myStudent', info: '' }];
    }
    this.state.items=item;
    this.setState({});
  }
  render() {
    return (
      <div className="page-container clear">
        <div className="sub-panel">
          <div className="sub-panel-content">
            <ApplicationList items={this.state.items} />
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