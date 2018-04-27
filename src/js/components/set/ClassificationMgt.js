/*
 * @Author: VickyFan 
 * @Date: 2018-04-20 09:45:08 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-25 09:41:10
 */
/**
 * 分类管理
 */
import React from 'react';
import { Tabs, Button, Modal, Input, message ,Table,Form, Select,Divider} from 'antd';
import { AddClass, DeleteClass, UpdateClass, GetClassList } from '../../services/classService.js';
const TabPane = Tabs.TabPane;
const confirm = Modal.confirm;
const FormItem = Form.Item;
const Option = Select.Option;
class ClassMgt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currenType: 0,
      currenList: [],
      InputValue: '',
    }
  }
  componentWillMount() {
    this.getCurrentList();
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    _.map(this.state.currenList,(item,index)=>{
      item.key=index+1;
    })
    const columns1 = [{
      title: '序号',
      dataIndex: 'key',
    }, {
      title: '来源名称',
      dataIndex: 'className',
    },{
      title: '操作',
      key: 'action1',
      render: (text, record) => (
        <span>
          <a href="javascript:void(0)" onClick={this.openWindow.bind(this, record)}>新增</a>
          <Divider type="vertical" />
          <a href="javascript:void(0)" onClick={this.showDeleteConfirm.bind(this, record)}>删除</a>
        </span>
      ),
    }];
    const columns2 = [{
      title: '序号',
      dataIndex: 'key',
    }, {
      title: '类别名称',
      dataIndex: 'className',
    },{
      title: '操作',
      key: 'action2',
      render: (text, record) => (
        <span>
          <a href="javascript:void(0)" onClick={this.openWindow.bind(this, record)}>新增</a>
          <Divider type="vertical" />
          <a href="javascript:void(0)" onClick={this.showDeleteConfirm.bind(this, record)}>删除</a>
        </span>
      ),
    }];
    return (
      <div className="margin-left-subpanel" id="classList">
        <div className="list-header">
          <p>分类管理</p>
        </div>
        <Tabs onChange={this.changeTab.bind(this)} type="card">
          <TabPane tab="课题来源" key="0">
            <Table
              columns={columns1}
              dataSource={this.state.currenList}
            />
          </TabPane>
          <TabPane tab="课题类别" key="1">
            <Table
              columns={columns2}
              dataSource={this.state.currenList}
            />
          </TabPane>
        </Tabs>
        {/* 添加分类 */}
        <div className="adduser-box" id="addclass-box" style={{ transition: "width 0.5s", right: '-30%' }}>
          <div className="add-header">
            <div className="left">添加分类</div>
            <div className="right" onClick={this.closeWindow}><i className="iconfont icon-guanbi"></i></div>
          </div>
          <div className="add-body">
            <Form onSubmit={this.handleSubmit} className="subAdd-form">
              <fieldset>
                <FormItem
                  label="分类类别"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span:12 }}
                >
                  {getFieldDecorator('classType', {
                    rules: [{
                      required: true, message: '请选择分类类别!',
                    }],
                  })(
                    <Select placeholder="请选择分类类别">
                      <Option value="0">课题来源</Option>
                      <Option value="1">课题类别</Option>
                    </Select>
                  )}
                </FormItem>
                <FormItem
                  label="分类名称"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span:12 }}
                >
                  {getFieldDecorator('className', {
                    rules: [{
                      required: true, message: '请填写分类名称!',
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  wrapperCol={{
                    xs: { span:16, offset: 0 },
                    sm: { span:12, offset: 4},
                  }}
                >
                    <Button onClick={this.closeWindow.bind(this)} style={{marginRight:'10px'}}>取消</Button>
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
    let box = document.getElementById('addclass-box');
    box.setAttribute("style", "transition: width 0.5s;right:0")
  }
  //关闭用户窗口
  closeWindow() {
    let box = document.getElementById('addclass-box');
    box.setAttribute("style", "transition: width 0.5s;right:-30%")
  }
  //获取分类列表
  getCurrentList() {
    GetClassList().then(res => {
      if (res) {
        if (this.state.currenType == 0) {
          //课题来源
          let a = [];
          _.map(res, (item, index) => {
            if (item.classType == 0) {
              a.push(item);
            }
          })
          this.state.currenList = a;
        } else {
          //课题类别
          let b = [];
          _.map(res, (item, index) => {
            if (item.classType == 1) {
              b.push(item);
            }
          })
          this.state.currenList = b;
        }
      }
      this.setState({});
    })
  }
  //切换tab栏
  changeTab(key) {
    this.state.currenType = key;
    this.getCurrentList();
  }
  //删除某个分类
  showDeleteConfirm(item) {
    confirm({
      title: '你确定要删除？',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        DeleteClass(item._id).then(res => {
          if (res.status == 200) {
            this.getCurrentList();
            message.success('删除成功！');
          } else {
            message.error('删除失败！');
          }
        })
      }
    });
  }
  //新增分类
  handleSubmit = (e) => {
    e.preventDefault();
    let data;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        data = values;
        AddClass(data).then(res => {
          if (res) {
            //添加成功
            this.getCurrentList();            
            message.success('添加成功！');
            let box = document.getElementById('addclass-box');
            box.setAttribute("style", "transition: width 0.5s;right:-30%")
          }
        })
      }
    });
  }
}
const ClassificationMgt = Form.create()(ClassMgt);
export default ClassificationMgt;