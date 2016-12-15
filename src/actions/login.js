/**
 * Created by Ethan on 2016/11/21.
 *
 */
import fetch from 'isomorphic-fetch'
export const RECEIV_LOGIN_INFO = 'receivLoginInfo';
export const LOGIN_LOADING = 'loginLoading';
//指标数据录入页面-指标查询
export function fetchLogin(username, password) {
    return function(dispatch, getState) {
        dispatch(loading());
        fetch('/shuyou/login', {
                method: 'post',
                headers: {
                    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                body: 'username=' + username + '&password=' + password,
                credentials: "same-origin"
            }
        )
            .then(response => response.json())
            .then(
                json => dispatch(receiveLoginInfo(json))
            )
    }
}
function loading() {
    return {
        type: LOGIN_LOADING,
        payload: null,
        meta: 'LOADING状态！'
    }
}
function receiveLoginInfo(json) {
    return {
        type: RECEIV_LOGIN_INFO,
        payload: json,
        meta: '登录-返回登录信息'
    }
}
