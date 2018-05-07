/*
 * @Author: VickyFan 
 * @Date: 2018-04-19 14:55:54 
 * @Last Modified by:   VickyFan 
 * @Last Modified time: 2018-04-19 14:55:54 
 */
/**
 * 外文翻译
 */
import React from 'react';
export default class EnglishTranslation extends React.Component {
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
                    <h2>【外文翻译】毕业论文管理系统的设计与实现</h2>
                </div>
                <div className="task-body">
                    <div className="left">
                        <span>一、翻译</span>
                        <textarea name="targrt" onChange={this.changeValue.bind(this,'target')} readOnly={this.state.isEdit} className="translate"></textarea>
                        <span>二、上传文件</span>
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