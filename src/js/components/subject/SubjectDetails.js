/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 10:28:51 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-27 17:55:34
 */
import React from 'react';
import { Icon, Button, Input, Table, Divider } from 'antd';
import { Link } from 'react-router';
import { GetSubjectInfo } from '../../services/subjectService.js';

export default class SubjectDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.params._id,
      details: {}
    }
  }
  componentWillMount() {
    this._getSubList();
  }
  _getSubList() {
    let data = {};
    data._id = this.state._id;
    GetSubjectInfo(data).then(res => {
      this.state.details = res;
      this.setState({});
    })
  }
  render() {
    const item = this.state.details;
    return (
      <div className="margin-left-subpanel">
        <div className="list-header">
          <p>课题详情</p>
        </div>
        <div className="table-container" id="subDetails">
          <table>
            <caption style={{ textAlign: 'center', captionSide: 'top', padding: '0', color: '#000' }}>多层架构下药库系统的设计</caption>
            <tbody>
              <tr>
                <td>指导教师</td><td>乔凯</td>
              </tr>
              <tr>
                <td>联系方式</td><td>13900938829</td>
              </tr>
              <tr>
                <td>课题来源</td><td>教学科研</td>
              </tr>
              <tr>
                <td>课题类别</td><td>生产实际</td>
              </tr>
              <tr style={{ minHeight: '35px' }}>
                <td>课题简介</td>
                <td>通过多层架构，BS的工作模式，实现药库的入库、出库、盘点、报损、价格管理、字典管理等功能。数据库为SQL Server。</td>
              </tr>
            </tbody>
            <caption style={{ textAlign: 'center', captionSide: 'bottom', padding: '0', color: '#000' }}>
              <button>申请</button>
              <button>返回</button>
            </caption>
          </table>
        </div>
      </div>
    )
  }
}