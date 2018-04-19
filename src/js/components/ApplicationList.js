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
      toggleIndex: -1,
      bgColorIndex: -1,
      childIndex: -1,
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
          {

            item.childItem && item.childItem.length > 0 ? <span onClick={this.toggle.bind(this, index, -1, item)} key={index} className={classnames({ "thread-item": true, "active": this.state.bgColorIndex == index ? true : false })}>
              {/*字体图标*/}
              <div className="thread-item-avator avator">
                {this._picture(item)}
              </div>
              <div className="thread-item-info">
                <h3>{item.title}</h3>
              </div>
            </span> : <Link to={item.link} activeClassName="active" onClick={this.toggle.bind(this, index, item)} className={classnames({ "thread-item": true, "active": this.state.bgColorIndex == index ? true : false })}>
                <div className="thread-item-avator avator">
                  {this._picture(item)}
                </div>
                <div className="thread-item-info">
                  <h3>{item.title}</h3>
                </div>
              </Link>
          }

          {
            item.childItem && item.childItem.length > 0 && <div className={classnames({ "thread-item-child": true, "hide": item.collapse })}>
              {
                _.map(item.childItem, (t, i) => {
                  if (t.link) {
                    return <Link key={i} className={classnames({ "active": this.state.childIndex == i ? true : false })} onClick={this.toggle.bind(this, index, i, t)} to={t.link}>
                      {t.title}
                    </Link>
                  } else {
                    return <a key={i} className={classnames({ "active": this.state.childIndex == i ? true : false })} onClick={this.toggle.bind(this, index, i, t)}>
                      {t.title}
                    </a>
                  }
                })
              }
            </div>
          }
        </div>
      )
    })
  }
  toggle(index, sIndex, item, e) {
    if (item.callback) {
      item.callback();
    }
    if (this.state.toggleIndex === index) {
      this.state.toggleIndex = -1;
    } else {
      this.state.toggleIndex = index;
    }
    this.state.bgColorIndex = index;
    this.state.childIndex = sIndex;//sIndex等于当前点击的子孩子的index,来添加active
    this.props.onClickNav && this.props.onClickNav(item);//打开或关闭折叠
    this.setState({});
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
    }
  }
}