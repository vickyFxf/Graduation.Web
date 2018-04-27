/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 10:28:01 
 * @Last Modified by:   VickyFan 
 * @Last Modified time: 2018-04-09 10:28:01 
 */
import React from 'react';
import { AddSubject } from '../../services/subjectService.js';
import { Form, Input, Tooltip, Icon, Cascader, Select, Button, Modal } from 'antd';
import { Link } from 'react-router';
const FormItem = Form.Item;
const Option = Select.Option;
const ue = UE.getEditor('editor');
class SubjectAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: 0,//0代表初次，1代表未填入，2代表已填入
      isForm: true,
      successId: '',
    }
  }
  componentWillMount() {
    // location.reload();
  }
  componentDidMount() {
    // location.reload();
    // const ue = UE.getEditor('editor');
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div id="subAdd">
        <p>Hi~ admin，欢迎使用课题发布功能！</p>
        {this.state.isForm ?
          <Form onSubmit={this.handleSubmit} className="subAdd-form">
            <FormItem
              label="课题名称"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              {getFieldDecorator('subName', {
                rules: [{
                  required: true, message: '请填写课题名称!',
                }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              label="课题来源"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              {getFieldDecorator('subSource', {
                rules: [
                  { required: true, message: '请选择课题来源!' },
                ],
              })(
                <Select placeholder="请选择课题来源">
                  <Option value="A">A结合教师科研</Option>
                  <Option value="B">B结合生产实际</Option>
                  <Option value="C">C结合实验</Option>
                  <Option value="D">D有实际背景的专题研究</Option>
                  <Option value="E">E无实际背景的专题研究</Option>
                </Select>
              )}
            </FormItem>
            <FormItem
              label="课题类别"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              {getFieldDecorator('subCategory', {
                rules: [
                  { required: true, message: '请选择课题类别!' },
                ],
              })(
                <Select placeholder="请选择课题类别">
                  <Option value="A">A学术论文</Option>
                  <Option value="B">B调查报告</Option>
                  <Option value="C">C工程设计</Option>
                  <Option value="D">D实验</Option>
                  <Option value="E">E理论计算</Option>
                  <Option value="F">F其他</Option>
                </Select>
              )}
            </FormItem>
            <FormItem
              label="课题简介"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <textarea id="editor" type="text/plain" name="content"></textarea>
              <div className="ant-form-explain" style={{ marginTop: '100px', color: '#f5222d', visibility: this.state.isEdit == 1 ? 'visible' : 'hidden' }}>请填写课题简介!</div>
            </FormItem>
            <FormItem
              wrapperCol={{
                xs: { span: 24, offset: 0 },
                sm: { span: 16, offset: 8 },
              }}
            >
              <Button type="primary" htmlType="submit">立即发布</Button>
            </FormItem>
          </Form>
          :
          <div style={{ height: '300px', textAlign: 'center', lineHeight: '300px' }}>
            <Link to={'subjectDetails/' + this.state.successId}>查看详情>></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="subjectAdd" onClick={this.toAddPage.bind(this)}>继续增加>></Link>
          </div>
        }

      </div>
    );
  }
  _addSubject() {
    AddSubject(data);
  }
  toAddPage() {
    this.setState({ isForm: true })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let data;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        data = values;
        data.isAudit = 0;
        if (ue.hasContents() == 'undefined' || !ue.hasContents()) {
          this.setState({ isEdit: 1 })
          return false;
        } else {
          data.subIntroduction = ue.getContentTxt();
          data.creatUserId = sessionStorage.getItem('id');
          this.success();
          this.setState({ isForm: false });
          AddSubject(data).then(res => {
            this.state.successId = res._id;
            this.setState({});
          })
        }
      }
    });
  }
  success() {
    const modal = Modal.success({
      className: "vertical-center-modal",
      content: '添加成功！',
    });
    setTimeout(() => modal.destroy(), 1000);
  }
  error() {
    const modal = Modal.error({
      className: "vertical-center-modal",
      content: '添加失败！',
    });
    setTimeout(() => modal.destroy(), 1000);
  }
}
const SubjectAddForm = Form.create()(SubjectAdd);
export default SubjectAddForm;