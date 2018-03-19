/**
 * 课题模块：课题列表
 * Created by vicky on 2018/03/15
 */
import React from 'react';
import {Icon,Button,Input,Table, Divider} from 'antd';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {getSubjectList} from '../../action/subject';

export default class SubjectList extends React.Component {
    componentWillMount(){
        this.props.getSubjectList();
    }
    render() {
        const Search = Input.Search;
        const {lists,getSubjectList} = this.props;
        console.log(lists);
        // var showData = [];
        // var list=lists.rows;

        // var leftNewsDate=[];
        // var vm = this;
        // function search(){
        //     const params="title="+vm.refs.searchValue.value;
        //     vm.props.getSubjectList(params);
        //     leftNewsDate=[];
        // }
        
        const columns = [{
            title: '课题名称',
            dataIndex: 'subName',
            key: 'subName',
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
                <a href="#">修改</a>
                <Divider type="vertical" />
                <a href="#">删除</a>
              </span>
            ),
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
                <Button><Icon type="plus-circle" style={{ fontSize: 18, color: '#32CD32' }} /><Link to="subjectAdd">添加</Link></Button>
                <Button><Icon type="close-circle" style={{ fontSize: 18, color: '#FF0000' }} />删除</Button>
                <Search
                placeholder="请输入关键字"
                onSearch={value => console.log(value)}
                enterButton
                />
                {lists?
                <Table rowSelection={rowSelection} columns={columns} dataSource={lists} />:"没有数据！"
               }
                
            </div>
        );
    }
}
const getValue = (state)=>{
    return {
      lists:state.subReducer.lists
    }
}
const SubContext = connect(getValue,{getSubjectList})(SubjectList)
module.exports = SubContext;