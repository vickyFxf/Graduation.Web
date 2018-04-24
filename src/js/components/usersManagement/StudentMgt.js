/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 10:29:31 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-24 15:38:04
 */
import React from 'react';
import { Icon, Button, Input, Table, Divider, Modal } from 'antd';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { DeleteUser, GetUserList } from '../../services/usersService.js';
const confirm = Modal.confirm;
export default class StudentMgt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      searchId: '',
    }
  }
  componentWillMount(){
    this.getUserList();
  }
  render() {
    const Search = Input.Search;
    const columns = [{
      title: '序号',
      dataIndex: 'key',
      key: 'key',
    }, {
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
          <a href="javascript:void(0)" onClick={this.showDeleteConfirm.bind(this, record)}>删除</a>
        </span>
      ),
    }];
    const data = [{
      key: '1',
      id: "60001",
      name: "周杰伦",
      sex: "男",
      college: "第一临床、信息与工程学院",
      title: '教授',
      position: '主任',
      email: "1004272351@qq.com",
      tel: "18057727150",
    }, {
      key: '2',
      id: "60002",
      name: "张一山",
      sex: "男",
      college: "第一临床、信息与工程学院",
      title: '讲师',
      position: '科员',
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
        <label className="search-label">按编号查询：</label>
        <Search
          placeholder="请输入关键字"
          onSearch={(value)=>{
            this.setState({
              searchId:value
            });
            this.getUserList();
          }}
          enterButton
        />
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
        />
      </div>
    );
  }
  //获取用户列表
  getUserList() {
    let data = {};
    data.permission = 0;
    data.id = this.state.searchId;
    GetUserList(data).then(res => {
      if (res.length > 0) {
        this.state.userList = res;
      }
    })
    this.setState({});
  }
  //删除某个用户
  showDeleteConfirm(r) {
    confirm({
      title: '你确定要删除？',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        DeleteUser(r).then(res => {
          if (res.status == 200) {
            console.log('success');
          }
        })
      }
    });
  }
}