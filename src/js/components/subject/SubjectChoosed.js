/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 10:28:13 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-27 17:58:48
 */
import React from 'react';
import { Table, Icon, Divider } from 'antd';
import { Link } from 'react-router';
import { GetSubListById} from '../../services/subjectService.js';
export default class SubjectChoosed extends React.Component {
  constructor(props){
    super(props);
    this.state={
      chooseList:[],
    }
  }
  componentWillMount(){
    this.getChooseList();
  }
  render() {
    _.map(this.state.chooseList,(item1,index1)=>{
      item1.key=index1+1;
    })
    const columns = [{
      title: '序号',
      dataIndex: 'key',
      key: 'key',
    }, {
      title: '课题名称',
      dataIndex: 'subName',
      key: 'subName',
    }, {
      title: '指导教师',
      dataIndex: 'creatUserName',
      key: 'creatUserName',
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <Link to={'subject/subjectDetails/'+record._id}>申请</Link>
        </span>
      ),
    }];
    return (
      <div className="margin-left-subpanel">
        <div className="list-header">
          <p>在线选题</p>
        </div>
        <Table
          columns={columns}
          dataSource={this.state.chooseList}
          pagination={{
            pageSize: 10,
          }}
        />
      </div>
    );
  }
  //获取课题列表
  getChooseList() {
    let data={};
    data.isAudit=2;
    GetSubListById(data).then(res => {
      if (res) {
        this.state.chooseList = res;
      }
      this.setState({});
    })
  }
}
