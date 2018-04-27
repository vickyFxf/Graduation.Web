/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 10:28:13 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-27 14:49:52
 */
import React from 'react';
import { Table, Icon, Divider } from 'antd';
export default class OpeningReport extends React.Component {
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
          <a href="#">申请</a>
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
      <div id="">
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

}