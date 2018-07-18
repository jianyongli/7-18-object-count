import React from 'react';

import { Modal, List,Flex,Icon,InputItem} from 'antd-mobile';

import {connect} from 'react-redux';
import {delUserDispatch,amendUserDispatch} from '../../actions/userManger.js';

class UserList extends React.Component{
    constructor(props){
        super(props);
    }
    //删除事件
    delClick(userid){
        Modal.alert('警告','确认删除吗？',[{text:'确定',onPress:()=>{
            this.props.delUser(userid);
        }},{text:'取消'}]);
    }
    //修改事件
    amendClick(userid,username){
        this.props.amendShow(userid,username);
    }

    render(){
        let {userList,amendShow}=this.props;
        return <div>
            <List>
                   {
                      userList && userList.map((item,index)=>{
                          return <List.Item key={index}>
                                <Flex>
                                    <Flex.Item onClick={this.amendClick.bind(this,item.userid,item.username)}>修改</Flex.Item>
                                    <Flex.Item>{item.username}</Flex.Item>
                                    <Flex.Item>{item.userid}</Flex.Item>
                                    <Flex.Item onClick={this.delClick.bind(this,item.userid)}>删除</Flex.Item>
                                </Flex>
                          </List.Item>
                      }) 
                   }
            </List>
        </div>
    }
}

const mapStatetoProps=(state)=>{
    return{

    }
}

const mapDispatchtoProps=(dispatch)=>{
    return {
        delUser(userid){
            dispatch(delUserDispatch(userid))
        },
        amendUser(username){
            dispatch(amendUserDispatch(username))
        }
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(UserList)