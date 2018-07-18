import React from 'react';

import {List,Flex} from 'antd-mobile';

import {connect} from 'react-redux';

import {getSingleLogsDispatch} from '../../actions/singleMoney.js';

import '../../css/common.css';
import '../../css/detail.css';

class Detail extends React.Component{
    render(){
        let {chooseUsername,singleLogs} = this.props;
        return <div className="section">
            <h1>{chooseUsername}</h1>
             <List>
                    {   
                        singleLogs && singleLogs.map((item,key)=>{
                            return <List.Item key={key}>
                                <Flex>
                                    <Flex.Item className="text-center">{item.time}</Flex.Item>
                                    <Flex.Item className="text-center">{item.logMoney}</Flex.Item>
                                    <Flex.Item className="text-center">{item.dowhat}</Flex.Item>
                                </Flex>
                                    
                                
                            </List.Item>
                        })
                    }
            </List>
        </div>
    }

    componentDidMount(){
        let userid = this.props.state && this.props.state.userid;
        this.props.getLogs(userid);
    }
}


const mapStatetoProps= (state)=>{
    let {singleLogs,chooseUsername} = state.singlemoney;
    return {singleLogs,chooseUsername}
}

const mapDispatchtoProps = (dispatch)=>{
    return {
        getLogs(userid){
            dispatch(getSingleLogsDispatch(userid));
        }
    }
}

Detail.defaultProps = {
    chooseUsername:'张三',
    singleLogs:[
        {
            time:'2018-7-15',
            logMoney:100,
            dowhat:'买菜'
        }
    ]
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Detail)