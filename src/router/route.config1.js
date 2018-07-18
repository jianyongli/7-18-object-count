import React from 'react';

import Tab from '../components/tab';
import Usermanager from '../components/usermanager.jsx';

import Index from '../components/tab/index.jsx';
import Detail from '../components/tab/detail.jsx';
import Submit from '../components/tab/submit.jsx';
import Balance from '../components/tab/balance.jsx';

import {LoadAsyncCom,Loading} from '../tools/loadAsyncCom';

export default {
    routes:[{
        path:'/usermanager',
        component:LoadAsyncCom(()=>import('../components/usermanager'),Loading)
    },{
        path:'/tab',
        component:LoadAsyncCom(()=>import('../components/tab.jsx'),Loading),
        children:[{
            path:'/tab/index',
            component:LoadAsyncCom(()=>import('../components/tab/index.jsx'),Loading)
        },{
            path:'/tab/detail',
            component:LoadAsyncCom(()=>import('../components/tab/detail.jsx'),Loading)
        },{
            path:'/tab/submit',
            component:LoadAsyncCom(()=>import('../components/tab/submit.jsx'),Loading)
        },{
            path:'/tab/balance',
            component:LoadAsyncCom(()=>import('../components/tab/balance.jsx'),Loading)
        }]
    }]
}