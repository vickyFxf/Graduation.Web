/*
 * @Author: VickyFan 
 * @Date: 2018-04-20 09:45:08 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-23 13:43:22
 */
/**
 * 分类管理
 */
import React from 'react';
import { Tabs, Button, Modal, Input } from 'antd';
import { AddClass, DeleteClass, UpdateClass, GetClassList } from '../../services/classService.js';
const TabPane = Tabs.TabPane;
const confirm = Modal.confirm;
export default class ClassificationMgt extends React.Component {
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
    return (
      <div className="mid-area classList">
        <Tabs onChange={this.changeTab.bind(this)} type="card">
          <TabPane tab="课题来源" key="0">
            <table>
              <thead>
                <tr>
                  <th style={{ width: '15%' }}>序号</th>
                  <th>来源名称</th>
                  <th style={{ width: '20%' }}>操作</th>
                </tr>
              </thead>
              <tbody>
                {
                  _.map(this.state.currenList, (item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.className}</td>
                        <td><a onClick={this.showDeleteConfirm.bind(this, item)}>删除</a></td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </TabPane>
          <TabPane tab="课题类别" key="1">
            <table>
              <thead>
                <tr>
                  <th style={{ width: '15%' }}>序号</th>
                  <th>来源名称</th>
                  <th style={{ width: '20%' }}>操作</th>
                </tr>
              </thead>
              <tbody>
                {
                  _.map(this.state.currenList, (item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.className}</td>
                        <td><a onClick={this.showDeleteConfirm.bind(this, item)}>删除</a></td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </TabPane>
        </Tabs>
        <div className="classAdd">
          <h3>新增课题类别</h3>
          <div>
            <label>来源名称：</label>
            <Input onChange={this.changeValue.bind(this)} />
            <Button type="primary" htmlType="submit" onClick={this.addClass.bind(this)}>保存</Button>
          </div>
        </div>
      </div>
    );
  }
  //获取分类列表
  getCurrentList() {
    GetClassList().then(res => {
      if (res) {
        if (this.state.currenType == 0) {
          //课题来源
          let a = [];
          _.map(res,(item,index)=>{
            if(item.classType==0){
              a.push(item);
            }
          })
          this.state.currenList = a;
        }else{
          //课题类别
          let b = [];
          _.map(res,(item,index)=>{
            if(item.classType==1){
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
          } else {
            console.log("error")
          }
        })
      }
    });
  }
  //获取Input框的值
  changeValue(e) {
    this.state.InputValue = e.target.value;
    this.setState({});
  }
  //新增分类
  addClass() {
    let data = {};
    data.classType = this.state.currenType;
    data.className = this.state.InputValue;
    AddClass(data).then(res => {
      if (res) {
        this.getCurrentList();
      }
    })
  }
}