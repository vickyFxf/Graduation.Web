import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store/index';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';

import Application from '../components/Application';
import UserListData from '../components/users/UserListData';
import UserAdd from '../components/users/UserAdd';

class Root extends React.Component{
    render(){
        return(
            <Router history={hashHistory}>
                <Route path="/" component={Application}>
                    <Route path="users" component={UserListData}/>
                    <Route path="usersadd" component={UserAdd}/>
                </Route>
            </Router>
        )
    }
}
export default Root;