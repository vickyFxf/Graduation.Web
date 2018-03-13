/**
 * 主页面
 * Created by vicky on 2018/03/13
 */
import React from 'react';
export default class Application extends React.Component {
    render() {
        return (
            <div>
                <h3>主页面</h3>
                {this.props.children}
            </div>
        );
    }
}