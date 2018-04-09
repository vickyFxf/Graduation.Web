/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 10:30:42 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-09 16:52:36
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store/index';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';
import Application from '../components/Application';
import StudentMgt from '../components/usersManagement/studentMgt';
import TeacherMgt from '../components/usersManagement/teacherMgt';
import AdminMgt from '../components/usersManagement/adminMgt';
import UserAdd from '../components/usersManagement/UserAdd';
import SubjectList from '../components/subject/SubjectList';
import SubjectAddForm from '../components/subject/SubjectAdd';
import SubjectChoosed from '../components/subject/SubjectChoosed';
import SubjectDetails from '../components/subject/SubjectDetails';
import BasicInfo from '../components/personalCenter/BasicInfo';
import ChangePwd from '../components/personalCenter/ChangePwd';
export default class Root extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Application}>
					<Route path="studentMgt" component={StudentMgt} />
          <Route path="teacherMgt" component={TeacherMgt} />
          <Route path="adminMgt" component={AdminMgt} />
					<Route path="usersadd" component={UserAdd} />
					<Route path="subject" component={SubjectList} />
					<Route path="subjectAdd" component={SubjectAddForm} />
					<Route path="subjectChoosed" component={SubjectChoosed} />
					<Route path="subjectDetails/:_id" component={SubjectDetails} />
					<Route path="usersadd" component={UserAdd} />
					<Route path="basicInfo" component={BasicInfo} />
					<Route path="changePwd" component={ChangePwd} />
				</Route>
			</Router>
		)
	}
}