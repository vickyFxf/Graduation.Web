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
import {AddDocumentLine,UpdateDocumentLine,GetDocumentLine,GetDownDocument} from '../../services/documentService';
import {GetSubListById} from '../../services/subjectService';
import {Modal,message} from 'antd';
const confirm = Modal.confirm;
import moment from 'moment';
export default class GraduationThesis extends React.Component {
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
                abstract:'',
                keyWord:'',
                content:'',
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
        return(
            <div className="task-page margin-left-subpanel">
                <div className="task-title">
                    <h2>【毕业论文】{this.state.mySubject.subName}</h2>
                </div>
                <div className="task-body">
                    <div className="left">
                        <div ref='show' style={{height:'500px'}}>
                            <span>一、摘要(500字以内)</span>
                            <div style={{height:'80px',overflow:'auto'}}>{this.state.myDocument.abstract}</div>
                            <span>二、关键词(100字以内)</span>
                            <div style={{height:'80px',overflow:'auto'}}>{this.state.myDocument.keyWord}</div>
                            <span>三、正文</span>
                            <div style={{height:'180px',overflow:'auto'}}>{this.state.myDocument.content}</div>
                            <span>四、参考文献(500字以内)</span>
                            <div style={{height:'80px',overflow:'auto'}}>{this.state.myDocument.literature}</div>
                            <button onClick={this.upload.bind(this)}>编辑文档</button>
                        </div>
                        <div ref='showInp' style={{display:'none'}}>
                            <span>一、摘要(500字以内)</span>
                            <textarea name="reason" maxLength="500" defaultValue={this.state.myDocument.abstract} onChange={this.changeValue.bind(this,'abstract')}></textarea>
                            <span>二、关键词(100字以内)</span>
                            <textarea name="keyquestion" maxLength="100" defaultValue={this.state.myDocument.keyWord} onChange={this.changeValue.bind(this,'keyWord')}></textarea>
                            <span>三、正文</span>
                            <textarea name="newValue" defaultValue={this.state.myDocument.content} onChange={this.changeValue.bind(this,'content')}></textarea>
                            <span>四、参考文献(500字以内)</span>
                            <textarea name="literature" maxLength="500" defaultValue={this.state.myDocument.literature} onChange={this.changeValue.bind(this,'literature')}></textarea>
                            <button onClick={this.handleSubmit.bind(this)}>保存文档</button>
                        </div>
                    </div>
                    <div className="right">
                        <div className="box handleButton">
                            <button onClick={this.downTemplate.bind(this,'毕业论文.doc')}>下载模版</button>
                            <form encType='multipart/form-data' action={'http://localhost:3000/MyDocument-Module/Upload/_id='+this.state.studentId+'&teacherId='+this.state.mySubject.creatUserId+'&_docType='+'毕业论文'} method="post" target="hidden-iframe">
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
        data.docName='毕业论文';
        GetDocumentLine(data).then(res=>{
            if(res.length>0){
                this.state.isEdit=true;
                this.state.myDocument=res[0];
                this.state.formData.abstract=res[0].abstract;
                this.state.formData.keyWord=res[0].keyWord;
                this.state.formData.content=res[0].content;
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
        if(!data.abstract&&data.abstract==''){
            message.error('请填写摘要！');
            return;
        }
        if(!data.keyWord&&data.keyWord==''){
            message.error('请填写关键词！');
            return
        }
        if(!data.content&&data.content==''){
            message.error('请填正文内容！');
            return
        }
        if(!data.literature&&data.literature==''){
            message.error('请填写参考文献！');
            return
        }
        if(this.state.isEdit){
            data._id=this.state.myDocument._id;
            UpdateDocumentLine(data).then(res=>{
                if(res){
                    this.getMyDocument();
                    message.success('修改成功！');
                    this.refs.show.setAttribute('style','display:block');
                    this.refs.showInp.setAttribute('style','display:none');
                }else{
                    message.error('修改失败，请重试！');
                }
            })
        }else{
            data.docName='毕业论文';
            AddDocumentLine(data).then(res=>{
                if(res){
                    this.getMyDocument();
                    message.success('上传成功！');
                    this.refs.show.setAttribute('style','display:block');
                    this.refs.showInp.setAttribute('style','display:none');
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
        data.docType='毕业论文';
        GetDownDocument(data).then(res=>{
            if (res.length>0) {
                this.state.myDownDocument=res;
            }
            this.setState({});
        })
    }
}