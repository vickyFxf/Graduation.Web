/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 10:28:51 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-19 14:47:48
 */
/**
 * 开题报告
 */
import React from 'react';
import { Upload, message, Button, Icon } from 'antd';
export default class OpeningReport extends React.Component {
  constructor(props){
    super(props);
    this.state={
        formData:{
            target:'',
            isEdit:true,
        }
    }
  }
  render() {
      return (
          <div className="task-page margin-left-subpanel">
              <div className="task-title">
                  <h2>【开题报告】毕业论文管理系统的设计与实现</h2>
              </div>
              <div className="task-body">
                  <div className="left">
                      <span>一、本选题的理由及意义(1000字以内)</span>
                      <textarea name="targrt" maxLength="1000" onChange={this.changeValue.bind(this,'target')} readOnly={this.state.isEdit}></textarea>
                      <span>二、需要重点研究的关键问题及解决问题的思路(2000字以内)</span>
                      <textarea name="content" maxLength="2000" onChange={this.changeValue.bind(this,'content')} readOnly={this.state.isEdit}></textarea>
                      <span>三、创新点或实践价值(500字以内)</span>
                      <textarea name="shouldDo" maxLength="500" onChange={this.changeValue.bind(this,'shouldDo')} readOnly={this.state.isEdit}></textarea>
                      <span>四、完成本选题所需的条件（如10篇以上参考文献、工具书等资料）及解决办法(1000字以内)</span>
                      <textarea name="process" maxLength="1000" onChange={this.changeValue.bind(this,'process')} readOnly={this.state.isEdit}></textarea>
                      <span>五、工作方案分析及进度计划(1000字以内)</span>
                      <textarea name="resource" maxLength="1000" onChange={this.changeValue.bind(this,'resource')} readOnly={this.state.isEdit}></textarea>
                      <span>六、上传文件</span>
                      <input type="file" name="document" onChange={this.changeValue.bind(this,'document')}/>
                  </div>
                  <div className="right">
                      <div className="box handleButton">
                          <button>下载模版</button>
                          <button>下载文档</button>
                          <button onClick={this.upload()}>上传</button>
                      </div>
                      <div className="box historyDucument">
                          <div className="history">历史文档</div>
                          <div>
                              <div>1.2018-5-14&nbsp;&nbsp;&nbsp;&nbsp;22:30:45<button>下载</button></div>
                              <div>2.2018-5-15&nbsp;&nbsp;&nbsp;&nbsp;22:30:56<button>下载</button></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
  }
  upload(){
      
  }
  changeValue(filed){

  }
}