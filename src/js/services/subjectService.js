/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 10:31:19 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-09 10:59:07
 */
import request from './requestWrapper';

/**
 * 获取单个老师课题列表
 * @param {*} data data.id当前教师id
 */
export function GetSubListById(data) {
  return request({
    url: '/Subject-Module/List',
    method: 'POST',
    type: 'json',
    contentType: 'application/json',
    data: JSON.stringify({
      creatUserId: data.creatUserId,
    })
  })
}
/**
 * 新增课题
 * @param {*} data 课题相关信息
 */
export function AddSubject(data) {
  return request({
    url: '/Subject-Module/Add',
    method: 'POST',
    type: 'json',
    contentType: 'application/json',
    data: JSON.stringify({
      subName: data.subName,
      subSource: data.subSource,
      subCategory: data.subCategory,
      subIntroduction: data.subIntroduction,
      creatUserId: data.creatUserId,
      isAudit: data.isAudit,
    })
  })
}
/**
 * 获取课题基本信息
 * @param {*} data data._id课题唯一id 
 */
export function GetSubjectInfo(data) {
  return request({
    url: '/Subject-Module/Search/' + data._id,
    method: 'GET',
    type: 'json',
    contentType: 'application/json',
  })
}