/**
 * Created by Ethan
 * 
 *  请使用业界规范 或者使用 createAction
 *  type :  <string>
 *  payload:<bool | number | string | object>,  action的负载，可以是数据或 error 对象
 *  error:  <bool>    指明该action是否是一个以 error 为负载的action  (可选)
 *  meta:   <string>   action元数据， 包含解释该action含义的信息
 *
 *
 *  此处是所有action 的集合地
 *  
 */
import * as actionLogin from './login';
export {
    actionLogin
}
