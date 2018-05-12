/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 10:27:24 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-05-08 12:19:27
 */
import React from 'react';
import { Form, Input, Select, Button, Icon,message } from 'antd';
import { GetUserInfo, UpdateUserInfo } from '../../services/usersService.js';
const FormItem = Form.Item;
const Option = Select.Option;
class BasicInfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      currentUser:{},
      _id:'',
    }
  }
  componentWillMount() {
    this._getUserInfo();
  }
  render() {
    const imageUrl = this.state.imageUrl;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="margin-left-subpanel">
        <div className="list-header">
          <p>基本资料</p>
        </div>
        <Form onSubmit={this.handleSubmit} className="subAdd-form">
          <fieldset>
            <FormItem
              label="姓名"
              labelCol={{ span: 3 }}
              wrapperCol={{ span: 5 }}
            >
              {getFieldDecorator('name', {
                rules: [{
                  required: true, message: '请填写姓名!',
                }],
                initialValue: this.state.currentUser.name
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              label="学号(编号)"
              labelCol={{ span: 3 }}
              wrapperCol={{ span: 5 }}
            >
              {getFieldDecorator('id', {
                rules: [{
                  required: true,
                }],
                initialValue: this.state.currentUser.id
              })(
                <Input disabled={true} />
              )}
            </FormItem>
            <FormItem
              label="性别"
              labelCol={{ span: 3 }}
              wrapperCol={{ span: 5 }}
            >
              {getFieldDecorator('sex', {
                rules: [{
                  required: true, message: '请选择性别!',
                }],
                initialValue: this.state.currentUser.sex
              })(
                <Select placeholder="请选择性别">
                  <Option value={0}>男</Option>
                  <Option value={1}>女</Option>
                </Select>
              )}
            </FormItem>
            <FormItem
              label="学院"
              labelCol={{ span: 3 }}
              wrapperCol={{ span: 5 }}
            >
              {getFieldDecorator('college', {
                rules: [{
                  required: true, message: '请填写学院!',
                }],
                initialValue: this.state.currentUser.college
              })(
                <Input />
              )}
            </FormItem>
            {
              this.state.currentUser.title?
              <FormItem
              label="职称"
              labelCol={{ span: 3 }}
              wrapperCol={{ span: 5 }}
            >
              {getFieldDecorator('title', {
                rules: [{
                  required: true, message: '请选择职称!',
                }],
                initialValue: this.state.currentUser.title
              })(
                <Select placeholder="请选择职称">
                  <Option value={1}>助教</Option>
                  <Option value={2}>讲师</Option>
                  <Option value={3}>副教授</Option>
                  <Option value={4}>教授</Option>
                </Select>
              )}
            </FormItem>:''
            }
            {
              this.state.currentUser.position&&this.state.currentUser.title?
              <FormItem
              label="岗位"
              labelCol={{ span: 3 }}
              wrapperCol={{ span: 5 }}
            >
              {getFieldDecorator('position', {
                rules: [{
                  required: true, message: '请选择岗位!',
                }],
                initialValue: this.state.currentUser.position
              })(
                <Select placeholder="请选择岗位">
                  <Option value={1}>普通教师</Option>
                  <Option value={2}>教研主任</Option>
                </Select>
              )}
            </FormItem>:''
            }
            {
              this.state.currentUser.major?
              <FormItem
              label="专业"
              labelCol={{ span: 3 }}
              wrapperCol={{ span: 5 }}
            >
              {getFieldDecorator('major', {
                rules: [{
                  required: true, message: '请填写专业!',
                }],
                initialValue: this.state.currentUser.major
              })(
                <Input />
              )}
            </FormItem>:''
            }
            {
              this.state.currentUser.class?
              <FormItem
              label="班级"
              labelCol={{ span: 3 }}
              wrapperCol={{ span: 5 }}
            >
              {getFieldDecorator('class', {
                rules: [{
                  required: true, message: '请选择班级!',
                }],
                initialValue: this.state.currentUser.class
              })(
                <Select placeholder="请选择班级">
                  <Option value={1}>1</Option>
                  <Option value={2}>2</Option>
                  <Option value={3}>3</Option>
                  <Option value={4}>4</Option>
                </Select>
              )}
            </FormItem>:''
            }
            {/* {
              this.state.currentUser.position?

            } */}
            <FormItem
              label="邮箱"
              labelCol={{ span: 3 }}
              wrapperCol={{ span: 5 }}
            >
              {getFieldDecorator('email', {
                rules: [{
                  required: true, message: '请填写邮箱!',
                }],
                initialValue: this.state.currentUser.email
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              label="联系方式"
              labelCol={{ span: 3 }}
              wrapperCol={{ span: 5 }}
            >
              {getFieldDecorator('tel', {
                rules: [{
                  required: true, message: '请填写联系方式!',
                }],
                initialValue: this.state.currentUser.tel
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              wrapperCol={{
                xs: { span: 16, offset: 0 },
                sm: { span: 12, offset: 4 },
              }}
            >
              <Button type="primary" htmlType="submit">保存</Button>
            </FormItem>
          </fieldset>
        </Form>
      </div>
    );
  }
  _getUserInfo() {
    let data={};
    data.id = sessionStorage.getItem('id');
    GetUserInfo(data).then(res=>{
      if(res.length>0){
        this.state.currentUser=res[0];
        this.state._id=res[0]._id;
      }
      this.setState({});
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let data;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        data = values;
        data._id=this.state._id;
        UpdateUserInfo(data).then(res=>{
          if(res){
            message.success('修改成功！');
            this._getUserInfo();
          }else{
            message.error('修改失败,请重试！');
          }
        })
      }
    });
  }
}
const BasicInfo = Form.create()(BasicInfoForm);
export default BasicInfo;