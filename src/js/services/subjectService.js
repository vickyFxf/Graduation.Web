/**
 * Created by VickyFan on 2018/3/22.
 */
import request from './requestWrapper';
//获取单个老师课题列表
export function GetSubList(data){
    return request({
        url:'/Subject-Module/List',
        method:'POST',
        type:'json',
        contentType:'application/json',
        data:{
            page:data.page,
            rows: data.rows,
            creatUserId:data.creatUserId,
        }
    })
}
//增加课题接口
export function AddSubject(data){
    return request({
        url:'/Subject-Module/Add',
        method:'POST',
        type:'json',
        contentType:'application/json',
        data:{
            subName:data.subName,
            subSource: data.subSource,
            subCategory:data.subCategory,
            subIntroduction:data.subIntroduction,
            creatUserId: data.creatUserId,
            isAudit:data.isAudit,
        }
    })
}
//查看课题详情
export function GetSubjectDetails(data){
    return request({
        url:'/Subject-Module/Search/',
        method:'GET',
        type:'json',
        contentType:'application/json',
        data:{
            _id:data._id,
        }
    })
}