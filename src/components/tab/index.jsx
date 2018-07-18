import React from 'react';
// import PropType from 'prop-types'

import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {getSingleMoneyDispatch} from '../../actions/singleMoney.js';

import {List,Flex} from 'antd-mobile';

import '../../css/common.css';
import '../../css/index.css';

import Route from '../../router/route.js';

class Index extends React.Component{
    constructor(props,router){
        super(props);
        
        this.state={
            password:'',
            userList:null
            
        }
    }

    componentDidMount(){
        this.props.getSingleMoney();
    }

    clickInput(type,value){
        this.setState({ 
            [type]:value,
          
        },()=>{
            console.log(this.state.password)
            if(this.state.password){
                this.refs.input.style.display="none";
                this.refs.user.style.display="block";
            }
        });
       
        
    }
    
    //跳转详情
    // chooseUser(userid){
    //     this.props.history.push({pathname:'/tab/detail',state:{userid}});
    // }
   
    render(){
        let {totalMoney,list} = this.props;

        return <div className="section">
            <div className="top">
                <span>{totalMoney}</span>
                <p>嗨，2210的美女们</p>
            </div>
            <div className="input-manage" >
                    <input type="password" placeholder="请输入管理员密码" 
                        value={this.state.value} 
                        ref="input"
                        onBlur={(e)=>{this.clickInput('password',e.target.value)}}/>
                    <Link to="/usermanager">
                        <span className="user" ref="user">用户管理</span>
                    </Link>
            </div>
            {/*列表信息*/}
            <div className="index-list">
                <List>
                     {
                        list && list.map((item,index)=>{
                            return <Link to={{
                                pathname:'/tab/detail',
                                state:item.userid
                            }}><List.Item key={index} extra={item.singleMoney}>{item.username}</List.Item></Link>
                        })
                    }
              </List>
            </div>
        </div>
    }
}
const mapStatetoProps=(state)=>{
    let {list,totalMoney} = state.singlemoney;
    return {list,totalMoney}
}

const mapDispatchtoProps=(dispatch)=>{
    return {
       getSingleMoney(){
           dispatch(getSingleMoneyDispatch)
       }
    }
}
Index.defaultProps={
    totalMoney:100,
    list:[{
        username:'张三',
        singleMoney:100
    }]
}
export default  connect(mapStatetoProps,mapDispatchtoProps)(Index)

