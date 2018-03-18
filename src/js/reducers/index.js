/**
 * Created by VickyFan on 2018/3/15.
 */
import {combineReducers} from 'redux';
import subReducer from './subject';

import {routerReducer} from 'react-router-redux' // 将routerReducer一起和普通reducer进行合并操作

export default combineReducers({
    subReducer,
    routing: routerReducer
})