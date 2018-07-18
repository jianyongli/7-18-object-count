import React from 'react';

import {List,Flex,Modal,InputItem} from 'antd-mobile';
export default class AmendInfo extends React.Component{
    constructor(props){
        super(props);

        this.footer=[{
            text:'确定',
            onPress:()=>{this.props.closeModal()}
        },{
            text:'取消',
            onPress:()=>{this.props.closeModal()}
        }]
    }
    render(){
        let {visible,userid,username,changeUserid,changeUsername,closeModal} = this.props;
        let {footer} = this;

        return  <Modal
        className="modal-self"
        visible={visible}
        transparent
        maskClosable={true}
        onClose={()=>{closeModal()}}
        title="创建用户"
        footer={footer}
        >
            <List>
                <List.Item>
                    <Flex>
                        <label className="adduser">用户id：</label>
                        <Flex.Item><InputItem placeholder="输入用户id" value={userid} onChange={value=>changeUserid(value)} /></Flex.Item>
                    </Flex>
                </List.Item>
                <List.Item>
                    <Flex>
                        <label className="adduser">姓名：</label>
                        <Flex.Item><InputItem placeholder="输入用户名" value={username} onChange={value=>changeUsername(value)} /></Flex.Item>
                    </Flex>
                </List.Item>
            </List>
        </Modal>
    }
}