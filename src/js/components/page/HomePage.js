/*
 * @Author: VickyFan 
 * @Date: 2018-04-19 15:12:20 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-19 15:12:58
 */
/**
 * 通知页(主页)
 */
import React from 'react';
import PubSub from 'pubsub-js';
import ApplicationList from '../ApplicationList';
import BlankArea from '../../components/common/BlankArea.js';
export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let items;
        items = [{avator: "", id: 10001, title: '教学通知', link: '/index/noticeList', info: ''},
        {avator: "", id: 10002, title: '我要发布', link: '/index/noticeAdd', info: ''}];
        return (
            <div className="page-container clear">
                <div className="sub-panel">
                    <div className="sub-panel-content">
                        <ApplicationList items={items}/>
                    </div>
                </div>
                {this.props.children == undefined ?
                    <div className="global-detail-area">
                        <BlankArea/>
                    </div> : this.props.children}
            </div>
        );
    }
}