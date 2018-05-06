/*
 * @Author: VickyFan 
 * @Date: 2018-04-27 11:33:13 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-27 15:42:58
 */
/**
 * 上传文档模板
 */
import React from 'react';
import { Table, Icon, Divider ,Button,Upload} from 'antd';
import reqwest from 'reqwest';
export default class UploaderDocument extends React.Component {
  render() {
    const columns = [{
      title: '序号',
      dataIndex: 'sort',
    }, {
      title: '文档名称',
      dataIndex: 'docName',
    },{
      title: '上传模版',
      key: 'templateDown',
      render: (text, record) => (
          <form encType='multipart/form-data' action="http://localhost:3000/Upload-Module/Upload" method="post" target="hidden-iframe">
            <input type="file" name="myfile"></input>
            <input type="submit" value="保存"></input>
          </form>
      ),
    }];
    const data = [{
      key: 1,
      sort: 1,
      docName: `任务书`,
    },{
      key: 2,
      sort: 2,
      docName: `开题报告`,
    },{
      key: 3,
      sort: 3,
      docName: `文献综述`,
    },{
      key: 4,
      sort: 4,
      docName: `中期检查`,
    }];
    return (
      <div className="margin-left-subpanel">
        <div className="list-header">
          <p>文档中心</p>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            pageSize: 10,
          }}
        />
      </div>
    );
  }
}