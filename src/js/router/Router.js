/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 10:30:42 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-27 17:22:46
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store/index';
import { Router, Route, hashHistory, IndexRoute, browserHistory,IndexRedirect } from 'react-router';
import Application from '../components/Application';
//教学通知
import HomePage from '../components/page/HomePage';
import NoticeAdd from '../components/notices/NoticeAdd';
import NoticeList from '../components/notices/NoticeList';
import NoticeDetails from '../components/notices/NoticeDetails';
//用户管理
import UserPage from '../components/page/UserPage';
import AdminMgt from '../components/usersManagement/AdminMgt';
import TeacherMgt from '../components/usersManagement/TeacherMgt';
import StudentMgt from '../components/usersManagement/StudentMgt';
//个人中心
import SelfPage from '../components/page/SelfPage';
import BasicInfo from '../components/personalCenter/BasicInfo';
import ChangePwd from '../components/personalCenter/ChangePwd';
//课题
import SubjectPage from '../components/page/SubjectPage';
// import SubjectAll from '../components/subject/SubjectAll';
import SubjectList from '../components/subject/SubjectList';
// import SubjectAddForm from '../components/subject/SubjectAdd';
import SubjectChoosed from '../components/subject/SubjectChoosed';
import SubjectDetails from '../components/subject/SubjectDetails';
//任务
import TaskPage from '../components/page/TaskPage';
import TaskBook from '../components/task/TaskBook';
import OpeningReport from '../components/task/OpeningReport';
import ForeignLiterature from '../components/task/ForeignLiterature';
import EnglishTranslation from '../components/task/EnglishTranslation';
import LiteratureReview from '../components/task/LiteratureReview';
import MidInspection from '../components/task/MidInspection';
import DocumentCenter from '../components/task/DocumentCenter';
//系统设置
import SetPage from '../components/page/SetPage';
import ClassificationMgt from '../components/set/ClassificationMgt';
import { AddUser } from '../services/usersService';
export default class Root extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Application}>
          <IndexRedirect to="index"/>
          {/* 教学通知 */}
          <Route path="index" component={HomePage}>
            <Route path="noticeAdd" component={NoticeAdd} />
            <Route path="noticeList" component={NoticeList} />
            <Route path="noticeDetails" component={NoticeDetails} />
          </Route>
          {/* 用户管理 */}
          <Route path="userMgt" component={UserPage}>
            <Route path="adminMgt" component={AdminMgt} />
            <Route path="teacherMgt" component={TeacherMgt} />
            <Route path="studentMgt" component={StudentMgt} />
          </Route>
					{/* 课题管理 */}
					<Route path="subject" component={SubjectPage}>
						<Route path="list" component={SubjectList} />
            {/* <Route path="allList" component={SubjectAll} /> */}
						{/* <Route path="subjectAdd" component={SubjectAddForm} /> */}
						<Route path="subjectChoosed" component={SubjectChoosed} />
						<Route path="subjectDetails/123456" component={SubjectDetails} />
					</Route>
					{/* 个人中心 */}
					<Route path="selfInfo" component={SelfPage}>
						<Route path="basicInfo" component={BasicInfo} />
						<Route path="changePwd" component={ChangePwd} />
					</Route>
					{/* 任务 */}
					<Route path="task" component={TaskPage}>
						<Route path="TaskBook" component={TaskBook}/>
            <Route path="openingReport" component={OpeningReport}/>
            <Route path="foreignLiterature" component={ForeignLiterature}/>
            <Route path="englishTranslation" component={EnglishTranslation}/>
            <Route path="literatureReview" component={LiteratureReview}/>
            <Route path="midInspection" component={MidInspection}/>
            <Route path="documentCenter" component={DocumentCenter}/>
					</Route>
          {/* 系统设置 */}
					<Route path="set" component={SetPage}>
						<Route path="classificationMgt" component={ClassificationMgt} />
					</Route>
				</Route>
			</Router>
		)
	}
}