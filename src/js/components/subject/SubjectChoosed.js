/**
 * 课题模块：学生选题
 * Created by vicky on 2018/03/27
 */
import React from 'react';
import { Table, Icon, Divider } from 'antd';
export default class SubjectChoosed extends React.Component {
    render() {
        const columns = [{
            title: '序号',
            dataIndex: 'sort',
          }, {
            title: '课题名称',
            dataIndex: 'subName',
          }, {
            title: '指导教师',
            dataIndex: 'teacherName',
          }];
          
          const data = [];
          for (let i = 0; i < 46; i++) {
            data.push({
              key: i,
              sort:i+1,
              subName: `毕业论文管理系统`,
              teacherName: `陈伟`,
            });
          }
        return (
            <div id="">
                <Table 
                    columns={columns} 
                    dataSource={data} 
                    pagination={{
                        pageSize:20,
                    }}
                />
            </div>
        );
    }
   
}