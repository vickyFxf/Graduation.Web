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
export default class ChoosedStudent extends React.Component {
  static contextTypes={  
    router:React.PropTypes.object  
  } 
  constructor(props,context) {
    super(props,context);
    this.context.router;
    this.state = {
      _id: this.props.params._id,
      subSourceList: [],
      subCategoryList: [],
      details:{},
      applyStudent:{},
    }
  }
  componentWillMount() {
    this._getSubjectDetails();
    this.getSubSource();
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
                    <td>申请学生</td><td>{this.state.details['studentName']}</td>
                  </tr>
                  <tr>
                    <td>学生电话</td><td>{this.state.applyStudent['tel']}</td>
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
                  <tr style={{ minHeight: '35px' }}>
                    <td>申请理由</td>
                    <td>{this.state.details['applyReason']}</td>
                  </tr>
                </tbody>
                <caption style={{ textAlign: 'center', captionSide: 'bottom', padding: '0', color: '#000' }}>
                  {
                    this.state.details['selectedBy']==2?
                    <div>
                      <button>已同意</button>
                      <button onClick={this.goBack.bind(this)}>返回</button>
                    </div>
                    :<div>
                      <button onClick={this.isChoosed.bind(this,2)}>同意</button>
                      <button onClick={this.isChoosed.bind(this,3)}>不同意</button>
                      <button onClick={this.goBack.bind(this)}>返回</button>
                    </div>
                  }
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
      this.state.details=res;
      let a={};
      a.id=res.studentId;
      GetUserInfo(a).then(res=>{
        if(res){
          this.state.applyStudent=res[0];
        }
        this.setState({});
      })
    })
  }
  //导师选择学生
  isChoosed(value){
    //1未同意,2已同意,3未同意
    let data={};
    data._id=this.state.details['_id'];
    data.selectedBy=value;
    if(value==2){
      data.studentId=this.state.applyStudent.id;
      data.studentName=this.state.applyStudent.name;
    }else if(vlue==3){
      data.studentId='';
      data.studentName='';
      data.applyReason='';
    }
    UpdateSubject(data).then(res=>{
      if(res){
        message.success('操作成功，请与该生保持联系！');
        window.history.back();
      }
    })
  }
}