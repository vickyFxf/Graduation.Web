/**
 * 主页面
 * Created by vicky on 2018/03/13
 */
import React from 'react';
import {Link} from 'react-router';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider,Footer } = Layout;
export default class Application extends React.Component {
    render() {
        return (
            <Layout>
                <Header style={{ height: '10vh', }}>
                    <img src="/src/img/logo.gif" className="logo left"/>
                    <div className="left title">温州医科大学毕业论文管理平台</div>
                    <div className="right">
                        <ul>
                            <li>欢迎您&nbsp;1406010039范秀芳</li>
                            <li><a href="javascript:void(0)">退出</a></li>
                        </ul>
                    </div>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff',height: '90vh', }}>
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
                            <SubMenu key="sub2" title={<span><Icon type="user" />用户管理</span>}>
                                <Menu.Item key="5">管理员</Menu.Item>
                                <Menu.Item key="6">教师</Menu.Item>
                                <Menu.Item key="7">学生</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="laptop" />分类管理</span>}>
                                <Menu.Item key="9">option9</Menu.Item>
                                <Menu.Item key="10">option10</Menu.Item>
                                <Menu.Item key="11">option11</Menu.Item>
                                <Menu.Item key="12">option12</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub4" title={<span><Icon type="laptop" /><Link to="subject">我的课题</Link></span>}>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>位置：用户管理</Breadcrumb.Item>
                        <Breadcrumb.Item>管理员</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
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
}