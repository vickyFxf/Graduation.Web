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
import { Table, Icon, Divider ,Button} from 'antd';
import {GetDocumentList,DownLoad} from '../../services/documentService.js';
export default class DocumentCenter extends React.Component {
  constructor(props){
    super(props);
    this.state={
      documentList:[],
    }
  }
  componentWillMount(){
    this.getList();
  }
  getList(){
    GetDocumentList().then(res=>{
      if(res){
        this.state.documentList=res;
      }
      this.setState({});
    })
  }
  render() {
    _.map(this.state.documentList,(item,index)=>{
      item.key=index+1;
    })
    const columns = [{
      title: '序号',
      dataIndex: 'key',
    }, {
      title: '文档名称',
      dataIndex: 'filename',
    }, {
      title: '文档下载',
      key: 'docDown',
      render: (text, record) => (
        <span>
          <Button type="dashed" shape="circle" icon="download"></Button>
        </span>
      ),
    },{
      title: '最新上传时间',
      dataIndex: 'lastDate',
    },{
      title: '模板下载',
      key: 'templateDown',
      render: (text, record) => (
        <span>
          <Button type="dashed" shape="circle" icon="download" onClick={this.downLoad.bind(this,record)}></Button>
        </span>
      ),
    }];

    return (
      <div className="margin-left-subpanel">
        <div className="list-header">
          <p>文档中心</p>
        </div>
        <Table
          columns={columns}
          dataSource={this.state.documentList}
          pagination={{
            pageSize: 10,
          }}
        />
      </div>
    );
  }
  downLoad(r){
    console.log(r);
    let data={};
    data.filename=r.filename;
    let url='http://localhost:3000/Upload-Module/DownLoad/'+data.filename;
    window.open(url);
  }
}