/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 16:49:48 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-09 17:02:14
 */
import React from 'react';
import { Icon, Button, Input, Table, Divider } from 'antd';
import { Link } from 'react-router';
import { connect } from 'react-redux';

export default class TeacherMgt extends React.Component {
  render() {
    const Search = Input.Search;
    const columns = [{
      title: '学号',
      dataIndex: 'id',
      key: 'id',
      render: text => <a href="#">{text}</a>,
    }, {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '性别',
      dataIndex: 'sex',
      key: 'sex',
    }, {
      title: '学院',
      dataIndex: 'college',
      key: 'college',
    }, {
      title: '专业',
      dataIndex: 'major',
      key: 'major',
    }, {
      title: '班级',
      dataIndex: 'class',
      key: 'class',
    }, {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    }, {
      title: '联系电话',
      dataIndex: 'tel',
      key: 'tel',
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="#">查看</a>
          <Divider type="vertical" />
          <a href="#">删除</a>
          <Divider type="vertical" />
          <a href="#">密码重置</a>
        </span>
      ),
    }];
    const data = [{
      key: '1',
      id: "1406010039",
      name: "范秀芳",
      sex: "女",
      college: "第一临床、信息与工程学院",
      major: "信息管理与信息系统",
      class: 2,
      email: "1004272351@qq.com",
      tel: "18057727150",
    }];// rowSelection object indicates the need for row selection
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    };

    return (
      <div id="teacherMgt" className="userMgt-list">
        <Button><Icon type="plus-circle" style={{ fontSize: 18, color: '#32CD32' }} /><Link to="subjectAdd">添加</Link></Button>
        <Button><Icon type="close-circle" style={{ fontSize: 18, color: '#FF0000' }} />删除</Button>
        <Search
          placeholder="请输入关键字"
          onSearch={value => console.log(value)}
          enterButton
        />
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    );
  }
}