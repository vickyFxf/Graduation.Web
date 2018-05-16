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
import {AddDocumentLine,UpdateDocumentLine,GetDocumentLine,GetDownDocument} from '../../services/documentService';
import {GetSubListById} from '../../services/subjectService';
import {Modal,message} from 'antd';
const confirm = Modal.confirm;
import moment from 'moment';
export default class EnglishTranslation extends React.Component {
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
                translate:'',
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
                    <h2>【外文翻译】{this.state.mySubject.subName}</h2>
                </div>
                <div className="task-body">
                    <div className="left">
                        <div ref='show' style={{height:'500px'}}>
                            <span>一、翻译</span>
                            <div style={{height:'480px',overflow:'auto'}}>{this.state.myDocument.translate}</div>
                            <button onClick={this.upload.bind(this)}>编辑文档</button>
                        </div>
                        <div ref='showInp' style={{display:'none'}}>
                            <span>一、翻译</span>
                            <textarea style={{height:'480px',overflow:'auto'}} name="translate" maxLength="1000" defaultValue={this.state.myDocument.translate} onChange={this.changeValue.bind(this,'translate')}></textarea>
                            <button onClick={this.handleSubmit.bind(this)}>保存文档</button>
                        </div>
                    </div>
                    <div className="right">
                        <div className="box handleButton">
                            <button onClick={this.downTemplate.bind(this,'外文翻译.doc')}>下载模版</button>
                            <form encType='multipart/form-data' action={'http://localhost:3000/MyDocument-Module/Upload/_id='+this.state.studentId+'&teacherId='+this.state.mySubject.creatUserId+'&_docType='+'外文翻译'} method="post" target="hidden-iframe">
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
        data.docName='外文翻译';
        GetDocumentLine(data).then(res=>{
            if(res.length>0){
                this.state.isEdit=true;
                this.state.myDocument=res[0];
                this.state.formData.translate=res[0].translate;
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
        if(!data.translate&&data.translate==''){
            message.error('请填写翻译内容！');
            return;
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
            data.docName='外文翻译';
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
        data.docType='外文翻译';
        GetDownDocument(data).then(res=>{
            if (res.length>0) {
                this.state.myDownDocument=res;
            }
            this.setState({});
        })
    }
}