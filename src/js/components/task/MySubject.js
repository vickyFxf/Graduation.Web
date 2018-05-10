/*
 * @Author: VickyFan 
 * @Date: 2018-05-08 12:45:28 
 * @Last Modified by:   VickyFan 
 * @Last Modified time: 2018-05-08 12:45:28 
 */
/**
 * 学生：我的课题
 */
import React from 'react';
import {GetSubListById,UpdateSubject} from '../../services/subjectService.js';
import {GetClassList} from '../../services/classService.js';
import { GetUserInfo} from '../../services/usersService.js';
export default class MySubject extends React.Component {
    static contextTypes={  
      router:React.PropTypes.object  
    } 
    constructor(props,context){
    super(props,context);
    this.context.router;
      this.state={
        mysubject:[],//课题详情
        subSourceList:[],//课题来源
        subCategoryList:[],//课题类别
        creatSubjectUser:{},
        hasSubject:false,
      }
    }
    componentWillMount(){
        this.getSubSource();
        this.getMySubject();
    }
    render() {
      let data=this.state.mysubject;
      if(data){
        switch(data.selectedBy){
          case 1:
            data.selectedBy='待同意';
            break;
          case 2:
            data.selectedBy='已同意';
            break;
          case 3:
            data.selectedBy="未同意";
            break;
        }
        _.map(data,(item1,index1)=>{
          _.map(this.state.subSourceList,(item2,index2)=>{
            if(item1==item2._id){
              data['subSource']=item2.className;
            }
          })
          _.map(this.state.subCategoryList,(item3,index3)=>{
            if(item1==item3._id){
              data['subCategory']=item3.className;
            }
          })
        })
      }
      return(
        <div className="margin-left-subpanel">
          <div className="list-header">
            <p>课题详情</p>
          </div>
          {
            this.state.hasSubject?
            <div className="table-container" id="subDetails">
                <table>
                  <caption style={{ textAlign: 'center', captionSide: 'top', padding: '0', color: '#000' }}>{data.subName}</caption>
                  <tbody>
                    <tr>
                      <td>指导教师</td><td>{data.creatUserName}</td>
                    </tr>
                    <tr>
                      <td>联系电话</td><td>{this.state.creatSubjectUser['tel']}</td>
                    </tr>
                    <tr>
                      <td>课题来源</td><td>{data.subSource}</td>
                    </tr>
                    <tr>
                      <td>课题类别</td><td>{data.subCategory}</td>
                    </tr>
                    <tr style={{ minHeight: '35px' }}>
                      <td>课题简介</td>
                      <td>{data.subIntroduction}</td>
                    </tr>
                    <tr style={{ minHeight: '35px' }}>
                      <td>申请理由</td>
                      <td>{data.applyReason}</td>
                    </tr>
                    <tr style={{ minHeight: '35px' }}>
                      <td>课题状态</td>
                      <td style={{color:data.selectedBy=='已通过'?'green':'red'}}>{data.selectedBy=="未通过"?<a onClick={this.reApply.bind(this)} style={{color:'red'}} className="hands">未通过，请重新申请课题!</a>:data.selectedBy}</td>
                    </tr>
                  </tbody>
                </table>
            </div>
            :<div className="go-mysubject">你还没有申请课题，请前往<a href="javascript:void(0)" onClick={this.goSubjectChoosed.bind(this)}>在线选题</a>申请>></div>
          }
          
        </div>
      )
    }
    //获取课题来源/获取课题类别
    getSubSource() {
      GetClassList().then(res => {
        if (res) {
          //课题来源
          let a = [];
          _.map(res, (item, index) => {
            if (item.classType == 0) {
              a.push(item);
            }
          })
          this.state.subSourceList = a;
          //课题类别
          let b = [];
          _.map(res, (item, index) => {
            if (item.classType == 1) {
              b.push(item);
            }
          })
          this.state.subCategoryList = b;
        }
        this.setState({})
      })
    }
    //获取已选课题
    getMySubject(){
      let data={};
      data.studentId=sessionStorage.getItem('id');
      GetSubListById(data).then(res=>{
        if(res.length>0){
          this.state.hasSubject=true;
          this.state.mysubject=res[0];
          let a={};
          a.id=res[0].creatUserId;
          GetUserInfo(a).then(res=>{
            if(res){
              this.state.creatSubjectUser=res[0];
            }
            this.setState({});
          })
        }
      })
    }
    //前往在线选题
    goSubjectChoosed(){
      this.context.router.push("/subject/subjectChoosed");
    }
    //重新申请课题---相当于修改课题状态
    reApply(){
      //1待同意,2已同意,3未同意
      let data={};
      data._id=this.state.mysubject['_id'];
      data.selectedBy=3;//等于3恢复为未通过，则可以重新出现在在线选题列表中，供其他人选择
      data.studentId='';
      data.studentName='';
      data.applyReason='';
      UpdateSubject(data).then(res=>{
        if(res){
          this.context.router.push("/subject/subjectChoosed");
        }
      })
    }
}