/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 16:49:48 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-10 11:15:43
 */
import React from 'react';
import { Icon, Button, Input, Table, Divider } from 'antd';
import { Link } from 'react-router';
import { connect } from 'react-redux';

export default class AdminMgt extends React.Component {
  render() {
    const Search = Input.Search;
    const columns = [{
      title: '序号',
      dataIndex: 'key',
      key: 'key',
    },{
      title: '编号',
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
      title: '职称',
      dataIndex: 'title',
      key: 'title',
    }, {
      title: '岗位',
      dataIndex: 'position',
      key: 'position',
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
      id: "70001",
      name: "李诞",
      sex: "男",
      college: "第一临床、信息与工程学院",
      title:'讲师',
      position:'处长',
      email: "1004272351@qq.com",
      tel: "18057727150",
    },{
      key: '2',
      id: "70002",
      name: "池子",
      sex: "男",
      college: "第一临床、信息与工程学院",
      title:'讲师',
      position:'科员',
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
        <Button><Icon type="plus-circle" style={{ fontSize: 18, color: '#32CD32' }} />添加</Button>
        <Button><Icon type="close-circle" style={{ fontSize: 18, color: '#FF0000' }} />删除</Button>
        <label className="search-label">按编号查询：</label>
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