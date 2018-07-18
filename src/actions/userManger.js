import  {getAllUser,submitSingleUser,delUserApi,amendUserApi} from '../api/userManger';

export const USERMANGER_INIT_USER = 'USERMANGER_INIT_USER';//所有用户列表
export const USERMANGER_ADD_USER = 'USERMANGER_ADD_USER';//用户
export const USERMANGER_ISADD = 'USERMANGER_ISADD'
export const USERMANGER_USER_DEL= 'USERMANGER_USER_DEL';//删除用户
export const USERMANGER_ISDEL  =  'USERMANGER_ISDEL';//是否要删除

export const USERMANGER_USER_AMEND = 'USERMANGER_USER_AMEND';//修改



//导出两个函数，，放在dispatch中
export let getAllUserDispatch = (dispatch)=>{
    getAllUser().then((res)=>{
        // console.log(res);
        //做判断
        if(res.data.code===0){
            let users=res.data.data;
            dispatch({type:USERMANGER_INIT_USER,users})
            dispatch({type:USERMANGER_ISADD,isAdd:null})
        }
    })
}

export let submitUserDispatch=(data)=>{
       return (dispatch)=>{
           submitSingleUser(data).then(res=>{
               if(res.data.code===0){
                   dispatch({type:USERMANGER_ADD_USER,userinfo:data})
                   dispatch({type:USERMANGER_ISADD,isAdd:true});
               }else{
                   dispatch({type:USERMANGER_ISADD,isAdd:false});
               }
           })
       }
}

//删除用户
export const delUserDispatch=(userid)=>{
    return (dispatch)=>{
        delUserApi(userid).then(res=>{
            // console.log(res);
            if(res.data.code===0){
                dispatch({type:USERMANGER_USER_DEL,userid});
                dispatch({type:USERMANGER_ISDEL,isDel:true})
            }
        })
    }
}

//修改
export const amendUserDispatch=(username)=>{
    return (dispatch)=>{
       amendUserApi(username).then(res=>{
           if(res.data.code===0){
               dispatch({type:USERMANGER_USER_AMEND,username});
           }
       })
    }
}