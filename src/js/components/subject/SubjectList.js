/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 10:29:03 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-28 17:34:43
 */
import React from 'react';
import { Icon, Button, Input, Table, Divider, Modal, Form, Select, Upload, message } from 'antd';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { GetSubListById, DeleteSubject, AddSubject } from '../../services/usersService.js';
const confirm = Modal.confirm;
const FormItem = Form.Item;
const Option = Select.Option;
const ue = UE.getEditor('subAdd-editor');//富文本编辑器
class SubjectListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      searchId: '',
      position: '0',
      show: false,
    }
  }
  componentWillMount() {
    // this.getUserList();
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
          <Link to="subject/subjectDetails/123456">查看</Link>
          <Divider type="vertical" />
          <a href="javascript:void(0)" onClick={this.openWindow.bind(this, record)}>修改</a>
          <Divider type="vertical" />
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
      key: '2',
      subName: "毕业论文管理系统",
      subSource: "结合教师科研",
      subCategory: "学术论文",
      subIntroduction: '通过多层架构，B/S的工作模式，实现毕业论文的在线管理',
      creatUserId: '1xhdh1839944',
      subTime: "2017-09-13",
      isAudit: "未审核",
    }];
    return (
      <div id="subjectList" className="userMgt-list margin-left-subpanel">
        <div className="list-header">
          <p>我的课题</p>
        </div>
        <Button onClick={this.openWindow.bind(this)}><Icon type="plus-circle" style={{ fontSize: 18, color: '#32CD32' }} />添加</Button>
        <label className="search-label">按关键字查询：</label>
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
        <div className="adduser-box" id="addsubject-box" style={{ transition: "width 0.5s", right: '-50%' }}>
          <div className="add-header">
            <div className="left">添加课题</div>
            <div className="right" onClick={this.closeWindow}><i className="iconfont icon-guanbi"></i></div>
          </div>
          <div className="add-body">
            <Form onSubmit={this.handleSubmit} className="subAdd-form">
              <fieldset>
                <FormItem
                  label="课题名称"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 12 }}
                >
                  {getFieldDecorator('subName', {
                    rules: [{
                      required: true, message: '请填写课题名称!',
                      initialValue: this.state.editItem?this.state.editItem.subName:''
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  label="课题来源"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span:12 }}
                >
                  {getFieldDecorator('subSource', {
                    rules: [{
                      required: true, message: '请选择课题来源!',
                      initialValue: this.state.editItem?this.state.editItem.subSource:''
                    }],
                  })(
                    <Select placeholder="请选择课题来源">
                      <Option value="0">结合教师科研</Option>
                      <Option value="1">结合生产实际</Option>
                    </Select>
                  )}
                </FormItem>
                <FormItem
                  label="课题类别"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span:12 }}
                >
                  {getFieldDecorator('subCategory', {
                    rules: [{
                      required: true, message: '请选择课题类别!',
                      initialValue: this.state.editItem?this.state.editItem.subCategory:''
                    }],
                  })(
                    <Select placeholder="请选择课题类别">
                      <Option value="0">学术论文</Option>
                      <Option value="1">调查报告</Option>
                    </Select>
                  )}
                </FormItem>
                <FormItem
                  label="课题简介"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 12}}
                >
                  {getFieldDecorator('subIntroduction', {
                    rules: [{
                      required: true, message: '请填写课题简介!',
                      initialValue: this.state.editItem?this.state.editItem.subIntroduction:""
                    }],
                  })(
                      <textarea style={{resize: 'none',maxWidth:'280px',maxHeight:'300px',width:'280px',height:'80px'}}></textarea>
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
  //添加课题窗口
  openWindow(item) {
    this.setState({
      editItem:item      
    })
    let box = document.getElementById('addsubject-box');
    box.setAttribute("style", "transition: width 0.5s;right:0");
  }
  //关闭添加课题窗口
  closeWindow() {
    let box = document.getElementById('addsubject-box');
    box.setAttribute("style", "transition: width 0.5s;right:-50%")
  }
  //获取课题列表
  getUserList() {
    let data = {};
    data.permission = 2;
    data.id = this.state.searchId;
    // GetUserList(data).then(res => {
    //   if (res.length > 0) {
    //     this.state.userList = res;
    //   }
    // })
    // this.setState({});
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
        message.success('添加成功！');
        console.log(data);
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