import {getSingleMoneyListApi,checkPwdApi,getSingleLogsApi,singleSubmitApi} from '../api/singleMoney';

export const SINGLEMONEY_LIST = 'SINGLEMONEY_LIST';
export const SINGLEMONEY_TOTALMONEY = 'SINGLEMONEY_TOTALMONEY';
export const SINGLEMONEY_ISCHECK = 'SINGLEMONEY_ISCHECK';
export const SINGLEMONEY_LOGS_INIT = 'SINGLEMONEY_LOGS_INIT'; 
export const SINGLEMONEY_SUBMIT = 'SINGLEMONEY_SUBMIT';
export const SINGLEMONEY_COMPUTED = 'SINGLEMONEY_COMPUTED';
export const getSingleMoneyDispatch = (dispatch)=>{
   
    getSingleMoneyListApi().then(response=>{
       
        if(response.data.code===0){
            let list = response.data.data;
            dispatch({type:SINGLEMONEY_LIST,list});
            dispatch({type:SINGLEMONEY_TOTALMONEY});
            dispatch({type:SINGLEMONEY_COMPUTED});
        }
    })
}
export const checkPasswordDispatch = (userpwd)=>{
    return (dispatch)=>{
       
        checkPwdApi(userpwd).then(response=>{
         
            if(response.data.code===0){
                dispatch({type:SINGLEMONEY_ISCHECK,isCheck:true});
            }else{
                dispatch({type:SINGLEMONEY_ISCHECK,isCheck:false});
            }
        })
    }
}
export const getSingleLogsDispatch = (userid)=>{
    return (dispatch)=>{
        if(userid){
          
            getSingleLogsApi(userid).then(response=>{
                
                if(response.data.code === 0){
                    let singleLogs = response.data.data.logs;
                    let chooseUsername = response.data.data.username;
                    localStorage.setItem('SINGLE_LOGS',JSON.stringify(response.data.data));
                    dispatch({type:SINGLEMONEY_LOGS_INIT,singleLogs,chooseUsername});
                }
            })
        }else{
            let singleLogsStroage = localStorage.getItem('SINGLE_LOGS');
            if(singleLogsStroage){
                singleLogsStroage = JSON.parse(singleLogsStroage);
                let chooseUsername = singleLogsStroage.username;
                let singleLogs = singleLogsStroage.logs;
                dispatch({type:SINGLEMONEY_LOGS_INIT,singleLogs,chooseUsername});
            }
        }
    }
    
}
export const singleSubmitDispatch = (data)=>{
    return (dispatch)=>{
        
        singleSubmitApi(data).then(response=>{
           
            if(response.data.code === 0){
                let isSubmit = true;
                let {data:singleTotal} = response.data; 
                dispatch({type:SINGLEMONEY_SUBMIT,singleTotal,isSubmit});
            }else{
                dispatch({type:SINGLEMONEY_SUBMIT,isSubmit:false});
            }
        })
    }
}