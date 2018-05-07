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
                isEdit:true,
            }
        }
    }
    render() {
        return (
            <div className="task-page margin-left-subpanel">
                <div className="task-title">
                    <h2>【任务书】毕业论文管理系统的设计与实现</h2>
                </div>
                <div className="task-body">
                    <div className="left">
                        <span>一、目的和要求(500字以内)</span>
                        <textarea name="targrt" maxLength="500" onChange={this.changeValue.bind(this,'target')} readOnly={this.state.isEdit}></textarea>
                        <span>二、主要内容和数据等(500字以内)</span>
                        <textarea name="content" maxLength="500" onChange={this.changeValue.bind(this,'content')} readOnly={this.state.isEdit}></textarea>
                        <span>三、应完成的工作(800字以内)</span>
                        <textarea name="shouldDo" maxLength="800" onChange={this.changeValue.bind(this,'shouldDo')} readOnly={this.state.isEdit}></textarea>
                        <span>四、进度安排(500字以内)</span>
                        <textarea name="process" maxLength="500" onChange={this.changeValue.bind(this,'process')} readOnly={this.state.isEdit}></textarea>
                        <span>五、主要参考文献(500字以内)</span>
                        <textarea name="resource" maxLength="500" onChange={this.changeValue.bind(this,'resource')} readOnly={this.state.isEdit}></textarea>
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