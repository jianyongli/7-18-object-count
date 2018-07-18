import  React from 'react';
import '../icon/iconfont.css';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch,
    Redirect
} from 'react-router-dom';

import Header from '../components/header.jsx';

import Index from '../components/tab/index.jsx';
import Detail from '../components/tab/detail.jsx';
import Submit from '../components/tab/submit.jsx';
import Balance from '../components/tab/balance.jsx';


export default ()=>{
    return <Router>
        <div className="wrap">
            <Header/>
            <Switch>
                <Route exact path="/" render={()=>{
                    return <Redirect to="/index"></Redirect>
                }}></Route>
                <Route path="/index" component={Index}></Route>
                <Route path="/detail" component={Detail}></Route>
                <Route path="/submit" component={Submit}></Route>
                <Route path="/balance" component={Balance}></Route>
            </Switch>

             <footer>
                 <NavLink to="/index">
                       <dl>
                           <dt><i className="iconfont icon-shouye"></i></dt>
                           <dd>首页</dd>
                       </dl>
                 </NavLink>
                 <NavLink to="/detail">
                       <dl>
                           <dt><i className="iconfont icon-zixun"></i></dt>
                           <dd>详情</dd>
                       </dl>
                 </NavLink>
                 <NavLink to="/submit">
                       <dl>
                           <dt><i className="iconfont icon-tijiaodingdan"></i></dt>
                           <dd>提交</dd>
                       </dl>
                 </NavLink>
                 <NavLink to="/balance">
                       <dl>
                           <dt><i className="iconfont icon-bianji"></i></dt>
                           <dd>结算</dd>
                       </dl>
                 </NavLink>
             </footer>
        </div>
    </Router>
}