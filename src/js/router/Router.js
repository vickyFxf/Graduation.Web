/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 10:30:42 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-05-08 12:47:28
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
import SubjectApproval from '../components/subject/SubjectApproval';
import SubjectChoosed from '../components/subject/SubjectChoosed';
import SubjectDetails from '../components/subject/SubjectDetails';
import ChoosedStudent from '../components/subject/ChoosedStudent';
//任务
import TaskPage from '../components/page/TaskPage';
import MySubject from '../components/task/MySubject';
import TaskBook from '../components/task/TaskBook';
import OpeningReport from '../components/task/OpeningReport';
import EnglishTranslation from '../components/task/EnglishTranslation';
import LiteratureReview from '../components/task/LiteratureReview';
import DocumentCenter from '../components/task/DocumentCenter';
import GraduationThesis from '../components/task/GraduationThesis';
import MyStudent from '../components/task/MyStudent';
import TeacherDocument from '../components/task/TeacherDocument'
import StudentDocDetails from '../components/task/StudentDocDetails'
//系统设置
import SetPage from '../components/page/SetPage';
import ClassificationMgt from '../components/set/ClassificationMgt';
import UploaderDocument from '../components/set/UploaderDocument';

import { AddUser } from '../services/usersService';
export default class Root extends React.Component {
  constructor(props){
    super(props);
    this.state={
      globalPermission:sessionStorage.getItem('permissions'),
    }
  }
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Application}>
          {
            this.state.globalPermission=='3'?
            <IndexRedirect to="userMgt"/>:<IndexRedirect to="subject"/>
          }
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
						<Route path="subjectApproval" component={SubjectApproval} />
						<Route path="subjectChoosed" component={SubjectChoosed} />
						<Route path="subjectDetails/:_id" component={SubjectDetails} />
						<Route path="choosedStudent/:_id" component={ChoosedStudent} />
					</Route>
					{/* 个人中心 */}
					<Route path="selfInfo" component={SelfPage}>
						<Route path="basicInfo" component={BasicInfo} />
						<Route path="changePwd" component={ChangePwd} />
					</Route>
					{/* 任务 */}
					<Route path="task" component={TaskPage}>
						<Route path="mySubject" component={MySubject}/>
						<Route path="TaskBook" component={TaskBook}/>
            <Route path="openingReport" component={OpeningReport}/>
						<Route path="englishTranslation" component={EnglishTranslation}/>
						<Route path="literatureReview" component={LiteratureReview}/>
            <Route path="graduationThesis" component={GraduationThesis}/>
            <Route path="documentCenter" component={DocumentCenter}/>
            <Route path="myStudent" component={MyStudent}/>
						<Route path="teacherDocument" component={TeacherDocument}/>
						<Route path="studentDocDetails/docName=:_docName&studentId=:_studentId" component={StudentDocDetails}/>
					</Route>
          {/* 系统设置 */}
					<Route path="set" component={SetPage}>
						<Route path="classificationMgt" component={ClassificationMgt} />
						<Route path="uploaderDocument" component={UploaderDocument} />
					</Route>
				</Route>
			</Router>
		)
	}
}