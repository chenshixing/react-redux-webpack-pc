import rootReducer from 'REDUCERS';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
const loggerMiddleware = createLogger({
    colors: {
        title: function() {
            return '#9B30FF'
        },
        prevState: function() {
            return '#8B8878'
        },
        action: function() {
            return '#EEEE00'
        },
        nextState: function() {
            return '#698B22'
        },
    },
    timestamp: true,
    level: 'log', //level = 'log': 'log' | 'console' | 'warn' | 'error' | 'info', // console's level
    duration: false,
    diff: false,
});
/**
 * 这里面集中了所有的数据,store的数据集合是叫reducers这个家伙去做的
 * Store 就是用来维持应用所有的 state 树 的一个对象。
 * 改变 store 内 state 的惟一途径是对它 dispatch 一个 action。
 */
const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware// 一个很便捷的 middleware，用来打印 action 日志

)(createStore)
export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    if(module.hot) { //模块热替换(HMR)交换, 添加, 或者删除模块, 同时应用持续运行, 不需要页面刷新.
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }
    return store;
}

