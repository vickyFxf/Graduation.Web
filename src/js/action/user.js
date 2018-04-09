/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 10:25:32 
 * @Last Modified by:   VickyFan 
 * @Last Modified time: 2018-04-09 10:25:32 
 */
export const getListData = (data) => {
  return {
    type: 'GETLISTS',
    data
  }
}
export function fetchList(params) {
  return dispatch => {
    var url = 'http://localhost:3000/user/list';
    return fetch(url, {
      method: 'POST',
      header: { 'content-type': 'application/json' },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params
    })
      .then(res => {
        return res.json()
      })
      .then(data => {
        dispatch(getListData(data))
      })
  }
}