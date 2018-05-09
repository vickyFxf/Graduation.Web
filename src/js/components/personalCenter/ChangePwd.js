/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 10:27:41 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-05-08 12:22:36
 */
import React from 'react';
import { Form, Input, Select, Button, Icon, RadioGroup, Radio,Modal ,message} from 'antd';
import { UpdateUserInfo ,GetUserInfo} from '../../services/usersService.js';
const FormItem = Form.Item;
const Option = Select.Option;

class ChangePwdForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id:'',
      mongodbPwd:'',
    }
  }
  componentWillMount(){
    this.getCurrentUser();
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="margin-left-subpanel">
        <div className="list-header">
          <p>修改密码</p>
        </div>
        <Form onSubmit={this.handleSubmit} className="subAdd-form">
          <fieldset>
            <FormItem
              label="当前密码"
              labelCol={{ span: 3 }}
              wrapperCol={{ span: 5 }}
            >
              {getFieldDecorator('oldPwd', {
                rules: [{
                  required: true, message: "请输入当前密码",
                }],
              })(
                <Input type="password" />
              )}
            </FormItem>
            <FormItem
              label="新&nbsp;&nbsp;密&nbsp;&nbsp;码"
              labelCol={{ span: 3 }}
              wrapperCol={{ span: 5 }}
            >
              {getFieldDecorator('newPwd', {
                rules: [{
                  required: true, message: '请输入6-12位字母数字组成的密码!',
                  max: 12,
                  min: 6,
                  pattern: /^[a-zA-Z0-9]{6,12}$/,
                }],
              })(
                <Input type="password" />
              )}
            </FormItem>
            <FormItem
              label="确认密码"
              labelCol={{ span: 3 }}
              wrapperCol={{ span: 5 }}
            >
              {getFieldDecorator('confirmPwd', {
                rules: [{
                  required: true, message: '请再次输入以确认新密码!',
                }],
              })(
                <Input type="password" />
              )}
            </FormItem>
            <FormItem
              wrapperCol={{
                xs: { span: 16, offset: 0 },
                sm: { span: 12, offset: 4 },
              }}   
            >
              <Button type="primary" htmlType="submit">确定</Button>
            </FormItem>
          </fieldset>
        </Form>
      </div>
    );
  }
  getCurrentUser(){
    let data={};
    data.id=sessionStorage.getItem('id');
    GetUserInfo(data).then(res=>{
      if(res){
        this.state._id=res[0]._id;
        this.state.mongoPwd=res[0].password;
      }
      this.setState({});
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let data = {};
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if(this.state.mongoPwd!=hex_md5(values.oldPwd)){
          Modal.error({
            content: '原始密码输入错误，请重新输入！',
          });
          return;
        }
        if(values.newPwd!=values.confirmPwd){
          Modal.error({
            content: '前后密码不一致，请重新输入！',
          });
          return;
        }
        data.password = hex_md5(values.newPwd);
        data._id = this.state._id;
        UpdateUserInfo(data).then(res=>{
          if (res) {
            message.success('修改成功！');
          } else {
            message.error('修改失败！');
          }
        })
      }
    });
  }
}
const ChangePwd = Form.create()(ChangePwdForm);
export default ChangePwd;