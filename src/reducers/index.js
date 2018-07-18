import {combineReducers} from 'redux';

import {userManger} from './userManger';
import {singlemoney} from './singleMoney';

let reducer=combineReducers({
    userManger,
    singlemoney
})

export default reducer;
