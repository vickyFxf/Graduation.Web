/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 10:30:42 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-10 20:25:36
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store/index';
import { Router, Route, hashHistory, IndexRoute, browserHistory,IndexRedirect } from 'react-router';
import Application from '../components/Application';
import SubjectList from '../components/subject/SubjectList';
import SubjectAddForm from '../components/subject/SubjectAdd';
import SubjectChoosed from '../components/subject/SubjectChoosed';
import SubjectDetails from '../components/subject/SubjectDetails';
import BasicInfo from '../components/personalCenter/BasicInfo';
import ChangePwd from '../components/personalCenter/ChangePwd';

import HomePage from '../components/page/HomePage';
import UserPage from '../components/page/UserPage';
import AdminMgt from '../components/usersManagement/AdminMgt';
import TeacherMgt from '../components/usersManagement/TeacherMgt';
import StudentMgt from '../components/usersManagement/StudentMgt';

export default class Root extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Application}>
          <IndexRedirect to="index"/>
          <Route path="index" component={HomePage} />
          {/* 用户管理 */}
          <Route path="userMgt" component={UserPage}>
            <Route path="adminMgt" component={AdminMgt} />
            <Route path="teacherMgt" component={TeacherMgt} />
            <Route path="studentMgt" component={StudentMgt} />
          </Route>
          {/* 课题管理 */}
					<Route path="subject" component={SubjectList} />
					<Route path="subjectAdd" component={SubjectAddForm} />
					<Route path="subjectChoosed" component={SubjectChoosed} />
					<Route path="subjectDetails/:_id" component={SubjectDetails} />
          {/* 个人中心 */}
					<Route path="basicInfo" component={BasicInfo} />
					<Route path="changePwd" component={ChangePwd} />
				</Route>
			</Router>
		)
	}
}