/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 11:01:38 
 * @Last Modified by:   VickyFan 
 * @Last Modified time: 2018-04-09 11:01:38 
 */
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/index';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));
export default store;