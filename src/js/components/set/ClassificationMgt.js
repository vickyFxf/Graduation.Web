/*
 * @Author: VickyFan 
 * @Date: 2018-04-20 09:45:08 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-20 16:15:09
 */
/**
 * 分类管理
 */
import React from 'react';
import { Tabs, Button, Modal ,Input} from 'antd';
const TabPane = Tabs.TabPane;
const confirm = Modal.confirm;
export default class ClassificationMgt extends React.Component {
  render() {
    return (
      <div className="mid-area classList">
        <Tabs onChange={this.callback.bind(this)} type="card">
          <TabPane tab="课题来源" key="1">
            <table>
              <thead>
                <tr>
                  <th style={{ width: '15%' }}>序号</th>
                  <th>来源名称</th>
                  <th style={{ width: '20%' }}>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td><td>学术研究</td>
                  <td>
                    <a onClick={this.showDeleteConfirm.bind(this)}>删除</a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="classAdd">
              <h3>新增课题来源</h3>
              <div>
                <label>来源名称：</label>
                <Input />
                <Button type="primary" htmlType="submit">保存</Button>
              </div>
            </div>
          </TabPane>
          <TabPane tab="课题类别" key="2">
            <table>
              <thead>
                <tr><th>序号</th><th>来源名称</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td><td>程序设计</td>
                </tr>
                <tr>
                  <td>2</td><td>科学应用</td>
                </tr>
              </tbody>
            </table>
            <div className="classAdd">
              <h3>新增课题类别</h3>
              <div>
                <label>来源名称：</label>
                <Input />
                <Button type="primary" htmlType="submit">保存</Button>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  }
  callback(key) {
    console.log(key);
  }
  //删除对话框
  showDeleteConfirm(){
    confirm({
      title: '你确定要删除？',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        console.log('OK');
      }
    });
  }
}