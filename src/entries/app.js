/**
 * 入口文件
 */
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Router } from 'react-router';
import { createHistory } from  'history';
import 'ASSETS/less/main.less';
import routes from '../routes';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
// 渲染页面
const history = createHistory()
const store = configureStore();
ReactDom.render(
    <Provider store={store}>
        <Router routes={routes}/>
    </Provider>
    , document.getElementById('root'))

