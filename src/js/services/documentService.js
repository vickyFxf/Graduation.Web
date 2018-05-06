import request from './requestWrapper';

/**
 * 获取文档模板
 * @param {*} data 
 */
export function GetDocumentList(data) {
  return request({
    url: '/Upload-Module/DocumentList',
    method: 'GET',
    type: 'json',
    contentType: 'application/json',
  })
}
//下载模板
export function DownLoad(data) {
  return request({
    url: '/Upload-Module/DownLoad/'+data.filename,
    method: 'GET',
    type: 'json',
    contentType: 'application/json',
  })
}