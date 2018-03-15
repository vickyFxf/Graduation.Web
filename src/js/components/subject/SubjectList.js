/**
 * 课题模块：课题列表
 * Created by vicky on 2018/03/15
 */
import React from 'react';
import {Icon,Button,Input,Table, Divider} from 'antd';
export default class SubjectList extends React.Component {
    render() {
        const Search = Input.Search;
        const columns = [{
            title: '课题名称',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="#">{text}</a>,
          }, {
            title: '来源',
            dataIndex: 'subSource',
            key: 'subSource',
          }, {
            title: '类别',
            dataIndex: 'subCategory',
            key: 'subCategory',
          },{
            title: '创建时间',
            dataIndex: 'subTime',
            key: 'subTime',
          },{
            title: '是否审核',
            dataIndex: 'isAudit',
            key: 'isAudit',
          },{
            title: '操作',
            key: 'action',
            render: (text, record) => (
              <span>
                <a href="#">查看</a>
                <Divider type="vertical" />
                <a href="#">删除</a>
              </span>
            ),
          }];
        const data = [{
            key: '1',
            name: '人力资源管理系统设计与实现',
            subSource:'B=结合生产实际',
            subCategory:'C=工程设计',
            subTime:'2017-09-04 12:56',
            isAudit:'未审核'
          }, {
            key: '2',
            name: '多层架构下药库系统的设计',
            subSource:'B=结合生产实际',
            subCategory:'C=工程设计',
            subTime:'2017-09-04 09:34',
            isAudit:'已通过'
          }, {
            key: '3',
            name: '毕业论文管理系统',
            subSource:'B=结合生产实际',
            subCategory:'C=工程设计',
            subTime:'2017-09-05 08:34',
            isAudit:'未审核'
          }, {
            key: '4',
            name: '毕业论文管理系统',
            subSource:'B=结合生产实际',
            subCategory:'C=工程设计',
            subTime:'2017-09-05 08:34',
            isAudit:'未审核'
          }, {
            key: '5',
            name: '毕业论文管理系统',
            subSource:'B=结合生产实际',
            subCategory:'C=工程设计',
            subTime:'2017-09-05 08:34',
            isAudit:'未审核'
          }];
        // rowSelection object indicates the need for row selection
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
            }),
        };
        return (
            <div id="subjectList">
                <Button><Icon type="plus-circle" style={{ fontSize: 18, color: '#32CD32' }} />添加</Button>
                <Button><Icon type="edit" style={{ fontSize: 18, color: '#FFA500' }} />修改</Button>
                <Button><Icon type="close-circle" style={{ fontSize: 18, color: '#FF0000' }} />删除</Button>
                <Search
                placeholder="请输入关键字"
                onSearch={value => console.log(value)}
                enterButton
                />
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
            </div>
        );
    }
}