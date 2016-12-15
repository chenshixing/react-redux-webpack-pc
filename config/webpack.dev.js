/**
 * 开发构建配置
 */
const path = require('path');
const webpack = require('webpack');
// 公用配置
const commonConfig = require('./webpack.common');
// WDS
const utils = require('./utils');
const HOST = utils.getIP();
const PORT = 8627;
module.exports = Object.assign(commonConfig, {
    devtool: 'eval', // 'cheap-source-map'
    cache: true,
    plugins: commonConfig.plugins.concat([
        // 配置全局常量
        new webpack.DefinePlugin({
            'process.env': { // React/Redux打包常用
                NODE_ENV: JSON.stringify('development')
            },
            __DEV__: true,
            __WHY_DID_YOU_UPDATE__: false // 是否检测不必要的组件重渲染
        })
    ]),
    // webpack dev server 配置
    devServer: {
        host: HOST,
        port: PORT,
        proxy: [
            {
                context: ['/shuyou/**', '/api/**'],
                target: 'http://10.1.21.12:9082/',
                secure: false
            }
        ]
    }
});
