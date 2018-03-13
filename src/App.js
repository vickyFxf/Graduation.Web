import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import Root from './js/router/Router';

require('./styles/main.scss');
ReactDOM.render(
	<Root/>
	,
	document.getElementById('app')
)




