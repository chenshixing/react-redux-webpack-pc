/**
 * Created by Ethan
 *
 * 此处是所有Reducer的集合地
 * 将所有的reducer结合为一个,传给store
 */
import { combineReducers } from 'redux';
import {loginReducer} from './login';
export default combineReducers({
    loginReducer
})
