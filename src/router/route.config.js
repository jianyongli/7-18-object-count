import React from 'react';

import Tab from '../components/tab';
import Usermanager from '../components/usermanager.jsx';

import Index from '../components/tab/index.jsx';
import Detail from '../components/tab/detail.jsx';
import Submit from '../components/tab/submit.jsx';
import Balance from '../components/tab/balance.jsx';

export default {
    routes:[{
        path:'/usermanager',
        component:Usermanager
    },{
        path:'/tab',
        component:Tab,
        children:[{
            path:'/tab/index',
            component:Index
        },{
            path:'/tab/detail',
            component:Detail
        },{
            path:'/tab/submit',
            component:Submit
        },{
            path:'/tab/balance',
            component:Balance
        }]
    }]
}