import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store/index';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';

import Application from '../components/Application';
import UserStudentList from '../components/users/UserStudentList';
import UserAdd from '../components/users/UserAdd';
import SubjectList from '../components/subject/SubjectList';
import SubjectAddForm from '../components/subject/SubjectAdd';

class Root extends React.Component{
    render(){
        return(
            <Router history={hashHistory}>
                <Route path="/" component={Application}>
                    <Route path="student" component={UserStudentList}/>
                    <Route path="usersadd" component={UserAdd}/>
                    <Route path="subject" component={SubjectList}/>
                    <Route path="subjectAdd" component={SubjectAddForm}/>
                </Route>
            </Router>
        )
    }
}
export default Root;