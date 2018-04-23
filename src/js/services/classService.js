/*
 * @Author: VickyFan 
 * @Date: 2018-04-23 10:19:53 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-23 10:41:54
 */
import request from './requestWrapper';

/**
 * 新增课题来源(类别)分类
 * @param {*} data 
 */
export function AddClass(data) {
  return request({
    url: '/Class-Module/ClassAdd/',
    method: 'POST',
    type: 'json',
    contentType: 'application/json',
    data: JSON.stringify({
      className: data.className,
      classType: data.classType,
    })
  })
}

/**
 * 删除某个分类
 * @param {*} data 
 */
export function DeleteClass(data) {
  return request({
    url: '/Class-Module/ClassDel/:_id'+data._id,
    method: 'DELETE',
    type: 'json',
    contentType: 'application/json',
  })
}

/**
 * 修改某个分类名称
 * @param {*} data
 */
export function UpdateClass(data) {
  return request({
    url: '/Class-Module/UpdateClass/:_id',
    method: 'PUT',
    type: 'json',
    contentType: 'application/json',
    data: JSON.stringify({
      ...data
    })
  })
}

/**
 * 获取分类列表
 * @param {*} data
 */
export function GetClassList(classType) {
  return request({
    url: '/Class-Module/ClassList',
    method: 'POST',
    type: 'json',
    contentType: 'application/json',
    data: JSON.stringify({
      classType:classType,
    })
  })
}

