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
import { Table, Icon, Divider } from 'antd';
import { Link } from 'react-router';
export default class SubjectApproval extends React.Component {
  render() {
    const columns = [{
      title: '序号',
      dataIndex: 'sort',
    }, {
      title: '课题名称',
      dataIndex: 'subName',
    }, {
      title: '课题来源',
      dataIndex: 'subSource',
    }, {
      title: '课题类别',
      dataIndex: 'subCategory',
    }, {
      title: '指导教师',
      dataIndex: 'teacherName',
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <Link to="subject/subjectDetails/123456">审批</Link>
        </span>
      ),
    }];
    const data = [];
    for (let i = 0; i < 46; i++) {
      data.push({
        key: i,
        sort: i + 1,
        subName: `毕业论文管理系统`,
        subSource: '科学研究',
        subCategory:'学术论文',
        teacherName: `陈伟`,
      });
    }
    return (
      <div className="margin-left-subpanel">
        <div className="list-header">
          <p>待处理课题</p>
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

}