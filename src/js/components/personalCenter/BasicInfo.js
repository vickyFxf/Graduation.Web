/**
 * 个人中心：基本信息
 * Created by vicky on 2018/03/36
 */
import React from 'react';
import { Form, Input, Tooltip, Icon, Cascader,Select,Button,Modal} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
class BasicInfoForm extends React.Component {
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
                            initialValue:'信息管理与信息系统'
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
    handleSubmit = (e) => {
        e.preventDefault();
        let data;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                data=values;
                data.isAudit=0;
                if(ue.hasContents()=='undefined'||!ue.hasContents()){
                    this.setState({isEdit:1})
                    return false;
                }else{
                    data.subIntroduction=ue.getContentTxt();
                    data.creatUserId=sessionStorage.getItem('id');
                    this.success();
                    this.setState({isForm:false});
                    AddSubject(data);
                }
            }
        });
    }
}

const BasicInfo = Form.create()(BasicInfoForm);
export default BasicInfo;