/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 10:29:46 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-10 18:34:52
 */
import React from 'react';
import GlobalPanel from './GlobalPanel.js'
import { Link, browserHistory } from 'react-router';
import { GetUserInfo } from '../services/usersService.js';

import { Layout, Menu, Breadcrumb, Icon, Button, Modal } from 'antd';
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
}