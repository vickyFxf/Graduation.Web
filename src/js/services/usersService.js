/**
 * Created by VickyFan on 2018/3/27.
 */
import request from './requestWrapper';
//获取个人信息
export function GetUserInfo(data){
    return request({
        url:'/User-Module/UserInfo/:id',
        method:'GET',
        type:'json',
        contentType:'application/json',
        data:{
            id:data.id
        }
    })
}
//修改个人信息
export function UpdateUserInfo(data){
    return request({
        url:'/User-Module/UpdateInfo/:id',
        method:'PUT',
        type:'json',
        contentType:'application/json',
        data:JSON.stringify({
            ...data
        })
    })
}