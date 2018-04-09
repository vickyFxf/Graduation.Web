/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 10:30:25 
 * @Last Modified by:   VickyFan 
 * @Last Modified time: 2018-04-09 10:30:25 
 */
var _ = require('lodash');
var initialState = {
  lists: {}
}
function subReducer(state = initialState, action) {
  switch (action.type) {
    case "GETLISTS":
      return Object.assign({}, state, { lists: action.data });
    default:
      return state;
  }
}
export default subReducer;