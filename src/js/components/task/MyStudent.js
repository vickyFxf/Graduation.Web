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
import { connect } from 'react-redux';
import { GetClassList,ClassDetails} from '../../services/classService.js';
import { GetSubListById} from '../../services/subjectService.js';
import moment from 'moment';
export default class MyStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectList: [],
      subSourceList: [],
      subCategoryList: [],
    }
  }
  componentWillMount() {
    this.getSubjectList();
    this.getSubSource();
  }
  render() {
    if(this.state.subjectList.length>0){
      _.map(this.state.subjectList,(item,index)=>{
        item.selectedBy=this.toHasSubject(item.selectedBy);
        item.key=index+1;
        _.map(this.state.subSourceList,(item2,index2)=>{
          if(item.subSource==item2._id){
            item.subSource=item2.className;
          }
        })
        _.map(this.state.subCategoryList,(item3,index3)=>{
          if(item.subCategory==item3._id){
            item.subCategory=item3.className;
          }
        })
      })
    }
    const columns = [{
      title: '序号',
      dataIndex: 'key',
      key: 'key',
    }, {
      title: '课题名称',
      dataIndex: 'subName',
      key: 'subName',
    }, {
      title: '来源',
      dataIndex: 'subSource',
      key: 'subSource',
    }, {
      title: '类别',
      dataIndex: 'subCategory',
      key: 'subCategory',
    }, {
      title: '申请人',
      dataIndex: 'studentName',
      key: 'studentName',
    }, {
      title: '学号',
      dataIndex: 'studentId',
      key: 'studentId',
    }, {
      title: '是否同意',
      dataIndex: 'selectedBy',
      key: 'selectedBy',
      render: (text, record) => (
        <span>
          {
            text=='待同意'?<b style={{color:'red'}}>{text}</b>:<span>{text}</span>
          }
        </span>
      ),
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <Link to={'subject/choosedStudent/'+record._id}>查看详情</Link>
        </span>
      ),
    }];
    return (
      <div id="subjectList" className="userMgt-list margin-left-subpanel">
        <div className="list-header">
          <p>我的学生</p>
        </div>
        <Table
          columns={columns}
          dataSource={this.state.subjectList}
        />
      </div>
    );
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
  //转换课题审核状态
  toHasSubject(value){
    switch(value){
      case 1:
        return '待同意';
        break;
      case 2:
        return '已同意';
        break;
      case 3:
        return '未同意';
        break;
    }
  }
  //获取课题列表
  getSubjectList() {
    let data = {};
    data.creatUserId=sessionStorage.getItem('id');
    data.isAudit=2;
    GetSubListById(data).then(res => {
      if (res) {
        let a=[];
        _.map(res,(item,index)=>{
          if(item.studentId&&item.studentId!=''){
            a.push(item);
          }
        })
        this.state.subjectList = a;
      }
    })
    this.setState({});
  }
}