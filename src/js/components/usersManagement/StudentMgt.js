/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 16:49:48 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-27 15:54:51
 */
import React from 'react';
import { Icon, Button, Input, Table, Divider, Modal, Form, Select, Upload, message } from 'antd';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { DeleteUser, GetUserList, AddUser ,UpdateUserInfo} from '../../services/usersService.js';
const confirm = Modal.confirm;
const FormItem = Form.Item;
const Option = Select.Option;
class StudentMgtList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      searchId: '',
    }
  }
  componentWillMount() {
    this.getUserList();
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const Search = Input.Search;
    _.map(this.state.userList,(item,index)=>{
      item.key=index+1;
      if(item.sex==0){
        item.sexString="男";
      }else{
        item.sexString="女";
      }
    })
    const columns = [{
      title: '序号',
      dataIndex: 'key',
      key: 'key',
    }, {
      title: '学号',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '性别',
      dataIndex: 'sexString',
      key: 'sexString',
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
          <a href="javascript:void(0)" onClick={this.showDeleteConfirm.bind(this, record)}>删除</a>
          <Divider type="vertical" />
          <a href="javascript:void(0)" onClick={this.rePassword.bind(this, record)}>重置密码</a>
        </span>
      ),
    }];
    return (
      <div id="adminMgt" className="userMgt-list margin-left-subpanel">
        <div className="list-header">
          <p>学生列表</p>
        </div>
        <Button onClick={this.openWindow.bind(this)}><Icon type="plus-circle" style={{ fontSize: 18, color: '#32CD32' }} />添加</Button>
        <label className="search-label">按学号查询：</label>
        <Search
          placeholder="请输入学号"
          onSearch={(value) => {
            this.state.searchId=value;
            this.getUserList();
          }}
          enterButton
        />
        <Table
          columns={columns}
          dataSource={this.state.userList}
          pagination={{
            pageSize: 10,
          }}
        />
        {/* 添加学生 */}
        <div className="adduser-box" id="adduser-box" style={{ transition: "width 0.5s", right: '-30%' }}>
          <div className="add-header">
            <div className="left">添加学生</div>
            <div className="right" onClick={this.closeWindow}><i className="iconfont icon-guanbi"></i></div>
          </div>
          <div className="add-body">
            <Form onSubmit={this.handleSubmit} className="subAdd-form">
              <fieldset>
                <FormItem
                  label="姓名"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 12 }}
                >
                  {getFieldDecorator('name', {
                    rules: [{
                      required: true, message: '请填写姓名!',
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  label="学号"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 12 }}
                >
                  {getFieldDecorator('id', {
                    rules: [{
                      required: true, message: '请填写学号!',
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  label="性别"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 12 }}
                >
                  {getFieldDecorator('sex', {
                    rules: [{
                      required: true, message: '请选择性别!',
                    }],
                  })(
                    <Select placeholder="请选择性别">
                      <Option value="0">男</Option>
                      <Option value="1">女</Option>
                    </Select>
                  )}
                </FormItem>
                <FormItem
                  label="学院"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 12 }}
                >
                  {getFieldDecorator('college', {
                    rules: [{
                      required: true, message: '请填写学院!',
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  label="专业"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 12 }}
                >
                  {getFieldDecorator('major', {
                    rules: [{
                      required: true, message: '请填写专业!',
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  label="班级"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 12 }}
                >
                  {getFieldDecorator('class', {
                    rules: [{
                      required: true, message: '请选择班级!',
                    }],
                  })(
                    <Select placeholder="请选择班级">
                      <Option value="1">1</Option>
                      <Option value="2">2</Option>
                      <Option value="3">3</Option>
                      <Option value="4">4</Option>
                    </Select>
                  )}
                </FormItem>
                <FormItem
                  label="邮箱"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 12 }}
                >
                  {getFieldDecorator('email', {
                    rules: [{
                      required: true, message: '邮箱格式不对!',
                      pattern:/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  label="联系方式"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 12 }}
                >
                  {getFieldDecorator('tel', {
                    rules: [{
                      required: true, message: '手机号码格式不正确',
                      pattern:/1(3\d|47|5((?!4)\d)|7(0|1|[6-8])|8\d)\d{8,8}/,
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>

                <FormItem
                  wrapperCol={{
                    xs: { span: 18, offset: 0 },
                    sm: { span: 16, offset: 6 },
                  }}
                >
                  <Button onClick={this.closeWindow.bind(this)} style={{ marginRight: '20px' }}>取消</Button>
                  <Button type="primary" htmlType="submit">确定</Button>
                </FormItem>
              </fieldset>
            </Form>
          </div>

        </div>
      </div>
    );
  }
  //添加用户窗口
  openWindow() {
    let box = document.getElementById('adduser-box');
    box.setAttribute("style", "transition: width 0.5s;right:0")
  }
  //关闭用户窗口
  closeWindow() {
    let box = document.getElementById('adduser-box');
    box.setAttribute("style", "transition: width 0.5s;right:-30%")
  }
  //获取用户列表
  getUserList() {
    let data = {};
    data.permissions = 1;
    if(this.state.searchId) {
      data.id = this.state.searchId;
    }
    GetUserList(data).then(res => {
      if (res) {
        this.state.userList = res;
        this.setState({});
      }
    })
  }
  //删除某个用户
  showDeleteConfirm(item) {
    confirm({
      title: '你确定要删除？',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        DeleteUser(item._id).then(res => {
          if (res.status == 200) {
            message.success('删除成功！');
          } else {
            message.error('删除失败！');
          }
        })
      }
    });
  }
  //保存添加用户信息
  handleSubmit = (e) => {
    e.preventDefault();
    let data;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        data = values;
        data.sex = Number(data.sex);
        data.class = Number(data.class);
        data.password = hex_md5('123456',32);
        data.permissions = 1;
        let right=true;
        _.map(this.state.userList,(item,index)=>{
          if(item.email==data.email){
            message.error('邮箱已存在！');
            right=false;
            return;
          }
        })
        if(right){
          AddUser(data).then(res => {
            if (res) {
              //添加成功
              this.getUserList();
              message.success('添加成功！');
              let box = document.getElementById('adduser-box');
              box.setAttribute("style", "transition: width 0.5s;right:-30%")
            }
          })
        }
      }
    });
  }
  //密码重置
  rePassword(r){
    let data={};
    data.password = hex_md5('123456');
    data._id = r._id;
    confirm({
      title: '你确定要重置密码？',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        UpdateUserInfo(data).then(res=>{
          if (res) {
            message.success('重置成功！');
          } else {
            message.error('重置失败！');
          }
        })
      }
    });
  }
}
const StudentMgt = Form.create()(StudentMgtList);
export default StudentMgt;