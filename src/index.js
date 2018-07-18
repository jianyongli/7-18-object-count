import React from 'react';
import ReactDOM from 'react-dom';
// import Router from './router/index.js';
// import store from './store';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from './router/route';
import routeConfig from './router/route.config';

import {Provider} from 'react-redux';
import store from './store/index';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route routes={routeConfig.routes}></Route>
        </Router>
    </Provider>
 , document.getElementById('root'));
 if(process.env.NODE_ENV==='development'){//开发环境
     require('./mock/index');
 }

{/*render()
store.subscribe(render);*/}