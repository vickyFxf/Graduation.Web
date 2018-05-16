/*
 * @Author: VickyFan 
 * @Date: 2018-04-27 11:33:13 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-27 15:42:58
 */
/**
 * 文档中心
 */
import React from 'react';
import { Table, Icon, Divider ,Button,Tabs} from 'antd';
import {GetDocumentList,DownLoad,GetDownDocument} from '../../services/documentService.js';
import moment from 'moment';
const TabPane = Tabs.TabPane;
export default class DocumentCenter extends React.Component {
  constructor(props){
    super(props);
    this.state={
      documentList:[],
      myDownDocument:[],
    }
  }
  componentWillMount(){
    this.getList();
    this.myAllDownDocument();
  }
 
  render() {
    _.map(this.state.documentList,(item,index)=>{
      item.key=index+1;
      item.date=moment(item.date).format('YYYY-MM-DD HH:mm:ss');
    });
    _.map(this.state.myDownDocument,(item,index)=>{
      item.key=index+1;
      item.date=moment(item.date).format('YYYY-MM-DD HH:mm:ss');
    })
    const columns1 = [{
      title: '序号',
      dataIndex: 'key',
    }, {
      title: '文档名称',
      dataIndex: 'filename',
    },{
      title: '上传时间',
      dataIndex: 'date',
    },{
      title: '模板下载',
      key: 'templateDown',
      render: (text, record) => (
        <span>
          <Button type="dashed" shape="circle" icon="download" onClick={this.downLoad.bind(this,record)}></Button>
        </span>
      ),
    }];
    const columns2 = [{
      title: '序号',
      dataIndex: 'key',
    }, {
      title: '文档类型',
      dataIndex: 'docType',
    }, {
      title: '文档名称',
      dataIndex: 'filename',
    },{
      title: '上传时间',
      dataIndex: 'date',
    },{
      title: '下载文档',
      key: 'templateDown',
      render: (text, record) => (
        <span>
          <Button type="dashed" shape="circle" icon="download" onClick={this.downMyLoad.bind(this,record)}></Button>
        </span>
      ),
    }];
    return (
      <div className="margin-left-subpanel">
        <div className="list-header">
          <p>文档中心</p>
        </div>
        <Tabs type="card">
          <TabPane tab="文档模版" key="0">
            <Table
              columns={columns1}
              dataSource={this.state.documentList}
              pagination={{
                pageSize: 10,
              }}
            />
          </TabPane>
          <TabPane tab="个人模版" key="1">
            <Table
              columns={columns2}
              dataSource={this.state.myDownDocument}
              pagination={{
                pageSize: 10,
              }}
            />
          </TabPane>
        </Tabs>
        
      </div>
    );
  }
  //获取文档模版
  getList(){
    GetDocumentList().then(res=>{
      if(res){
        this.state.documentList=res;
      }
      this.setState({});
    })
  }
  //获取所有上传的文档
  myAllDownDocument(){
    let data={};
    data.studentId=sessionStorage.getItem('id');
    GetDownDocument(data).then(res=>{
        if (res.length>0) {
            this.state.myDownDocument=res;
        }
        this.setState({});
    })
  }
  //下载文档模版
  downLoad(r){
    let data={};
    data.filename=r.filename;
    let url='http://localhost:3000/Upload-Module/DownLoad/'+data.filename;
    window.open(url);
  }
  //下载我的上传文档
  downMyLoad(r){
    let data={};
    data.filename=r.filename;
    let url='http://localhost:3000/MyDocument-Module/DownLoad/'+data.filename;
    window.open(url);
  }
}