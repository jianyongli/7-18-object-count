import React,{Fragment} from 'react';

import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

export default (props)=>{
    return <Fragment>
        <Switch>
            {
                props.routes.map((item,index)=>{
                   return <Route path={item.path} render={(...location)=>{
                            if(item.children){
                                return <item.component {...location} childrenRoutes={item.children}/>
                            }else{
                                return <item.component {...location}/>
                            }
                        }} key={index}>
                   </Route>
                })
            }
            <Redirect to="/tab/index"></Redirect>
        </Switch>
    </Fragment>
     
}
