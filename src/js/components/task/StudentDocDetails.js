/*
 * @Author: VickyFan 
 * @Date: 2018-05-08 12:45:28 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-05-08 12:47:01
 */
/**
 * 教师：学生文档详情页
 */
import React from 'react';
import { Icon, Button, Table, Divider, Modal, message } from 'antd';
import { Link } from 'react-router';
import {GetSubListById} from '../../services/subjectService';
import {GetDocumentLine,GetDownDocument,GetTeacherDownDocument} from '../../services/documentService';
import { GetUserInfo} from '../../services/usersService.js';
import moment from 'moment';
export default class StudentDocDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      docName: this.props.params._docName,
      studentId:this.props.params._studentId,
      studentDoc:{},
      studentSub:{},
      studentInfo:{},
      myDownDocument:[],
      teacherDownDocument:[],
    }
  }
  componentWillMount() {
    this.getStudentDoc();
    this.getStudentSub();
    this.getStudentInfo();
    this.myDownDocument();
    this.teacherDownDocument();
  }
  render() {
    return (
      <div className="student-doc margin-left-subpanel">
                <div className="title">
                    <h2>【{this.props.params._docName}】{this.state.studentSub.subName}</h2>
                    <h3>学生<span style={{marginLeft:'8px',marginRight:'8px'}}>{this.state.studentInfo.name}</span>{this.state.studentInfo.tel}</h3>
                </div>
                <div className="body">
                    <div className="left">
                      {
                        this.state.studentDoc.abstract?
                        <div className='item'>
                          <span>摘要</span>
                          <div style={{height:'80px',overflow:'auto'}}>{this.state.studentDoc.abstract}</div>
                        </div>:''
                      }
                      {
                        this.state.studentDoc.keyWord?
                        <div className='item'>
                          <span>关键词</span>
                          <div style={{height:'40px',overflow:'auto'}}>{this.state.studentDoc.keyWord}</div>
                        </div>:''
                      }
                      {
                        this.state.studentDoc.target?
                        <div className='item'>
                          <span>目标</span>
                          <div style={{height:'80px',overflow:'auto'}}>{this.state.studentDoc.target}</div>
                        </div>:''
                      }
                      {
                        this.state.studentDoc.reason?
                        <div className='item'>
                          <span>选题理由及意义</span>
                          <div style={{height:'80px',overflow:'auto'}}>{this.state.studentDoc.reason}</div>
                        </div>:''
                      }
                      {
                        this.state.studentDoc.keyquestion?
                        <div className='item'>
                          <span>需要重点研究的关键问题及解决问题的思路</span>
                          <div style={{height:'80px',overflow:'auto'}}>{this.state.studentDoc.keyquestion}</div>
                        </div>:''
                      }
                      {
                        this.state.studentDoc.newValue?
                        <div className='item'>
                          <span>创新点及实现价值</span>
                          <div style={{height:'80px',overflow:'auto'}}>{this.state.studentDoc.newValue}</div>
                        </div>:''
                      }
                      {
                        this.state.studentDoc.content?
                        <div className='item'>
                          <span>主要内容</span>
                          <div style={{height:'80px',overflow:'auto'}}>{this.state.studentDoc.content}</div>
                        </div>:''
                      }
                      {
                        this.state.studentDoc.shouldDo?
                        <div className='item'>
                          <span>应完成的工作</span>
                          <div style={{height:'80px',overflow:'auto'}}>{this.state.studentDoc.shouldDo}</div>
                        </div>:''
                      }
                      {
                        this.state.studentDoc.plan?
                        <div className='item'>
                          <span>进度安排</span>
                          <div style={{height:'80px',overflow:'auto'}}>{this.state.studentDoc.plan}</div>
                        </div>:''
                      }
                      {
                        this.state.studentDoc.literature?
                        <div className='item'>
                          <span>主要参考文献</span>
                          <div style={{height:'80px',overflow:'auto'}}>{this.state.studentDoc.literature}</div>
                        </div>:''
                      }
                      {
                        this.state.studentDoc.translate?
                        <div className='item'>
                          <span>翻译</span>
                          <div style={{height:'480px',overflow:'auto'}}>{this.state.studentDoc.translate}</div>
                        </div>:''
                      }
                    </div>
                    <div className="right">
                        <div className="box handleButton historyDucument">
                            <div className="history">教师上传的文档</div>
                            <form encType='multipart/form-data' action={'http://localhost:3000/TeacherDocument-Module/Upload/_id='+this.props.params._studentId+'&teacherId='+sessionStorage.getItem('id')+'&_docType='+this.props.params._docName} method="post" target="hidden-iframe">
                                <input type="file" name="myfile"></input>
                                <input type="submit" value="保存文档"></input>
                            </form>
                        </div>
                        <div className="box historyDucument">
                            <div className="history">教师已上传的文档</div>
                            <div>
                              {
                                    _.map(this.state.teacherDownDocument,(item,index)=>{
                                        return(
                                            <div key={index}><span>{index+1}.&nbsp;</span><span>{moment(item.date).format('YYYY-MM-DD HH:mm:ss')}</span><button onClick={this.downteacherDocument.bind(this,item)}>下载</button></div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="box historyDucument">
                            <div className="history">学生已上传的文档</div>
                            <div>
                              {
                                    _.map(this.state.myDownDocument,(item,index)=>{
                                        return(
                                            <div key={index}><span>{index+1}.&nbsp;</span><span>{moment(item.date).format('YYYY-MM-DD HH:mm:ss')}</span><button onClick={this.downStudentDocument.bind(this,item)}>下载</button></div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
  }
  //获取当前文档
  getStudentDoc(){
    let data={};
    data.docStudentId=this.props.params._studentId;
    data.docName=this.props.params._docName;
    GetDocumentLine(data).then(res=>{
      if(res.length>0){
        this.state.studentDoc=res[0];
      }
    })
  }
  //获取当前课题信息
  getStudentSub(){
    let data={};
    data.studentId=this.props.params._studentId;
    GetSubListById(data).then(res=>{
      if(res.length>0){
        this.state.studentSub=res[0];
      }
      this.setState({});
    })
  }
  //获取学生信息
  getStudentInfo(){
    let data={};
    data.id=this.props.params._studentId;
    GetUserInfo(data).then(res=>{
      if(res.length>0){
        this.state.studentInfo=res[0];
      }
      this.setState({});
    })
  }
  //获取学生的所有上传的任务书文档
  myDownDocument(){
    let data={};
    data.studentId=this.props.params._studentId;
    data.docType=this.props.params._docName;
    GetDownDocument(data).then(res=>{
        if (res.length>0) {
            this.state.myDownDocument=res;
        }
        this.setState({});
    })
  }
  //获取教师的所有上传的任务书文档
  teacherDownDocument(){
    let data={};
    data.studentId=this.props.params._studentId;
    data.docType=this.props.params._docName;
    data.teacherId=sessionStorage.getItem('id');
    GetTeacherDownDocument(data).then(res=>{
      console.log(res);
        if (res.length>0) {
            this.state.teacherDownDocument=res;
        }
        this.setState({});
    })
  }
  //下载学生文档
  downStudentDocument(item){
    let url='http://localhost:3000/MyDocument-Module/DownLoad/'+item.filename;
    window.open(url);
  }
  //下载教师文档
  downteacherDocument(item){
    let url='http://localhost:3000/TeacherDocument-Module/DownLoad/'+item.filename;
    window.open(url);
  }
}