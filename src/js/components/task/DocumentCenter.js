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
export default class DocumentCenter extends React.Component {
  render() {
    const columns = [{
      title: '序号',
      dataIndex: 'sort',
    }, {
      title: '文档名称',
      dataIndex: 'docName',
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
          <Button type="dashed" shape="circle" icon="download"></Button>
        </span>
      ),
    }];
    const data = [{
      key: 1,
      sort: 1,
      docName: `任务书`,
      lastDate: `2018-04-30`,
    },{
      key: 2,
      sort: 2,
      docName: `开题报告`,
      lastDate: `2018-04-30`,
    },{
      key: 3,
      sort: 3,
      docName: `文献综述`,
      lastDate: `2018-04-30`,
    },{
      key: 4,
      sort: 4,
      docName: `中期检查`,
      lastDate: `2018-04-30`,
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