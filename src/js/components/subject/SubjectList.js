/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 10:29:03 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-09 10:59:22
 */
import React from 'react';
import { Icon, Button, Input, Table, Divider } from 'antd';
import { Link } from 'react-router';
import { GetSubListById } from '../../services/subjectService.js';

export default class SubjectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: sessionStorage.getItem('id'),
      subList: [],
      formData: {

      }
    }
  }
  componentWillMount() {
    this._getSubList();
  }
  render() {
    const Search = Input.Search;
    const columns = [{
      title: '课题名称',
      dataIndex: 'subName',
      key: 'subName',
      render: text => <a href="#">{text}</a>,
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
          <a href="#">查看</a>
          <Divider type="vertical" />
          <a href="#">修改</a>
          <Divider type="vertical" />
          <a href="#">删除</a>
        </span>
      ),
    }];
    // rowSelection object indicates the need for row selection
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
      <div id="subjectList">
        <Button><Icon type="plus-circle" style={{ fontSize: 18, color: '#32CD32' }} /><Link to="subjectAdd">添加</Link></Button>
        <Button><Icon type="close-circle" style={{ fontSize: 18, color: '#FF0000' }} />删除</Button>
        <Search
          placeholder="请输入关键字"
          onSearch={value => console.log(value)}
          enterButton
        />
        <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.subList} />

      </div>
    );
  }
  _getSubList() {
    let data = {};
    data.creatUserId = this.state.currentId;
    GetSubListById(data).then((res) => {
      let resData = res;
      if (resData.length > 0) {
        this.state.subList = resData;
        this.setState({});
      }
    })
  }
}