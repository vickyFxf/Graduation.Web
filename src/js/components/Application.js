/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 10:29:46 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-25 11:46:33
 */
import React from 'react';
import GlobalPanel from './GlobalPanel.js'
import { Link, browserHistory } from 'react-router';
import { GetUserInfo } from '../services/usersService.js';

import { Layout, Menu, Breadcrumb, Icon, Button,message } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
export default class Application extends React.Component {
  constructor(props){
    super(props);
    this.state={
      slideWidth:80
    }
  }
  componentWillMount(){
    this.willChangePwd();
    this.isLogIn();
    if (window.innerWidth > 1440) {
      this.setState({
        slideWidth:100
      })
    }
  }
  render() {
    return (
      <Layout>
        <Layout>
          <Sider width={this.state.slideWidth} style={{ background: '#fff', height: '100vh', }}>
            <GlobalPanel/>
          </Sider>
          <Layout>
              {this.props.children}
          </Layout>
        </Layout>
      </Layout>
    )
  }
  willChangePwd(){
    let data = {};
    data.id = sessionStorage.getItem('id');
    GetUserInfo(data).then(res => {
      let mdPwd = hex_md5('123456');
      if (res[0].password == mdPwd) {
        message.warning('初次登录，请前往个人中心修改默认密码',8);
      } 
    })
  }
  //判断是否有用户登录，无则跳转至登录页
  isLogIn(){
    let id=sessionStorage.getItem('id');
    if(id){
      console.log('有用户登录');
    }else{
      window.location.href = 'http://localhost:4000/login.html';
    }
  }
}