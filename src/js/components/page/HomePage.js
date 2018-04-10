import React from 'react';
import PubSub from 'pubsub-js';
// import {CHANGEPAGES} from '../../constants/launchr.js';
import ApplicationList from '../ApplicationList';
import BlankArea from '../../components/common/BlankArea.js';
export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // PubSub.publish(CHANGEPAGES, window.location.href);
    }

    render() {
        let items;
        items = [{avator: "", id: 10000, title: '通知子模块', link: '/subjectAdd', info: ''}];
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