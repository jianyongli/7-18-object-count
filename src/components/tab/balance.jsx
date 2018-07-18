import React from 'react';

import '../../css/balance.css';
import '../../css/common.css';

import {connect} from 'react-redux';
import {getSingleMoneyDispatch} from '../../actions/singleMoney';
import BalanceList from './balance/balanceList';

class Balance extends React.Component{
    render(){
        let {totalMoney} = this.props;
        return <div className="balance">
            <h1>总金额：{totalMoney}</h1>
            <BalanceList/>
        </div>
    }

    componentDidMount(){
        this.props.getTotalMoney();
    }
}
let mapState = (state)=>{
    let {totalMoney} = state.singlemoney;
    return {totalMoney}
}
let mapDispatch = (dispatch)=>{
    return {
        getTotalMoney(){
            dispatch(getSingleMoneyDispatch);
        }
    }
}

export default connect (mapState,mapDispatch)(Balance)