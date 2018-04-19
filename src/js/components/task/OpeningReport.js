/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 10:28:51 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-19 14:47:48
 */
/**
 * 开题报告
 */
import React from 'react';
import { Upload, message, Button, Icon } from 'antd';
const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
export default class OpeningReport extends React.Component {
  render(){
    return(
      <Upload {...props}>
        <Button>
          <Icon type="upload" />上传文件
        </Button>
      </Upload>
    )
  }
}