/*
 * @Author: VickyFan 
 * @Date: 2018-04-19 15:13:54 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-28 10:26:00
 */
/**
 * 课题页面
 */
import React from 'react';
import ApplicationList from '../ApplicationList';
import BlankArea from '../common/BlankArea';
import {GetUserInfo } from '../../services/usersService.js';
export default class SubjectPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      isDirector:false,//默认不是主任
      currentUser:[],
    }
  }
  componentWillMount(){
    this.getCurrentUser();
  }
  getCurrentUser(){
    let data = {};
    data.id = sessionStorage.getItem('id');
    GetUserInfo(data).then(res => {
      if(res){
        this.state.currentUser=res[0];
      }
      this.setState({});
    })
  }
  render() {
    let item=[];
    if(this.state.currentUser.permissions==1){
      item.push({avator: "", id: 20001, title: '在线选题', link: '/subject/subjectChoosed', info: ''});
    }else if(this.state.currentUser.permissions==2&&this.state.currentUser.position==1){
      item.push({avator: "", id: 20002, title: '我的课题', link: '/subject/list', info: ''});
    }else if(this.state.currentUser.permissions==2&&this.state.currentUser.position==2){
      item.push({avator: "", id: 20003, title: '待审批课题', link: '/subject/subjectApproval', info: ''});
    }
    return (
      <div className="page-container clear">
        <div className="sub-panel">
          <div className="sub-panel-content">
            <ApplicationList items={item} />
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