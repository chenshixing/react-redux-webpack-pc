/*
 Routes 路由配置
 */
import React from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
const routes = [
    // 登录
    {
        path: 'userLogin',
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('PAGES/userLogin').default);
            });
        }
    },
    // 登录+input框
     {
        path: 'test',
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('PAGES/test').default);
            });
        }
    },
    {
        path: 'resetPassword',// 修改密码
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('PAGES/resetPassword').default)
            })
        }
    },
    {
        component: require('PAGES/layouts').default,
        childRoutes: [
            {
                // 首页
                // 暂时先用warning
                path: '/',
                indexRoute: {
                    onEnter: (nextState, replace) => replace('', 'userLogin')
                },
            },
            {//数据源管理
                path: 'source',
                getComponent(nextState, cb) {
                    require.ensure([], (require) => {
                        cb(null, require('PAGES/source').default);
                    });
                }
            },
            {//产品管理
                path: 'product',
                getComponent(nextState, cb) {
                    require.ensure([], (require) => {
                        cb(null, require('PAGES/product').default);
                    });
                }
            },
            {
                path: 'error',// 业务错误页面
                getComponent(nextState, cb) {
                    require.ensure([], (require) => {
                        cb(null, require('PAGES/error').default)
                    })
                }
            },
            {
                path: '*',   // 404
                getComponent(nextState, cb) {
                    require.ensure([], (require) => {
                        cb(null, require('PAGES/404').default);
                    });
                }
            }
        ]
    }
];
export default routes;
