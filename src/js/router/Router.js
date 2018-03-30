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
import SubjectChoosed from '../components/subject/SubjectChoosed';
import SubjectDetails from '../components/subject/SubjectDetails';
import BasicInfo from '../components/personalCenter/BasicInfo';
import ChangePwd from '../components/personalCenter/ChangePwd';


class Root extends React.Component{
    render(){
        return(
            <Router history={hashHistory}>
                <Route path="/" breadcrumbName="主页" component={Application}>
                    <Route path="student" breadcrumbName="学生列表" component={UserStudentList}/>
                    <Route path="usersadd" breadcrumbName="主页" component={UserAdd}/>
                    <Route path="subject" breadcrumbName="课题列表" component={SubjectList}/>
                    <Route path="subjectAdd" breadcrumbName="添加课题" component={SubjectAddForm}/>
                    <Route path="subjectChoosed" breadcrumbName="选择课题" component={SubjectChoosed}/>
                    <Route path="subjectDetails" breadcrumbName="课题详情" component={SubjectDetails}/>
                    <Route path="usersadd" breadcrumbName="添加用户" component={UserAdd}/>
                    <Route path="basicInfo" breadcrumbName="基本信息" component={BasicInfo}/>
                    <Route path="changePwd" breadcrumbName="修改密码" component={ChangePwd}/>
                </Route>
            </Router>
        )
    }
}
export default Root;