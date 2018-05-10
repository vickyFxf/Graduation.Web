/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 10:28:13 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-27 17:58:48
 */
import React from 'react';
import { Table, Icon, Divider } from 'antd';
import { Link } from 'react-router';
import { GetSubListById} from '../../services/subjectService.js';
export default class SubjectChoosed extends React.Component {
  static contextTypes={  
    router:React.PropTypes.object  
  } 
  constructor(props,context){
    super(props,context);
    this.context.router;
    this.state={
      chooseList:[],
      isSelected:false,//默认没有申请过课题
    }
  }
  componentWillMount(){
    this.isSelected();
  }
  render() {
    _.map(this.state.chooseList,(item1,index1)=>{
      item1.key=index1+1;
    })
    const columns = [{
      title: '序号',
      dataIndex: 'key',
      key: 'key',
    }, {
      title: '课题名称',
      dataIndex: 'subName',
      key: 'subName',
    }, {
      title: '指导教师',
      dataIndex: 'creatUserName',
      key: 'creatUserName',
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          {
            (!record.selectedBy||record.selectedBy==3)?<Link to={'subject/subjectDetails/'+record._id}>申请</Link>:"已被申请"
          }
        </span>
      ),
    }];
    return (
      <div className="margin-left-subpanel">
        <div className="list-header">
          <p>在线选题</p>
        </div>
        {
          this.state.isSelected?
          <div className="go-mysubject">你已经申请过课题，请前往<a href="javascript:void(0)" onClick={this.goMySubject.bind(this)}>任务</a>查看>></div>
          :<Table
          columns={columns}
          dataSource={this.state.chooseList}
          pagination={{
            pageSize: 10,
          }}
        />
        }
      </div>
    );
  }
  //获取课题列表
  getChooseList() {
    let data={};
    data.isAudit=2;
    GetSubListById(data).then(res => {
      if (res) {
        this.state.chooseList = res;
      }
      this.setState({});
    })
  }
  //获取当前是否已经申请过课题
  isSelected(){
    let data = {};
    data.studentId=sessionStorage.getItem('id');
    GetSubListById(data).then(res => {
      if (res.length>0) {
        this.state.isSelected=true;
      }else{
        this.getChooseList();
      }
      this.setState({});
    })
  }
  //前往任务--我的课题(学生)
  goMySubject(){
    this.context.router.push("/task/mySubject");
  }
}
