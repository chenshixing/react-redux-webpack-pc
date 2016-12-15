/**
 * Created by Ethan on 2016/11/21.
 */
import {actionLogin} from 'ACTION';
export function loginReducer(state = {
    message: '',
    loading: false,
}, action) {
    switch(action.type) {
        case actionLogin.LOGIN_LOADING:
            return Object.assign({}, state,
                {
                    loading: true,
                    message: '',
                },
                action);
            break;
        case actionLogin.RECEIV_LOGIN_INFO:
            let status = action.payload.status;
            let message = '';
            let logined = false;
            if(status.code == 200) { //登录成功
                logined = true;
            } else { //
                message = status.message;
            }
            return Object.assign({}, state,
                {
                    loading: false,
                    message: message,
                    isLogined: logined,
                },
                action);
            break;
        default:
            return state;
    }
}