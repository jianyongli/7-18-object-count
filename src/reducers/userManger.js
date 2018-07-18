import {USERMANGER_ADD_USER,USERMANGER_INIT_USER,USERMANGER_ISADD,USERMANGER_USER_DEL,USERMANGER_ISDEL,USERMANGER_USER_AMEND} from '../actions/userManger';

//定义各种类型
let oTypes={
    // 当添加成功之后
    [USERMANGER_ADD_USER](state,action){
        state.userList.push(action.userinfo)//往数组里面添加信息
    },
    //当页面刷新时，，数据还存在(数据还能请求到)，，，也就是初始化数据
    [USERMANGER_INIT_USER](state,action){
        state.userList = action.users;
    },
    //专门判断用户添加失败的
    [USERMANGER_ISADD](state,action){
        state.isAdd=action.isAdd;
    },
    //删除用户
    [USERMANGER_USER_DEL](state,action){
        let userid=action.userid;
        let index=state.userList.findIndex(item=>userid===item.userid);
        state.userList.splice(index,1);
    },
    [USERMANGER_ISDEL](state,action){
        state.isDel=action.isDel;
    },
    //修改
    [USERMANGER_USER_AMEND](state,action){
        // console.log(state);
        state.userList=action.username
    }
}

export let userManger=(state={userList:[],isAdd:null,isDel:null},action)=>{
     oTypes[action.type] && oTypes[action.type](state,action);
     return {...state,userList:[...state.userList]};
     
}
