/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 10:30:42 
 * @Last Modified by:   VickyFan 
 * @Last Modified time: 2018-04-09 10:30:42 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store/index';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';
import Application from '../components/Application';
import UserStudentList from '../components/users/UserStudentList';
import UserAdd from '../components/users/UserAdd';
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
					<Route path="student" component={UserStudentList} />
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