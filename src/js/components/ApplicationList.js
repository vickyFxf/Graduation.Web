/**
 * Created by AngelaMa on 2017/6/6.
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';;
import classnames from 'classnames';
export default class ApplicationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColorIndex: -1,
      golbalPermission:sessionStorage.getItem('permissions'),
    }
  }
  render() {
    const { items } = this.props;
    let tempItems;
    tempItems = items;
    return (
      <div className="thread-list">
        {this.renderItems(tempItems)}
      </div>
    )
  }
  renderItems(items) {
    if (items == undefined || items == "" || items == null) { return ""; }
    return items.map((item, index) => {
      return (
        <div key={index}>
            <Link to={item.link} activeClassName="active" className={classnames({ "thread-item": true, "active": this.state.bgColorIndex == index ? true : false })}>
              <div className="thread-item-avator avator">
                {this._picture(item)}
              </div>
              <div className="thread-item-info">
                <h3>{item.title}</h3>
              </div>
            </Link>
        </div>
      )
    })
  }
  _picture(e) {
    switch (e.title) {
      case "教学通知":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-tongzhi2"></i></span>
        </div>;
      case "我要发布":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-icon-test"></i></span>
        </div>;
      case "在线选题":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-xinshenqing"></i></span>
        </div>;
      case "我的课题":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-xinshenqing"></i></span>
        </div>;
      case "全部课题":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-xinshenqing"></i></span>
        </div>;
      case "待审批课题":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-xinshenqing"></i></span>
        </div>;
      case "任务书":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-jilu"></i></span>
        </div>;
      case "开题报告":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-jilu"></i></span>
        </div>;
      case "外文原文":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-jilu"></i></span>
        </div>;
      case "外文翻译":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-jilu"></i></span>
        </div>;
      case "文献综述":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-jilu"></i></span>
        </div>;
      case "中期检查":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-jilu"></i></span>
        </div>;
      case "文档中心":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-jilu"></i></span>
        </div>;
      case "基本信息":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-gerenxinxi"></i></span>
        </div>;
      case "修改密码":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-ai-password"></i></span>
        </div>;
      case "教师":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-jiaolian1"></i></span>
        </div>;
      case "学生":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-wodexuesheng"></i></span>
        </div>;
      case "管理员":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-guanliyuan_jiaoseguanli"></i></span>
        </div>;
      case "分类管理":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-baogao-copy"></i></span>
        </div>;
      case "文档管理":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-baogao-copy"></i></span>
        </div>;
      case "上传文档":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-baogao-copy"></i></span>
        </div>;
    }
  }
}
