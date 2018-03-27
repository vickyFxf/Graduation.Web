/**
 * 个人中心：基本信息
 * Created by vicky on 2018/03/36
 */
import React from 'react';
import { Form, Input,Select,Button} from 'antd';
import {GetUserInfo,UpdateUserInfo} from '../../services/usersService.js';
const FormItem = Form.Item;
const Option = Select.Option;
class BasicInfoForm extends React.Component {
    componentWillMount(){
        // this._getUserInfo();
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="subAdd-form">
                    <FormItem
                    label="姓名"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                    >
                        {getFieldDecorator('name', {
                            rules: [{
                                required: true, message: '请填写姓名!',
                                }],
                            initialValue:'范秀芳'
                        })(
                            <Input/>
                        )}
                    </FormItem>           
                    <FormItem
                    label="学号"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                    >
                        {getFieldDecorator('id', {
                            rules: [{
                                required: true,
                                }],
                           initialValue:'1406010039'
                        })(
                            <Input disabled='true'/>
                        )}
                    </FormItem>
                    <FormItem
                    label="性别"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                    >
                        {getFieldDecorator('sex', {
                            rules: [{
                                required: true, message: '请选择性别!',
                                }],
                            initialValue:'1'
                        })(
                            <Select placeholder="请选择课题类别">
                                <Option value="0">男</Option>
                                <Option value="1">女</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                    label="学院"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                    >
                        {getFieldDecorator('college', {
                            rules: [{
                                required: true, message: '请填写学院!',
                                }],
                            initialValue:'第一临床、信息与工程学院'
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                    label="专业"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                    >
                        {getFieldDecorator('major', {
                            rules: [{
                                required: true, message: '请填写专业!',
                                }],
                            initialValue:'信息管理与信息系统'
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                    label="邮箱"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                    >
                        {getFieldDecorator('email', {
                            rules: [{
                                required: true, message: '请填写邮箱!',
                                }],
                            initialValue:'1004272351@qq.com'
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                    label="联系方式"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                    >
                        {getFieldDecorator('tel', {
                            rules: [{
                                required: true, message: '请填写联系方式!',
                                }],
                            initialValue:'18057727150'
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                    wrapperCol={{
                        xs: { span: 24, offset: 0 },
                        sm: { span: 16, offset: 8 },
                        }}
                    >
                        <Button type="primary" htmlType="submit">保存</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
    _getUserInfo(){
        let data;
        data.id=sessionStorage.getItem('id');
        GetUserInfo(data);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let data;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                data=values;
                data.sex=Number(data.sex);
                UpdateUserInfo(data);
            }
        });
    }
}

const BasicInfo = Form.create()(BasicInfoForm);
export default BasicInfo;