/*
 * @Author: VickyFan 
 * @Date: 2018-04-28 10:20:11 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-28 11:04:55
 */
/**
 * 主任审批课题
 */
import React from 'react';
import { Icon, Button, Input, Table, Divider, Modal, Form, Select, Upload, message } from 'antd';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { GetClassList,ClassDetails} from '../../services/classService.js';
import { GetSubListById,DeleteSubject,AddSubject} from '../../services/subjectService.js';
import moment from 'moment';
const confirm = Modal.confirm;
const FormItem = Form.Item;
const Option = Select.Option;
export default class SubjectApproval extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      approvalList: [],
      subSourceList: [],
      subCategoryList: [],
      searchId: '',
    }
  }
  componentWillMount() {
    this.getApprovalList();
    this.getSubSource();
  }
  render() {
    _.map(this.state.approvalList,(item1,index1)=>{
      item1.isAudit=this.toIsAudit(item1.isAudit);
      item1.subTime=moment(item1.subTine).format('YYYY-MM-DD');
      item1.key=index1+1;
      _.map(this.state.subSourceList,(item2,index2)=>{
        if(item1.subSource==item2._id){
          item1.subSource=item2.className;
        }
      })
      _.map(this.state.subCategoryList,(item3,index3)=>{
        if(item1.subCategory==item3._id){
          item1.subCategory=item3.className;
        }
      })
    })
    const Search = Input.Search;
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
      title: '创建时间',
      dataIndex: 'subTime',
      key: 'subTime',
    }, {
      title: '是否审核',
      dataIndex: 'isAudit',
      key: 'isAudit',
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <Link to={'subject/subjectDetails/'+record._id}>审核</Link>
        </span>
      ),
    }];
    return (
      <div id="approvalList" className="userMgt-list margin-left-subpanel">
        <div className="list-header">
          <p>我的课题</p>
        </div>
        <label className="search-label">按关键字查询：</label>
        <Search
          placeholder="请输入关键字"
          onSearch={(value) => {
            this.setState({
              searchId: value
            });
            this.getApprovalList();
          }}
          enterButton
        />
        <Table
          columns={columns}
          dataSource={this.state.approvalList}
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
  toIsAudit(value){
    switch(value){
      case 1:
        return '未审核';
        break;
      case 2:
        return '已通过';
        break;
      case 3:
        return '未通过';
        break;
    }
  }
  //获取课题列表
  getApprovalList() {
    let data={};
    data.isAudit=1;
    GetSubListById(data).then(res => {
      if (res) {
        console.log(res);
        this.state.approvalList = res;
      }
    })
    this.setState({});
  }
}