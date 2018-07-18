import React from 'react';

import {Link} from 'react-router-dom';

export default class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div>
            <header>
                    <Link to={{
                        pathname:'/tab/index',
                        
                    }}><span><i className="iconfont icon-angle-left"></i></span></Link>
                    <span>用户管理</span>
                    <span onClick={()=>{this.props.showOrHide(true)}}><i className="iconfont icon-tianjia"></i></span>
            </header>
        </div>
    }
}