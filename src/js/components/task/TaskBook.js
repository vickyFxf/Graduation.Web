/*
 * @Author: VickyFan 
 * @Date: 2018-04-19 14:48:36 
 * @Last Modified by:   VickyFan 
 * @Last Modified time: 2018-04-19 14:48:36 
 */
/**
 * 任务书
 */
import React from 'react';
export default class TaskBook extends React.Component {
    constructor(props){
        super(props);
        this.state={
            formData:{
                target:'',
            }
        }
    }
    render() {
        return (
            <div className="task-page margin-left-subpanel">
                <div className="list-header">
                    <p>任务书</p>
                </div>
                <div className="task-body">
                    <div className="document-box">
                        <table>
                            <tr><td colspan="2">[任务书]毕业论文管理系统的设计与实现</td></tr>
                            <tr><td colspan="2">导师&nbsp;陈伟&nbsp;学生：&nbsp;范秀芳</td></tr>
                            <tr><td>一、</td><td>目的和要求</td></tr>
                            <tr><td><input name="targrt" onChange={this.changeValue.bind(this,'targrt')}/></td></tr>
                            <tr><td>二、</td><td>主要内容和数据等</td></tr>
                            <tr><td><input name="content" onChange={this.changeValue.bind(this,'content')}/></td></tr>
                            <tr><td>三、</td><td>应完成的工作</td></tr>
                            <tr><td><input name="shouldDo" onChange={this.changeValue.bind(this,'shouldDo')}/></td></tr>
                            <tr><td>四、</td><td>进度安排</td></tr>
                            <tr><td><input name="process" onChange={this.changeValue.bind(this,'process')}/></td></tr>
                            <tr><td>五、</td><td>主要参考文献</td></tr>
                            <tr><td><input name="resources" onChange={this.changeValue.bind(this,'resources')}/></td></tr>
                            <tr><td>六、</td><td>上传文件</td></tr>
                            <tr><td><input type="file" name="document" onChange={this.changeValue.bind(this,'document')}/></td></tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
    changeValue(filed){

    }
}