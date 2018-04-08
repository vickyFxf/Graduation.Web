/**
 * 主页面
 * Created by vicky on 2018/03/13
 */
import React from 'react';
import { Link, browserHistory } from 'react-router';
import { GetUserInfo } from '../services/usersService.js';
import { Layout, Menu, Breadcrumb, Icon, Button, Modal } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

export default class Application extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: sessionStorage.getItem('id'),
			userName: sessionStorage.getItem('userName'),
			permissions: sessionStorage.getItem('permissions'),
			isFirst: true,
		}
	}
	componentWillMount() {

	}
	componentDidMount() {
		const tips = '初次登录，请先修改默认密码！';
		const path = `#/changePwd?_k=4aeonu`;
		this.isFirstLogin();
		if (this.state.isFirst) {
			Modal.warning({
				title: '警告！',
				content: tips,
				onOk: () => {
					browserHistory.push(path);
				}
			})
		}
	}
	render() {
		return (
			<Layout>
				<Header style={{ height: '10vh', }}>
					<img src="/src/img/logo.gif" className="logo left" />
					<div className="left title">温州医科大学毕业论文管理平台</div>
					<div className="right">
						<ul>
							<li className='currentInfo'>欢迎您
								<span>{this.state.id}</span>
								<span>{this.state.userName}</span>|
								<span onClick={this.logout.bind(this)} className="logout">退出</span>
							</li>
						</ul>
					</div>
				</Header>
				<Layout>
					<Sider width={200} style={{ background: '#fff', height: '90vh', }}>
						<Menu
							mode="inline"
							defaultSelectedKeys={['1']}
							defaultOpenKeys={['sub1']}
							style={{ height: '100%', borderRight: 0 }}
						>
							<SubMenu key="sub1" title={<span><Icon type="notification" />通知/通告</span>}>
								<Menu.Item key="1">最新消息</Menu.Item>
								<Menu.Item key="2">所有通告</Menu.Item>
							</SubMenu>
							{this.state.permissions == "3" ?
								<SubMenu key="sub2" title={<span><Icon type="team" />用户管理</span>}>
									<Menu.Item key="3">管理员</Menu.Item>
									<Menu.Item key="4">教师</Menu.Item>
									<Menu.Item key="5"><Link to="student">学生</Link></Menu.Item>
								</SubMenu>
								: ""}
							{this.state.permissions == "3" || this.state.permissions == "2" ?
								<SubMenu key="sub4" title={<span><Icon type="appstore-o" />分类管理</span>}>
									{this.state.permissions == "3" ?
										<Menu.Item key="10">新闻分类</Menu.Item>
										: ""}
									{this.state.permissions == "2" ?
										<Menu.Item key="11">课题类型</Menu.Item>
										: ""}
									{this.state.permissions == "2" ?
										<Menu.Item key="12">课题来源</Menu.Item>
										: ""}
								</SubMenu>
								: ""}
							{this.state.permissions == "1" || this.state.permissions == "2" ?
								<SubMenu key="sub5" title={<span><Icon type="schedule" />课题管理</span>}>
									<Menu.Item key="13"><Link to="subject">所有课题</Link></Menu.Item>
									<Menu.Item key="19"><Link to="subject">被选课题</Link></Menu.Item>
									{this.state.permissions == "2" ?
										<Menu.Item key="14">待审批课题</Menu.Item>
										: ""}
								</SubMenu>
								: ""}
							{this.state.permissions == "0" ?
								<SubMenu key="sub6" title={<span><Icon type="schedule" />学生</span>}>
									<Menu.Item key="15"><Link to="subjectChoosed">我要选题</Link></Menu.Item>
									<Menu.Item key="16">任务</Menu.Item>
								</SubMenu>
								: ""}
							<SubMenu key="sub7" title={<span><Icon type="user" />个人中心</span>}>
								<Menu.Item key="17"><Link to="basicInfo">基本信息</Link></Menu.Item>
								<Menu.Item key="18"><Link to="changePwd">个人修改密码</Link></Menu.Item>
							</SubMenu>
						</Menu>
					</Sider>
					<Layout style={{ padding: '0 24px' }}>
						{/* <Breadcrumb style={{ margin: '16px 0' }} routes={props.routes} params={props.params}/> */}
						<Content style={{ background: '#fff', padding: 4, margin: 0, minHeight: 280 }}>
							{this.props.children}
						</Content>
						<Footer>
							<p>Copyright © 2017-2018 1406010039范秀芳毕业设计  浙ICP备xxxxxxxx号</p>
						</Footer>
					</Layout>
				</Layout>
			</Layout>
		)
	}
	//查看是否是初次登录
	isFirstLogin() {
		let data = {};
		data.id = this.state.id;
		GetUserInfo(data).then(res => {
			let mdPwd = hex_md5('123456');
			if (res.password == mdPwd) {
				this.state.isFirst = true;
			} else {
				this.state.isFirst = false;
			}
			this.setState({});
		})
	}
	logout() {
		const tips = '退出前，请先修改默认密码';
		if (this.state.isFirst) {
			Modal.warning({
				title: '警告！',
				content: tips,
				onOk: () => {
					window.location.href = '';
				}
			})
		} else {
			window.location.href = 'http://localhost:4000/login.html';
		}
	}
}