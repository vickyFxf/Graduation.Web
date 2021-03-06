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
import { GetClassList,ClassDetails} from '../../services/classService.js';
import { GetSubListById,DeleteSubject,AddSubject,UpdateSubject} from '../../services/subjectService.js';
import moment from 'moment';
const confirm = Modal.confirm;
const FormItem = Form.Item;
const Option = Select.Option;
class SubjectListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectList: [],
      subSourceList: [],
      subCategoryList: [],
      searchKey: '',
      position: '0',
      isEdit:false,
    }
  }
  componentWillMount() {
    this.getSubjectList();
    this.getSubSource();
  }
  render() {
    _.map(this.state.subjectList,(item1,index1)=>{
      item1.isAuditString=this.toIsAudit(item1.isAudit);
      item1.timeString=moment(item1.subTime).format('YYYY-MM-DD HH:mm:ss')
      item1.key=index1+1;
      _.map(this.state.subSourceList,(item2,index2)=>{
        if(item1.subSource==item2._id){
          item1.subSourceString=item2.className;
        }
      })
      _.map(this.state.subCategoryList,(item3,index3)=>{
        if(item1.subCategory==item3._id){
          item1.subCategoryString=item3.className;
        }
      })
    })
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
      dataIndex: 'subSourceString',
      key: 'subSourceString',
    }, {
      title: '类别',
      dataIndex: 'subCategoryString',
      key: 'subCategoryString',
    }, {
      title: '创建时间',
      dataIndex: 'timeString',
      key: 'timeString',
    }, {
      title: '是否审核',
      dataIndex: 'isAuditString',
      key: 'isAuditString',
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <Link to={'subject/subjectDetails/'+record._id}>查看</Link>
          {
            record.isAudit!=2?
            <span>
              <Divider type="vertical" />
              <a href="javascript:void(0)" onClick={this.openEditWindow.bind(this, record)}>修改</a>
              <Divider type="vertical" />
              <a href="javascript:void(0)" onClick={this.showDeleteConfirm.bind(this, record)}>删除</a>
            </span>:''
          }
        </span>
      ),
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
            this.state.searchKey=value;
            this.getSubjectList();
          }}
          enterButton
        />
        <Table
          columns={columns}
          dataSource={this.state.subjectList}
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
                    }],
                    initialValue: this.state.editItem?this.state.editItem.subName:''
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  label="课题来源"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 12 }}
                >
                  {getFieldDecorator('subSource', {
                    rules: [{
                      required: true, message: '请选择课题来源!',
                    }],
                    initialValue: this.state.editItem?this.state.editItem.subSource:''
                  })(
                    <Select placeholder="请选择课题来源">
                      {
                        _.map(this.state.subSourceList, (item, index) => {
                          return (
                            <Option value={item._id} key={index}>{item.className}</Option>
                          )
                        })
                      }
                    </Select>
                  )}
                </FormItem>
                <FormItem
                  label="课题类别"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 12 }}
                >
                  {getFieldDecorator('subCategory', {
                    rules: [{
                      required: true, message: '请选择课题类别!',
                    }],
                    initialValue: this.state.editItem?this.state.editItem.subCategory:''
                  })(
                    <Select placeholder="请选择课题类别">
                      {
                        _.map(this.state.subCategoryList, (item, index) => {
                          return (
                            <Option value={item._id} key={index}>{item.className}</Option>
                          )
                        })
                      }
                    </Select>
                  )}
                </FormItem>
                <FormItem
                  label="课题简介"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 12 }}
                >
                  {getFieldDecorator('subIntroduction', {
                    rules: [{
                      required: true, message: '请填写课题简介!',
                    }],
                    initialValue: this.state.editItem?this.state.editItem.subIntroduction:''
                  })(
                    <textarea style={{ resize: 'none', maxWidth: '280px', maxHeight: '300px', width: '280px', height: '80px' }}></textarea>
                  )}
                </FormItem>
                <FormItem
                  wrapperCol={{
                    xs: { span: 18, offset: 0 },
                    sm: { span: 16, offset: 6 },
                  }}
                >
                  <Button onClick={this.closeWindow.bind(this)} style={{ marginRight: '70px' }}>取消</Button>
                  <Button type="primary" htmlType="submit">确定</Button>
                </FormItem>
              </fieldset>
            </Form>
          </div>

        </div>
      </div>
    );
  }
  //获取课题来源/获取课题类别
  getSubSource() {
    GetClassList().then(res => {
      if (res) {
        //课题来源
        let a = [];
        _.map(res, (item, index) => {
          if (item.classType == 0) {
            a.push(item);
          }
        })
        this.state.subSourceList = a;
        //课题类别
        let b = [];
        _.map(res, (item, index) => {
          if (item.classType == 1) {
            b.push(item);
          }
        })
        this.state.subCategoryList = b;
      }
      this.setState({})
    })
  }
  //打开编辑窗口
  openEditWindow(item){
    let box = document.getElementById('addsubject-box');
    box.setAttribute("style", "transition: width 0.5s;right:0");
    this.setState({
      editItem:item,
      isEdit:true
    })
  }
  //打开添加课题窗口
  openWindow() {
    let box = document.getElementById('addsubject-box');
    box.setAttribute("style", "transition: width 0.5s;right:0");
    this.setState({
      isEdit:false
    })
  }
  //转换课题审核状态
  toIsAudit(value){
    switch(value){
      case 1:
        return '未审核';
        break;
      case 2:
        return '已通过';
        break;
      case 3:
        return '未通过';
        break;
    }
  }
  //关闭添加课题窗口
  closeWindow() {
    let box = document.getElementById('addsubject-box');
    box.setAttribute("style", "transition: width 0.5s;right:-50%")
  }
  //获取课题列表
  getSubjectList() {
    let data = {};
    data.creatUserId=sessionStorage.getItem('id');
    data.searchKey=this.state.searchKey;
    GetSubListById(data).then(res => {
      if (res) {
        this.state.subjectList = res;
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
        DeleteSubject(r).then(res => {
          if (res.status == 200) {
            message.success('删除成功！');
          } else {
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
        data.isAudit = 1;//新增默认课题未审核
        data.creatUserId=sessionStorage.getItem('id');
        data.creatUserName=sessionStorage.getItem('userName');
        if(this.state.isEdit){
          data.isAudit=1;
          data._id=this.state.editItem._id;
          UpdateSubject(data).then(res=>{
            if(res){
              let box = document.getElementById('addsubject-box');
              box.setAttribute("style", "transition: width 0.5s;right:-50%")          
              message.success('修改成功！');
              this.getSubjectList();
            }
          })
        }else{
          AddSubject(data).then(res => {
            if (res) {
              let box = document.getElementById('addsubject-box');
              box.setAttribute("style", "transition: width 0.5s;right:-50%");
              message.success('添加成功！');
              this.getSubjectList();            
            }
          })
        }
      }
    });
  }
}
const SubjectList = Form.create()(SubjectListForm);
export default SubjectList;