import axios from 'axios';

import {PORT,testPort} from './port';

//获取所有用户列表
export const getAllUser = ()=>{
    return axios.get(testPort+'/getallusers');
}

//提交单个数据
export const submitSingleUser = (data)=>{
    return axios.post(testPort+'/submitsingleuser',data);
}

//删除
export const delUserApi = (userid)=>{
    return axios.post(PORT+'/delUser',{userid})
}
//修改
export const amendUserApi = (username)=>{
    return axios.post(PORT+'/amendUser',{username})
}
