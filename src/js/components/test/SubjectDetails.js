/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 10:28:51 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-28 10:17:36
 */
/**
 * 课题详情
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
              <td>课题来源</td><td>B</td>
            </tr>
            <tr>
              <td></td><td className="attention">注：来源A=结合教师科研 B=结合生产实际 C=结合实验 D=有实际背景的专题研究 E=无实际背景的专题研究</td>
            </tr>
            <tr>
              <td>课题类别</td><td>C</td>
            </tr>
            <tr>
              <td></td><td className="attention">注：类型A=学术论文 B=调查报告 C=工程设计 D=实验 E=理论计算 F=其他</td>
            </tr>
            <tr style={{ minHeight: '35px' }}>
              <td>课题简介</td>
              <td>{item.subIntroduction}</td>
            </tr>
          </tbody>
          <caption style={{ textAlign: 'center', captionSide: 'bottom', padding: '0', color: '#000' }}>
            <button>申请</button>
            <button>返回</button>
          </caption>
        </table>
      </div>
    )
  }
}