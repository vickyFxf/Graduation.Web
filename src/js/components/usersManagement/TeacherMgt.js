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
import { DeleteUser, GetUserList, AddUser } from '../../services/usersService.js';
const confirm = Modal.confirm;
const FormItem = Form.Item;
const Option = Select.Option;
class TeacherMgtList extends React.Component {
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
      item.title=this.toTitle(item.title);
      item.position=this.toPosition(item.position);
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
      title: '工号',
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
          <Divider type="vertical" />
          <a href="javascript:void(0)" onClick={this.showDeleteConfirm.bind(this, record)}>重置密码</a>
        </span>
      ),
    }];
    return (
      <div id="adminMgt" className="userMgt-list margin-left-subpanel">
        <div className="list-header">
          <p>教师列表</p>
        </div>
        <Button onClick={this.openWindow.bind(this)}><Icon type="plus-circle" style={{ fontSize: 18, color: '#32CD32' }} />添加</Button>
        <label className="search-label">按编号查询：</label>
        <Search
          placeholder="请输入编号"
          onSearch={(value) => {
            this.setState({
              searchId: value
            });
            this.getUserList();
          }}
          enterButton
        />
        <Table
          columns={columns}
          dataSource={this.state.userList}
        />
        {/* 添加教师 */}
        <div className="adduser-box" id="adduser-box" style={{ transition: "width 0.5s", right: '-30%' }}>
          <div className="add-header">
            <div className="left">添加教师</div>
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
                  label="工号"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 12 }}
                >
                  {getFieldDecorator('id', {
                    rules: [{
                      required: true, message: '请填写工号!',
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
                  label="职称"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 12 }}
                >
                  {getFieldDecorator('title', {
                    rules: [{
                      required: true, message: '请选择职称!',
                    }],
                  })(
                    <Select placeholder="请选择职称">
                      <Option value="1">助教</Option>
                      <Option value="2">讲师</Option>
                      <Option value="3">副教授</Option>
                      <Option value="4">教授</Option>
                    </Select>
                  )}
                </FormItem>
                <FormItem
                  label="岗位"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 12 }}
                >
                  {getFieldDecorator('position', {
                    rules: [{
                      required: true, message: '请选择岗位!',
                    }],
                  })(
                    <Select placeholder="请选择岗位">
                      <Option value="1">普通教师</Option>
                      <Option value="2">教研主任</Option>
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
                      required: true, message: '请填写邮箱!',
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
                      required: true, message: '请填写联系方式!',
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
  //判断职称的值
  toTitle(value){
    switch(value){
      case 1:
        return '助教'
        break;
      case 2:
        return '讲师'
        break;
      case 3:
        return '副教授'
        break;
      case 4:
        return '教授'
        break;
    }
  }
  toPosition(value){
    switch(value){
      case 1:
        return '普通教师'
        break;
      case 2:
        return '教研主任'
        break;
    }
  }
  //判断岗位的值
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
    data.permissions = 2;
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
        data.permissions = 2;
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
    });
  }
}
const TeacherMgt = Form.create()(TeacherMgtList);
export default TeacherMgt;