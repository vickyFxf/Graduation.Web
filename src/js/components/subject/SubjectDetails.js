/**
 * 课题模块：课题详情
 * Created by vicky on 2018/03/29
 */
import React from 'react';
import {Icon,Button,Input,Table, Divider} from 'antd';
import {Link} from 'react-router';
import {GetSubjectDetails} from '../../services/subjectService.js';

export default class SubjectDetails extends React.Component {
  constructor(props){
    super(props);
    this.state={
    }
  }
  componentWillMount(){
    // this._getSubList();
  }
  render() {
      return(
          <div className="table-container" id="subDetails">
              <table>
                  <caption style={{textAlign:'center',captionSide:'top',padding:'0',color:'#000'}}>多层架构下药库系统的设计</caption>
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
                    <tr style={{minHeight:'35px'}}>
                        <td>课题简介</td>
                        <td>通过多层架构，BS的工作模式，实现药库的入库、出库、盘点、报损、价格管理、字典管理等功能。数据库为SQL Server。通过多层架构，BS的工作模式，实现药库的入库、出库、盘点、报损、价格管理、字典管理等功能。数据库为SQL Server。
                        通过多层架构，BS的工作模式，实现药库的入库、出库、盘点、报损、价格管理、字典管理等功能。数据库为SQL Server。通过多层架构，BS的工作模式，实现药库的入库、出库、盘点、报损、价格管理、字典管理等功能。数据库为SQL Server。
                        </td>
                    </tr>
                  </tbody>
                  <caption style={{textAlign:'center',captionSide:'bottom',padding:'0',color:'#000'}}>
                    <button>申请</button>
                    <button>返回</button>
                  </caption>
              </table>
          </div>
      )
   }
}