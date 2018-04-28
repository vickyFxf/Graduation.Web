/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 10:28:51 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-28 11:31:44
 */
import React from 'react';
import { Icon, Button, Input, Table, Divider } from 'antd';
import { Link } from 'react-router';
import { GetSubjectInfo,UpdateSubject} from '../../services/subjectService.js';
import history from 'history/createHashHistory' 
export default class SubjectDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.params._id,
      currentUser: sessionStorage.getItem('permissions'),
      details: [],
    }
  }
  componentWillMount() {
    this._getSubList();
  }
  _getSubList() {
    let data = {};
    data._id = this.state._id;
    GetSubjectInfo(data).then(res => {
      this.state.details = res;
      this.setState({});
    })
  }
  render() {
    const item = this.state.details;
    console.log(this.state.currentUser);
    return (
      <div className="margin-left-subpanel">
        <div className="list-header">
          <p>课题详情</p>
        </div>
        <div className="table-container" id="subDetails">
          <table>
            <caption style={{ textAlign: 'center', captionSide: 'top', padding: '0', color: '#000' }}>多层架构下药库系统的设计</caption>
            <tbody>
              <tr>
                <td>指导教师</td><td>乔凯</td>
              </tr>
              <tr>
                <td>联系方式</td><td>13900938829</td>
              </tr>
              <tr>
                <td>课题来源</td><td>教学科研</td>
              </tr>
              <tr>
                <td>课题类别</td><td>生产实际</td>
              </tr>
              <tr style={{ minHeight: '35px' }}>
                <td>课题简介</td>
                <td>通过多层架构，BS的工作模式，实现药库的入库、出库、盘点、报损、价格管理、字典管理等功能。数据库为SQL Server。</td>
              </tr>
            </tbody>
            <caption style={{ textAlign: 'center', captionSide: 'bottom', padding: '0', color: '#000' }}>
              {
                this.state.currentUser=="1"?<button onClick={this.applySubject.bind(this)}>申请</button>:""
              }
              {
                this.state.currentUser=="2"?<span><button onClick={this.approved.bind(this,'2')}>同意</button><button onClick={this.approved.bind(this,'3')}>不同意</button></span>:""
              }
              <button onClick={this.goBack.bind(this)}>返回</button>
            </caption>
          </table>
        </div>
      </div>
    )
  }
  //返回上一页
  goBack(){
    window.history.back();
  }
  //学生申请课题
  approved(value){
    //1未审核,2已通过,3未通过
    let data={};
    data._id=this.state.details;
    data.isAudit=Number(value);
    console.log(data);
    // UpdateSubject(data).then(res=>{
    //   if(res){
    //     console.log('审批成功');
    //   }
    // })
  }
}