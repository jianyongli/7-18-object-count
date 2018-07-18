import React from 'react';

import {NavLink} from 'react-router-dom';

import Route from '../router/route.js';

import Header from '../components/header';

export default class Tab extends React.Component{
    render(){
        return  <div className="wrap">
                    <Header/>
                    <Route routes={this.props.childrenRoutes}></Route>
                    <footer>
                        <NavLink to="/tab/index">
                            <dl>
                                <dt><i className="iconfont icon-shouye"></i></dt>
                                <dd>首页</dd>
                            </dl>
                        </NavLink>
                        <NavLink to="/tab/detail">
                            <dl>
                                <dt><i className="iconfont icon-zixun"></i></dt>
                                <dd>详情</dd>
                            </dl>
                        </NavLink>
                        <NavLink to="/tab/submit">
                            <dl>
                                <dt><i className="iconfont icon-tijiaodingdan"></i></dt>
                                <dd>提交</dd>
                            </dl>
                        </NavLink>
                        <NavLink to="/tab/balance">
                            <dl>
                                <dt><i className="iconfont icon-bianji"></i></dt>
                                <dd>结算</dd>
                            </dl>
                        </NavLink>
                    </footer>
        </div>
    }
}