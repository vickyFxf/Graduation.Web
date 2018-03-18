/**
 * 课题逻辑接口
 * Created by VickyFan on 2018/3/18.
 */
export const getListData=(data)=>{
    return {
        type:'GETLISTS',
        data
    }
}

export function getSubjectList(params){
    return dispatch=>{
        var url = 'http://localhost:3000/subject/list';
        return fetch(url,{
            method:'POST',
            header: {'content-type':'application/json'},
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body:params
        })
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            dispatch(getListData(data))
        })
    }
}