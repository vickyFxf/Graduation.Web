/**
 * 课题模块：增加课题
 * Created by vicky on 2018/03/15
 */
import React from 'react';
import { Form, Input, Tooltip, Icon, Cascader,Select,Button} from 'antd';
export default class SubjectAdd extends React.Component {
    render() {
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
          };
        const FormItem = Form.Item;
        return (
            <div>
               <p>Hi~ admin，欢迎使用课题发布功能！</p>
               <Form>
                    <FormItem
                    label="课题名称"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                    >
                        <Input />
                    </FormItem>
                    <FormItem
                    label="课题来源"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                    >
                        <Select
                        placeholder="请选择课题来源"
                        onChange={this.handleSelectChange}
                        >
                            <Option value="A">A结合教师科研</Option>
                            <Option value="B">B结合生产实际</Option>
                            <Option value="C">C结合实验</Option>
                            <Option value="D">D有实际背景的专题研究</Option>
                            <Option value="E">E无实际背景的专题研究</Option>
                        </Select>
                    </FormItem>
                    <FormItem
                    label="课题类别"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                    >
                        <Select
                        placeholder="请选择课题类别"
                        onChange={this.handleSelectChange}
                        >
                            <Option value="A">A学术论文</Option>
                            <Option value="B">B调查报告</Option>
                            <Option value="C">C工程设计</Option>
                            <Option value="D">D实验</Option>
                            <Option value="E">E理论计算</Option>
                            <Option value="F">F其他</Option>
                        </Select>
                    </FormItem>
                    <FormItem
                    label="课题简介"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                    >
                        <Input />
                    </FormItem>
                    <FormItem
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                    >
                        <Button type="primary">立即发布</Button>
                    </FormItem>
               </Form>
            </div>
        );
    }
}