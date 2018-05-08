/*
 * @Author: VickyFan 
 * @Date: 2018-05-08 12:45:28 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-05-08 12:47:01
 */
/**
 * 教师：我的学生
 */
import React from 'react';
export default class MySubject extends React.Component {
    render() {
      return(
        <div className="margin-left-subpanel">
          <div className="list-header">
            <p>我的学生</p>
          </div>
          <div className="table-container" id="subDetails">
              <table>
                <caption style={{ textAlign: 'center', captionSide: 'top', padding: '0', color: '#000' }}>我的学生</caption>
                <tbody>
                  <tr>
                    <td>指导教师</td><td>陈伟</td>
                  </tr>
                  <tr>
                    <td>课题来源</td><td>生产活动</td>
                  </tr>
                  <tr>
                    <td>课题类别</td><td>科学研究</td>
                  </tr>
                  <tr style={{ minHeight: '35px' }}>
                    <td>课题简介</td>
                    <td>好看vnkknj没考虑快来看没离开你究竟军火库能否乱骂了。了；，1包教包会vvgvg吗没开门和vjhj发热仍然让人</td>
                  </tr>
                </tbody>
              </table>
          </div>
        </div>
      )
    }
}