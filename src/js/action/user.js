/**
 * Created by VickyFan on 2018/3/15.
 */
export const getListData=(data)=>{
    return {
        type:'GETLISTS',
        data
    }
}

export function fetchList(params){
    return dispatch=>{
        var url = 'http://localhost:3000/user/list';
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