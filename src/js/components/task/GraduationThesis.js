/*
 * @Author: VickyFan 
 * @Date: 2018-04-19 14:55:35 
 * @Last Modified by:   VickyFan 
 * @Last Modified time: 2018-04-19 14:55:35 
 */
/**
 * 毕业论文
 */
import React from 'react';
export default class GraduationThesis extends React.Component {
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
                    <h2>【毕业论文】毕业论文管理系统的设计与实现</h2>
                </div>
                <div className="task-body">
                    <div className="left">
                        <span>一、摘要(500字以内)</span>
                        <textarea name="targrt" maxLength="500" onChange={this.changeValue.bind(this,'target')} readOnly={this.state.isEdit}></textarea>
                        <span>二、关键词(100字以内)</span>
                        <textarea name="content" maxLength="100" onChange={this.changeValue.bind(this,'content')} readOnly={this.state.isEdit} className="keyWord"></textarea>
                        <span>三、外文摘要(500字以内)</span>
                        <textarea name="targrt" maxLength="500" onChange={this.changeValue.bind(this,'target')} readOnly={this.state.isEdit}></textarea>
                        <span>四、正文</span>
                        <textarea name="shouldDo" onChange={this.changeValue.bind(this,'shouldDo')} readOnly={this.state.isEdit} className="review-content"></textarea>
                        <span>五、参考文献(500字以内)</span>
                        <textarea name="process" maxLength="500" onChange={this.changeValue.bind(this,'process')} readOnly={this.state.isEdit}></textarea>
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