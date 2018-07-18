import {createStore,applyMiddleware} from 'redux';
import reducers from '../reducers';
import Thunk from 'redux-thunk';
const store=createStore(reducers,applyMiddleware(Thunk));
if(process.env.NODE_ENV==='development'){
    window.store=store;
}
export default store;