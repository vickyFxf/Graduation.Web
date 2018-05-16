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
import {AddDocumentLine,UpdateDocumentLine,GetDocumentLine,GetDownDocument} from '../../services/documentService';
import {GetSubListById} from '../../services/subjectService';
import {Modal,message} from 'antd';
const confirm = Modal.confirm;
import moment from 'moment';
export default class OpeningReport extends React.Component {
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
                reason:'',
                keyquestion:'',
                newValue:'',
                literature:'',
                plan:'',
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
                    <h2>【开题报告】{this.state.mySubject.subName}</h2>
                </div>
                <div className="task-body">
                    <div className="left">
                        <div ref='show' style={{height:'500px'}}>
                            <span>一、本选题的理由及意义(1000字以内)</span>
                            <div style={{height:'80px',overflow:'auto'}}>{this.state.myDocument.reason}</div>
                            <span>二、需要重点研究的关键问题及解决问题的思路(2000字以内)</span>
                            <div style={{height:'80px',overflow:'auto'}}>{this.state.myDocument.keyquestion}</div>
                            <span>三、创新点或实践价值(500字以内)</span>
                            <div style={{height:'80px',overflow:'auto'}}>{this.state.myDocument.newValue}</div>
                            <span>四、完成本选题所需的条件（如10篇以上参考文献、工具书等资料）及解决办法(1000字以内)</span>
                            <div style={{height:'80px',overflow:'auto'}}>{this.state.myDocument.literature}</div>
                            <span>五、工作方案分析及进度计划(1000字以内)</span>
                            <div style={{height:'80px',overflow:'auto'}}>{this.state.myDocument.plan}</div>
                            <button onClick={this.upload.bind(this)}>编辑文档</button>
                        </div>
                        <div ref='showInp' style={{display:'none'}}>
                            <span>一、本选题的理由及意义(1000字以内)</span>
                            <textarea name="reason" maxLength="1000" defaultValue={this.state.myDocument.reason} onChange={this.changeValue.bind(this,'reason')}></textarea>
                            <span>二、需要重点研究的关键问题及解决问题的思路(2000字以内)</span>
                            <textarea name="keyquestion" maxLength="2000" defaultValue={this.state.myDocument.keyquestion} onChange={this.changeValue.bind(this,'keyquestion')}></textarea>
                            <span>三、创新点或实践价值(500字以内)</span>
                            <textarea name="newValue" maxLength="500" defaultValue={this.state.myDocument.newValue} onChange={this.changeValue.bind(this,'newValue')}></textarea>
                            <span>四、完成本选题所需的条件（如10篇以上参考文献、工具书等资料）及解决办法(1000字以内)</span>
                            <textarea name="literature" maxLength="1000" defaultValue={this.state.myDocument.literature} onChange={this.changeValue.bind(this,'literature')}></textarea>
                            <span>五、工作方案分析及进度计划(1000字以内)</span>
                            <textarea name="plan" maxLength="1000" defaultValue={this.state.myDocument.plan} onChange={this.changeValue.bind(this,'plan')}></textarea>
                            <button onClick={this.handleSubmit.bind(this)}>保存文档</button>
                        </div>
                    </div>
                    <div className="right">
                        <div className="box handleButton">
                            <button onClick={this.downTemplate.bind(this,'开题报告.doc')}>下载模版</button>
                            <form encType='multipart/form-data' action={'http://localhost:3000/MyDocument-Module/Upload/_id='+this.state.studentId+'&teacherId='+this.state.mySubject.creatUserId+'&_docType='+'开题报告'} method="post" target="hidden-iframe">
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
        data.docName='开题报告';
        GetDocumentLine(data).then(res=>{
            if(res.length>0){
                this.state.isEdit=true;
                this.state.myDocument=res[0];
                this.state.formData.reason=res[0].reason;
                this.state.formData.keyquestion=res[0].keyquestion;
                this.state.formData.newValue=res[0].newValue;
                this.state.formData.literature=res[0].literature;
                this.state.formData.plan=res[0].plan;
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
        if(!data.reason&&data.reason==''){
            message.error('请填写选题理由及意义！');
            return;
        }
        if(!data.keyquestion&&data.keyquestion==''){
            message.error('请填写重点研究问题及解决思路！');
            return
        }
        if(!data.newValue&&data.newValue==''){
            message.error('请填写创新点及时间价值！');
            return
        }
        if(!data.literature&&data.literature==''){
            message.error('请填写完成本选题的所需条件！');
            return
        }
        if(!data.plan&&data.plan==''){
            message.error('请填写工作分析和进度计划！');
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
            data.docName='开题报告';
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
        data.docType='开题报告';
        GetDownDocument(data).then(res=>{
            if (res.length>0) {
                this.state.myDownDocument=res;
            }
            this.setState({});
        })
    }
}