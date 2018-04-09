/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 10:23:50 
 * @Last Modified by:   VickyFan 
 * @Last Modified time: 2018-04-09 10:23:50 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Root from './js/router/Router';
import store from './js/store/index';

require('./styles/main.scss');
require('./styles/lib/antd.min.css');
ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>
  ,
  document.getElementById('app')
)




