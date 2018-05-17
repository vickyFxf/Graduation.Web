/*
 * @Author: VickyFan 
 * @Date: 2018-05-08 12:45:28 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-05-08 12:47:01
 */
/**
 * 教师：我的学生
 */
import React from 'react';
import { Icon, Button, Table, Divider, Modal, message } from 'antd';
import { Link } from 'react-router';
import {GetSubListById} from '../../services/subjectService';
import {GetDocumentLine} from '../../services/documentService';
export default class MyStudent extends React.Component {
  static contextTypes={  
    router:React.PropTypes.object  
  } 
  constructor(props,context){
    super(props,context);
    this.context.router;
    this.state = {
      item:[],
      item1:[{info:{"name":'vicky'},data:[{"type":'文献综述'},{'type':'报告'}]},
      {info:{"name":'cathy'},data:[{"type":'文献综述'},{'type':'报告'},{'type':'论文'}]}]
    }
  }
  componentWillMount() {
    this.getMyStudent();
  }
  render() {
    return (
      <div id="subjectList" className="userMgt-list margin-left-subpanel">
        <div className="list-header">
          <p>学生进度管理</p>
        </div>
        <div className="teacher-document">
          <table>
            <thead>
              <tr>
                <th>序号</th>
                <th>学生姓名</th>
                <th>任务书</th>
                <th>开题报告</th>
                <th>外文翻译</th>
                <th>文献综述</th>
                <th>毕业论文</th>
              </tr>
            </thead>
            <tbody>
              {
                _.map(this.state.item,(item1,index)=>{

                  return(
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{item1.info.studentName}</td>
                      <td>{item1.data[0]==1?<Icon type="check" style={{color:'green'}} title='查看详情' onClick={this.goDetails.bind(this,item1,'任务书')}/>:<Icon type="close" style={{color:'red'}}/>}</td>
                      <td>{item1.data[1]==1?<Icon type="check" style={{color:'green'}} title='查看详情' onClick={this.goDetails.bind(this,item1,'开题报告')}/>:<Icon type="close" style={{color:'red'}}/>}</td>
                      <td>{item1.data[2]==1?<Icon type="check" style={{color:'green'}} title='查看详情' onClick={this.goDetails.bind(this,item1,'外文翻译')}/>:<Icon type="close" style={{color:'red'}}/>}</td>
                      <td>{item1.data[3]==1?<Icon type="check" style={{color:'green'}} title='查看详情' onClick={this.goDetails.bind(this,item1,'文献综述')}/>:<Icon type="close" style={{color:'red'}}/>}</td>
                      <td>{item1.data[4]==1?<Icon type="check" style={{color:'green'}} title='查看详情' onClick={this.goDetails.bind(this,item1,'毕业论文')}/>:<Icon type="close" style={{color:'red'}}/>}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  //获取我的学生
  getMyStudent(){
    let data={};
    data.selectedBy=2;
    data.creatUserId=sessionStorage.getItem('id');
    GetSubListById(data).then(res=>{
      _.map(res,(item1,index1)=>{
        let object={};
        object.info=item1;
        let thenData={};
        thenData.docStudentId=item1.studentId;
        GetDocumentLine(thenData).then(res=>{
          let a=[0,0,0,0,0];
          object.data=a;
          this.state.item[index1]=object;
          _.map(res,(item2,index)=>{
            if(item2.docName=='任务书'){
              a[0]=1;
              return;
            }else if(item2.docName=='开题报告'){
              a[1]=1;
              return;
            }else if(item2.docName=='外文翻译'){
              a[2]=1;
              return;
            }else if(item2.docName=='文献综述'){
              a[3]=1;
              return;
            }else if(item2.docName=='毕业论文'){
              a[4]=1;
              return;
            }
          })
          this.setState({});
        })
      })
    })
  }
  goDetails(item,type){
    let _docName=type;
    let _studentId=item.info.studentId;
    this.context.router.push("/task/studentDocDetails/docName="+_docName+"&studentId="+_studentId);
  }
}