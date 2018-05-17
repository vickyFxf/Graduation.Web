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

//新增在线文档
export function AddDocumentLine(data) {
  return request({
    url: '/Document-Module/Add',
    method: 'POST',
    type: 'json',
    contentType: 'application/json',
    data:JSON.stringify({
      ...data
    })
  })
}
/**
 * 修改文档
 * @param {*} data data._id课题唯一id 
 */
export function UpdateDocumentLine(data) {
  return request({
    url: '/Document-Module/Update/' + data._id,
    method: 'PUT',
    type: 'json',
    contentType: 'application/json',
    data: JSON.stringify({
      ...data
    })
  })
}

/**
 * 获取我的文档
 * @param {*} data data._id课题唯一id 
 */
export function GetDocumentLine(data) {
  return request({
    url: '/Document-Module/List',
    method: 'POST',
    type: 'json',
    contentType: 'application/json',
    data: JSON.stringify({
      ...data
    })
  })
}
/**
 * 获取我的上传的任务书
 */
export function GetDownDocument(data) {
  return request({
    url: '/MyDocument-Module/List',
    method: 'POST',
    type: 'json',
    contentType: 'application/json',
    data: JSON.stringify({
      ...data
    })
  })
}
//获取教师上传的任务书文档
export function GetTeacherDownDocument(data) {
  return request({
    url: '/TeacherDocument-Module/List',
    method: 'POST',
    type: 'json',
    contentType: 'application/json',
    data: JSON.stringify({
      ...data
    })
  })
}