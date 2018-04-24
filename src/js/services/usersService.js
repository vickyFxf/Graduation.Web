/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 10:59:36 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-24 14:45:51
 */
import request from './requestWrapper';
/**
 * 获取个人详情信息
 * @param {*} data 用户学号/职工号
 */
export function GetUserInfo(data) {
  return request({
    url: '/User-Module/UserInfo/' + data.id,
    method: 'GET',
    type: 'json',
    contentType: 'application/json',
  })
}
/**
 * 修改个人基本信息
 * @param {*} data 个人信息参数
 */
export function UpdateUserInfo(data) {
  return request({
    url: '/User-Module/UpdateInfo/:id',
    method: 'PUT',
    type: 'json',
    contentType: 'application/json',
    data: JSON.stringify({
      ...data
    })
  })
}
/**
 * 删除用户
 * @param {*} data 
 */
export function DeleteUser(data) {
  return request({
    url: '/User-Module/DeleteUser/'+data.id,
    method: 'DELETE',
    type: 'json',
    contentType: 'application/json',
  })
}

/**
 * 查询用户列表
 */
export function GetUserList(data) {
  return request({
    url: '/User-Module/List',
    method: 'POST',
    type: 'json',
    contentType: 'application/json',
    data: JSON.stringify({
      // permissions:data.permissions
    })
  })
}