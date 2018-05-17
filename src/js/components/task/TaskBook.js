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
import {AddDocumentLine,UpdateDocumentLine,GetDocumentLine,GetDownDocument} from '../../services/documentService';
import {GetSubListById} from '../../services/subjectService';
import {Modal,message} from 'antd';
const confirm = Modal.confirm;
import moment from 'moment';
export default class TaskBook extends React.Component {
    static contextTypes={  
        router:React.PropTypes.object  
    } 
    constructor(props,context){
        super(props,context);
        this.context.router;
        this.state={
            isEdit:false,
            _id:'',
            studentId:sessionStorage.getItem('id'),
            mySubject:{},
            myDocument:{},
            myDownDocument:[],
            formData:{
                target:'',
                content:'',
                shouldDo:'',
                plan:'',
                literature:'',
            }
        }
    }
    componentWillMount(){
        this.getMyDocument();
        this.mySubject();
        this.myDownDocument();
    }
    render() {
        return (
            <div className="task-page margin-left-subpanel">
                <div className="task-title">
                    <h2>【任务书】{this.state.mySubject.subName}</h2>
                </div>
                <div className="task-body">
                    <div className="left">
                        <div ref='show' style={{height:'500px'}}>
                            <span>一、目的和要求(500字以内)</span>
                            <div  style={{height:'80px',overflow:'auto'}}>{this.state.myDocument.target}</div>
                            <span>二、主要内容和数据等(500字以内)</span>
                            <div  style={{height:'80px',overflow:'auto'}}>{this.state.myDocument.content}</div>
                            <span>三、应完成的工作(800字以内)</span>
                            <div  style={{height:'80px',overflow:'auto'}}>{this.state.myDocument.shouldDo}</div>
                            <span>四、进度安排(500字以内)</span>
                            <div  style={{height:'80px',overflow:'auto'}}>{this.state.myDocument.plan}</div>
                            <span>五、主要参考文献(500字以内)</span>
                            <div  style={{height:'80px',overflow:'auto'}}>{this.state.myDocument.literature}</div>
                            <button onClick={this.upload.bind(this)}>编辑</button>
                        </div>
                        <div ref='showInp' style={{display:'none'}}>
                            <span>一、目的和要求(500字以内)</span>
                            <textarea name="targrt" maxLength="500" defaultValue={this.state.myDocument.target} onChange={this.changeValue.bind(this,'target')} ></textarea>
                            <span>二、主要内容和数据等(500字以内)</span>
                            <textarea name="content" maxLength="500" defaultValue={this.state.myDocument.content} onChange={this.changeValue.bind(this,'content')}></textarea>
                            <span>三、应完成的工作(800字以内)</span>
                            <textarea name="shouldDo" maxLength="800" defaultValue={this.state.myDocument.shouldDo} onChange={this.changeValue.bind(this,'shouldDo')}></textarea>
                            <span>四、进度安排(500字以内)</span>
                            <textarea name="plan" maxLength="500" defaultValue={this.state.myDocument.plan} onChange={this.changeValue.bind(this,'plan')} ></textarea>
                            <span>五、主要参考文献(500字以内)</span>
                            <textarea name="literature" maxLength="500" defaultValue={this.state.myDocument.literature} onChange={this.changeValue.bind(this,'literature')}></textarea>
                            <button onClick={this.handleSubmit.bind(this)}>保存文档</button>
                        </div>
                    </div>
                    <div className="right">
                        <div className="box handleButton">
                            <button onClick={this.downTemplate.bind(this,'任务书.doc')}>下载模版</button>
                            <form encType='multipart/form-data' action={'http://localhost:3000/MyDocument-Module/Upload/_id='+this.state.studentId+'&teacherId='+this.state.mySubject.creatUserId+'&_docType='+'任务书'} method="post" target="hidden-iframe">
                                <input type="file" name="myfile"></input>
                                <input type="submit" value="保存文档"></input>
                            </form>
                        </div>
                        <div className="box historyDucument">
                            <div className="history">历史文档</div>
                            <div>
                                {
                                    _.map(this.state.myDownDocument,(item,index)=>{
                                        return(
                                            <div key={index}><span>{index+1}.&nbsp;</span><span>{moment(item.date).format('YYYY-MM-DD HH:mm:ss')}</span><button onClick={this.downMyDocument.bind(this,item)}>下载</button></div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    getMyDocument(){
        let data={};
        data.docStudentId=sessionStorage.getItem('id');
        data.docName='任务书';
        GetDocumentLine(data).then(res=>{
            if(res.length>0){
                this.state.myDocument=res[0];
                this.state.isEdit=true;
                this.state.formData.target=res[0].target;
                this.state.formData.content=res[0].content;
                this.state.formData.shouldDo=res[0].shouldDo;
                this.state.formData.plan=res[0].plan;
                this.state.formData.literature=res[0].literature;
            }
            this.setState({});
        })
    }
    upload(){
        this.refs.show.setAttribute('style','display:none');
        this.refs.showInp.setAttribute('style','display:block');
        this.setState({});
    }
    changeValue(filed,e){
        this.state.formData[filed]=e.target.value;
    }
    mySubject(){
        let data={};
        data.studentId=sessionStorage.getItem('id');
        GetSubListById(data).then(res=>{
          if(res.length>0){
            this.state.mySubject=res[0];
          }
          this.setState({});
        })
    }
    handleSubmit(){
        let data=this.state.formData;
        data.docStudentId=sessionStorage.getItem('id');
        data.docStudentName=sessionStorage.getItem('userName');
        if(!data.target&&data.target==''){
            message.error('请填写目的和要求！');
            return;
        }
        if(!data.target&&data.target==''){
            message.error('请填写主要内容和数据等！');
            return
        }
        if(!data.target&&data.target==''){
            message.error('请填写应完成的工作！');
            return
        }
        if(!data.target&&data.target==''){
            message.error('请填写进度安排！');
            return
        }
        if(!data.target&&data.target==''){
            message.error('请填写主要参考文献！');
            return
        }
        if(this.state.isEdit){
            data._id=this.state.myDocument._id;
            UpdateDocumentLine(data).then(res=>{
                if(res){
                    this.refs.show.setAttribute('style','display:block');
                    this.refs.showInp.setAttribute('style','display:none');
                    this.getMyDocument();
                    this.setState({});
                    message.success('修改成功！');
                }else{
                    message.error('修改失败，请重试！');
                }
            })
        }else{
            data.docName='任务书';
            AddDocumentLine(data).then(res=>{
                if(res){
                    this.refs.show.setAttribute('style','display:block');
                    this.refs.showInp.setAttribute('style','display:none');
                    this.getMyDocument();
                    this.setState({});
                    message.success('上传成功！');
                }else{
                    message.error('上传失败，请重试！');
                }
            })
        }
    }
    //前往在线选题
    goMySubject(){
        this.context.router.push("/subject/subjectChoosed");
    }
    //下载模版
    downTemplate(filename){
        let data={};
        data.filename=filename;
        let url='http://localhost:3000/Upload-Module/DownLoad/'+data.filename;
        window.open(url);
    }
    //下载文档
    downMyDocument(item){
        let url='http://localhost:3000/MyDocument-Module/DownLoad/'+item.filename;
        window.open(url);
    }
    //获取所有之前已经上传的文档
    myDownDocument(){
        let data={};
        data.studentId=sessionStorage.getItem('id');
        data.docType='任务书';
        GetDownDocument(data).then(res=>{
            if (res.length>0) {
                this.state.myDownDocument=res;
            }
            this.setState({});
        })
    }
}