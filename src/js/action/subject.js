/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 10:24:25 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-09 10:24:58
 */
export const getListData = (data) => {
  return {
    type: 'GETLISTS',
    data
  }
}
export function getSubjectList(params) {
  return dispatch => {
    var url = 'http://localhost:3000/subject/list';
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