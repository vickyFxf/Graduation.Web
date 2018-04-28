/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 16:49:48 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-28 10:19:45
 */
/**
 * 单个教师所有课题
 */
import React from 'react';
import { Icon, Button, Input, Table, Divider, Modal, Form, Select, Upload, message } from 'antd';
import { Link } from 'react-router';
import { connect } from 'react-redux';
// import { DeleteUser, GetUserList, AddUser } from '../../services/usersService.js';
const confirm = Modal.confirm;
const FormItem = Form.Item;
const Option = Select.Option;
class SubjectListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      searchId: '',
      position: '0',
      show: false
    }
  }
  componentWillMount() {
    this.getUserList();
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const Search = Input.Search;
    const columns = [{
      title: '序号',
      dataIndex: 'key',
      key: 'key',
    }, {
      title: '课题名称',
      dataIndex: 'subName',
      key: 'subName',
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
          <a href="javascript:void(0)" onClick={this.showDeleteConfirm.bind(this, record)}>查看</a>
          <Divider/>
          <a href="javascript:void(0)" onClick={this.showDeleteConfirm.bind(this, record)}>修改</a>
          <Divider/>
          <a href="javascript:void(0)" onClick={this.showDeleteConfirm.bind(this, record)}>删除</a>
        </span>
      ),
    }];
    const data = [{
      key: '1',
      subName: "毕业论文管理系统",
      subSource: "结合教师科研",
      subCategory: "学术论文",
      subIntroduction: '通过多层架构，B/S的工作模式，实现毕业论文的在线管理',
      creatUserId: '1xhdh1839944',
      subTime: "2017-09-03",
      isAudit: "未审核",
    }, {
      key: '1',
      subName: "毕业论文管理系统",
      subSource: "结合教师科研",
      subCategory: "学术论文",
      subIntroduction: '通过多层架构，B/S的工作模式，实现毕业论文的在线管理',
      creatUserId: '1xhdh1839944',
      subTime: "2017-09-13",
      isAudit: "未审核",
    }];
    return (
      <div id="subList" className="userMgt-list margin-left-subpanel">
        <div className="list-header">
          <p>管理员列表</p>
        </div>
        <Button onClick={this.openWindow.bind(this)}><Icon type="plus-circle" style={{ fontSize: 18, color: '#32CD32' }} />添加</Button>
        <label className="search-label">按编号查询：</label>
        <Search
          placeholder="请输入关键字"
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
          dataSource={data}
        />
        {/* 添加课题 */}
        <div className="adduser-box" id="addsubject-box" style={{ transition: "width 0.5s", right: '-30%' }}>
          <div className="add-header">
            <div className="left">添加课题</div>
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
                      required: true,message: '请填写工号!',
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  label="性别"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span:12 }}
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
                  wrapperCol={{ span:12 }}
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
                  label="岗位"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 12}}
                >
                  {getFieldDecorator('position', {
                    rules: [{
                      required: true, message: '请填写岗位!',
                    }],
                  })(
                    <Input />
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
                    xs: { span:18, offset: 0 },
                    sm: { span:16, offset: 6},
                  }}
                >
                    <Button onClick={this.closeWindow.bind(this)} style={{marginRight:'70px'}}>取消</Button>
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
    let box = document.getElementById('addsubject-box');
    box.setAttribute("style", "transition: width 0.5s;right:0")
  }
  //关闭用户窗口
  closeWindow() {
    let box = document.getElementById('addsubject-box');
    box.setAttribute("style", "transition: width 0.5s;right:-30%")
  }
  //获取用户列表
  getUserList() {
    let data = {};
    data.permission = 2;
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
            message.success('删除成功！');
          }else{
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
        data.permission = 2;
        message.success('添加成功！');
        // console.log(data);
        // AddUser(data).then(res => {
        //   if (res) {
        //     //添加成功
        //     message.success('添加成功！');
        //     this.getUserList();
        //     let box = document.getElementById('addsubject-box');
        //     box.setAttribute("style", "transition: width 0.5s;right:-30%")
        //   }
        // })
      }
    });
  }
}
const SubjectList = Form.create()(SubjectListForm);
export default SubjectList;