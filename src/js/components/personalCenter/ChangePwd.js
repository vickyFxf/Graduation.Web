/**
 * 个人中心：修改密码
 * Created by vicky on 2018/03/36
 */
import React from 'react';
import {Form, Input,Select,Button,Icon,RadioGroup,Radio} from 'antd';
import {UpdateUserInfo} from '../../services/usersService.js';
const FormItem = Form.Item;
const Option = Select.Option;
class ChangePwdForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            id:sessionStorage.getItem('id'),
            oldPwdTips:'请输入当前密码',
            confirmPwdTips:'请确认新密码!'
        }
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        console.log(123);
        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="subAdd-form">
                    <FormItem
                    label="当前密码"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 5 }}
                    >
                        {getFieldDecorator('oldPwd', {
                            rules: [{
                                required: true, message:this.state.oldPwdTips,
                                }],
                        })(
                            <Input type="password"/>
                        )}
                    </FormItem>           
                    <FormItem
                    label="新密码"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 5 }}
                    >
                        {getFieldDecorator('newPwd', {
                            rules: [{
                                required: true,message: '请输入6-12位字母数字组成的密码!',
                                max:12,
                                min:6,
                                pattern:/^[a-zA-Z0-9]{6,12}$/,
                                }],
                        })(
                            <Input type="password"/>
                        )}
                    </FormItem>
                    <FormItem
                    label="确认密码"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 5 }}
                    >
                        {getFieldDecorator('confirmPwd', {
                            rules: [{
                                required: true, message: '请再次输入以确认新密码!',
                                }],
                        })(
                            <Input type="password"/>
                        )}
                    </FormItem>
                    <FormItem
                    wrapperCol={{
                        xs: { span: 24, offset: 0 },
                        sm: { span: 16, offset: 8 },
                        }}
                    >
                        <Button type="primary" htmlType="submit">确定</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
    //验证两次密码是否一致
    checkPwd(){
        
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let data={};
        this.props.form.validateFields((err, values) => {
            if (!err) {
                data.password=hex_md5(values.newPwd);
                data.id=this.state.id;
                UpdateUserInfo(data);
            }
        });
    }
}
const ChangePwd = Form.create()(ChangePwdForm);
export default ChangePwd;