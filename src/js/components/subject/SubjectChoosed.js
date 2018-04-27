/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 10:28:13 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-27 17:58:48
 */
import React from 'react';
import { Table, Icon, Divider } from 'antd';
import { Link } from 'react-router';
export default class SubjectChoosed extends React.Component {
  render() {
    const columns = [{
      title: '序号',
      dataIndex: 'sort',
    }, {
      title: '课题名称',
      dataIndex: 'subName',
    }, {
      title: '指导教师',
      dataIndex: 'teacherName',
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <Link to="subject/subjectDetails/123456">查看</Link>
          <Divider type="vertical" />
          <a href="javascript:void(0)" onClick={this.apply.bind(this)}>申请</a>
        </span>
      ),
    }];
    const data = [];
    for (let i = 0; i < 46; i++) {
      data.push({
        key: i,
        sort: i + 1,
        subName: `毕业论文管理系统`,
        teacherName: `陈伟`,
      });
    }
    return (
      <div className="margin-left-subpanel">
        <div className="list-header">
          <p>在线选题</p>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            pageSize: 10,
          }}
        />
      </div>
    );
  }
  //申请课题
  apply(){
    
  }
}