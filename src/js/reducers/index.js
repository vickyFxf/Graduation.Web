/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 10:30:10 
 * @Last Modified by:   VickyFan 
 * @Last Modified time: 2018-04-09 10:30:10 
 */
import { combineReducers } from 'redux';
import subReducer from './subject';
import { routerReducer } from 'react-router-redux' // 将routerReducer一起和普通reducer进行合并操作
export default combineReducers({
  subReducer,
  routing: routerReducer
})