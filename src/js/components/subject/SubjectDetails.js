/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 10:28:51 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-28 11:31:44
 */
import React from 'react';
import { Icon, Button, Input, Table, Divider ,message} from 'antd';
import { Link } from 'react-router';
import { GetSubjectInfo,UpdateSubject} from '../../services/subjectService.js';
import { GetClassList,ClassDetails} from '../../services/classService.js';
import { GetUserInfo} from '../../services/usersService.js';
import history from 'history/createHashHistory' 
export default class SubjectDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.params._id,
      currentUser:sessionStorage.getItem('permissions'),
      subSourceList: [],
      subCategoryList: [],
      isAuditUser:false,
    }
  }
  componentWillMount() {
    this._getSubjectDetails();
    this.getSubSource();
    this.getCurrentLogin();
  }
  render() {
    if(this.state.details){
      _.map(this.state.details,(item1,index1)=>{
        _.map(this.state.subSourceList,(item2,index2)=>{
          if(item1==item2._id){
            this.state.details['subSource']=item2.className;
          }
        })
        _.map(this.state.subCategoryList,(item3,index3)=>{
          if(item1==item3._id){
            this.state.details['subCategory']=item3.className;
          }
        })
      })
    }
    return (
        <div className="margin-left-subpanel">
          <div className="list-header">
            <p>课题详情</p>
          </div>
          <div className="table-container" id="subDetails">
            {
              this.state.details?
              <table>
                <caption style={{ textAlign: 'center', captionSide: 'top', padding: '0', color: '#000' }}>{this.state.details['subName']}</caption>
                <tbody>
                  <tr>
                    <td>指导教师</td><td>{this.state.details['creatUserName']}</td>
                  </tr>
                  <tr>
                    <td>课题来源</td><td>{this.state.details['subSource']}</td>
                  </tr>
                  <tr>
                    <td>课题类别</td><td>{this.state.details['subCategory']}</td>
                  </tr>
                  <tr style={{ minHeight: '35px' }}>
                    <td>课题简介</td>
                    <td>{this.state.details['subIntroduction']}</td>
                  </tr>
                </tbody>
                <caption style={{ textAlign: 'center', captionSide: 'bottom', padding: '0', color: '#000' }}>
                  {
                    this.state.currentUser=="1"?<button onClick={this.applySubject.bind(this)}>申请</button>:""
                  }
                  {
                    this.state.isAuditUser?<span><button onClick={this.approved.bind(this,'2')}>通过</button><button onClick={this.approved.bind(this,'3')}>不通过</button></span>:""
                  }
                  <button onClick={this.goBack.bind(this)}>返回</button>
                </caption>
              </table>
              :""
            }
          </div>
        </div>
    )
  }
  //返回上一页
  goBack(){
    window.history.back();
  }
  //获取当前登录人员信息
  getCurrentLogin(){
    let data={};
    data.id=sessionStorage.getItem('id');
    GetUserInfo(data).then(res=>{
      if(res){
        if(res[0].title==2){
          this.state.isAuditUser=true;
        }
      }
    })
    this.setState({});
  }
  //获取课题来源/获取课题类别
  getSubSource() {
    GetClassList().then(res => {
      if (res) {
        //课题来源
        let a = [];
        _.map(res, (item, index) => {
          if (item.classType == 0) {
            a.push(item);
          }
        })
        this.state.subSourceList = a;
        //课题类别
        let b = [];
        _.map(res, (item, index) => {
          if (item.classType == 1) {
            b.push(item);
          }
        })
        this.state.subCategoryList = b;
      }
      this.setState({})
    })
  }
  //获取当前课题详细信息
  _getSubjectDetails() {
    let data = {};
    data._id = this.state._id;
    GetSubjectInfo(data).then(res => {
      this.setState({
        details:res
      });
    })
  }
  //主任审核课题
  approved(value){
    //1未审核,2已通过,3未通过
    let data={};
    data._id=this.state.details['_id'];
    data.isAudit=Number(value);
    UpdateSubject(data).then(res=>{
      if(res){
        message.success('审核通过！');
        window.history.back();
      }else{
        message.success('审核为成功，请重试！');
      }
    })
  }
}