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
          <span><i className="iconfont icon-wendangxiugai"></i></span>
        </div>;
      case "我要发布":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-wendangxiugai"></i></span>
        </div>;
      case "在线选题":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-wendangxiugai"></i></span>
        </div>;
      case "我的课题":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-buoumaotubiao25"></i></span>
        </div>;
      case "全部课题":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-buoumaotubiao25"></i></span>
        </div>;
      case "待审批课题":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-wendang2"></i></span>
        </div>;
      case "我的课题(学生)":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-buoumaotubiao25"></i></span>
        </div>;
      case "我的学生":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-wodexuesheng"></i></span>
        </div>;
      case "任务书":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-renwujihua"></i></span>
        </div>;
      case "开题报告":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-baogao"></i></span>
        </div>;
      case "外文翻译":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-fanyi-full"></i></span>
        </div>;
      case "文献综述":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-buoumaotubiao25"></i></span>
        </div>;
      case "毕业论文":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-lunwentimu"></i></span>
        </div>;
      case "文档中心":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-wendangzhongxin"></i></span>
        </div>;
      case "学生进度管理":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-wendangzhongxin"></i></span>
        </div>;
      case "基本信息":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-jibenxinxi-xiugai"></i></span>
        </div>;
      case "修改密码":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-xiugaimima"></i></span>
        </div>;
      case "教师":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-youcaijiaolianhuodongkanban"></i></span>
        </div>;
      case "学生":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-wodexuesheng"></i></span>
        </div>;
      case "管理员":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-renyuanguanli"></i></span>
        </div>;
      case "分类管理":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-fenlei"></i></span>
        </div>;
      case "文档管理":
        return <div className="thread-item-wrapper">
          <span><i className="iconfont icon-ziyuan"></i></span>
        </div>;
    }
  }
}
