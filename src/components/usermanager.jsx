import React from 'react';

import {Link} from "react-router-dom";

// import { Modal, List,Flex,Icon,InputItem, Button, WhiteSpace, WingBlank,Toast } from 'antd-mobile';
import {Modal} from 'antd-mobile';

import {connect} from 'react-redux';

import {getAllUserDispatch,submitUserDispatch,USERMANGER_ISADD,USERMANGER_ISDEL} from '../actions/userManger.js';

import Header from './usermanager/header';
import UserList from './usermanager/userList';
import UserInfo from './usermanager/userInfo';
import AmendInfo from './usermanager/amendInfo';

import '../icon/iconfont.css';
import '../css/common.css';
import '../css/usermanager.css';


class Usermanager extends React.Component{
    constructor(props){
        super(props);
        this.onOk=this.onOk.bind(this);
        this.onCancel=this.onCancel.bind(this);
        this.footer=[
            {
                text: '取消', 
                onPress: () => {this.onCancel()}
            },{
                text: '确定', 
                onPress: () => {this.onOk()}
            }
        ]
        
        this.state={
           visible:false,//显示隐藏
           //用户信息
           userid:'',
           username:'',
           moneybase:'',
           //修改时的信息
           amendVisible:false,
           amendUserid:'',
           amendUsername:'',

        }
    }
    //确定的回调
    onOk(){
        let {userid,username,moneybase} = this.state;
        this.showOrHide(false);
        this.props.addUser({userid,username,moneybase})//点击确定时，添加用户信息

    }
    //取消的回调
    onCancel(){
        this.showOrHide(false);
        this.setState({userid:'',username:'',moneybase:''})//点击取消时，，input框清空
    }
    //控制显示和隐藏
    showOrHide(flag){
        this.setState({
            visible:flag
        })
    }

    //显示修改用户的弹框
    amendShow(amendUserid,amendUsername){
        let amendVisible= true;
        this.setState({amendUserid,amendUsername,amendVisible})
    }
    //修改id
    amendChangeUserid(amendUserid){
        this.setState({amendUserid})
    }
    //修改name
    amendChangeUsername(amendUsername){
        this.setState({amendUsername});
    }
    //关闭
    amendCloseModal(){
        this.setState({amendVisible:false})
    }

    componentDidMount(){
        this.props.getAllUser();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.isAdd===true){
            //添加成功是，，点击确定，，清空input框 
           this.setState({userid:'',username:'',moneybase:''})
           Modal.alert('提示','添加成功',[{text:'确定',onPress:()=>{
               this.props.resetIsAdd(null)
           }}])
        }else if(nextProps.isAdd===false){
           this.setState({userid:'',username:'',moneybase:''})
           Modal.alert('提示','添加失败',[{text:'确定',onPress:()=>{
               this.props.resetIsAdd(null)
           }}])
        }else if(nextProps.isDel===true){
           //删除成功后的弹框
           this.setState({userid:'',username:'',moneybase:''})
           Modal.alert('提示','添加成功',[{text:'确定',onPress:()=>{
               this.props.resetIsDel(null)
           }}])
        }else if(nextProps.isDel===false){
           this.setState({userid:'',username:'',moneybase:''})
           Modal.alert('提示','添加失败',[{text:'确定',onPress:()=>{
               this.props.resetIsDel(null)
           }}])
        }
    }



    render(){
        //结构赋值
        let {visible,userid,username,moneybase,amendVisible,amendUserid,amendUsername}=this.state;
        let {userList,isAdd} = this.props;

        // console.log(this.props,userList);

        return <div className="usermanager">
                <header>
                    <Link to={{
                        pathname:'/tab/index',
                        data:{userList}
                    }}><span><i className="iconfont icon-angle-left"></i></span></Link>
                    <span>用户管理</span>
                    <span onClick={()=>{this.showOrHide(true)}}><i className="iconfont icon-tianjia"></i></span>
                </header>

               {/*<Header showOrHide={this.showOrHide.bind(this)}/>*/}
               <UserList userList={userList} amendShow={this.amendShow.bind(this)}/>
               <UserInfo
                visible={visible}
                userid={userid}
                username={username}
                moneybase={moneybase}
                showOrHide={this.showOrHide.bind(this)}
                footer={this.footer}
                changeUserid={value=>this.setState({userid:value})}
                changeUsername={value=>this.setState({username:value})}
                changeMoneybase={value=>this.setState({moneybase:value})}/>

                {/*修改的组件*/}
                <AmendInfo
                visible={amendVisible}
                userid={amendUserid}
                username={amendUsername}
                changeUserid={this.amendChangeUserid.bind(this)}
                changeUsername={this.amendChangeUsername.bind(this)}
                closeModal={this.amendCloseModal.bind(this)}/>
        </div>
    }
}

const mapStatetoProps=(state)=>{
    let {userList,isAdd,isDel} =state.userManger;
    return {
        userList,
        isAdd,
        isDel
    }
}

const mapDispatchtoProps=(dispatch)=>{
    return {
        getAllUser(){
            dispatch(getAllUserDispatch)
        },
        addUser(data){
            dispatch(submitUserDispatch(data));
        },
        resetIsAdd(isAdd){//把ISADD的值在改为null
            dispatch({type:USERMANGER_ISADD,isAdd})
        },
        resetIsDel(isDel){
            dispatch({type:USERMANGER_ISDEL,isDel})
        }
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Usermanager)