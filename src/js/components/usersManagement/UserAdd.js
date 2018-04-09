/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 10:29:21 
 * @Last Modified by:   VickyFan 
 * @Last Modified time: 2018-04-09 10:29:21 
 */
import React from 'react';
import { Select } from 'antd';
export default class UserAdd extends React.Component {
  render() {
    const Option = Select.Option;
    return (
      <div>
        增加用户
                <Select placeholder="请选择年份">
          <Option value="">无</Option>
          <Option value="2018">2018年</Option>
          <Option value="2017">2017年</Option>
          <Option value="2016">2016年</Option>
          <Option value="2015">2015年</Option>
        </Select>
      </div>
    );
  }
}