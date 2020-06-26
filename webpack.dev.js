const {
    smart
} = require('webpack-merge')

const base = require('./webpack.base')
const path = require('path')
// npx webpack-dev-server --config webpack.dev.js
module.exports = smart(base, {
    mode: 'development',
    // fast develop application
    devServer: {
        port: 8080,
        progress: true,
        // open: true,
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        // 1) proxy
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        // 2)simulate
        // before: (app, server, compiler) => {
        //     app.get('/phone/info', (req, res) => {
        //         res.json({
        //             brand: 'OnePlus 7T',
        //             year: 2019,
        //             fps: '90Hz',
        //             price: '￥3200'
        //         })
        //     })
        // }
        // 3) webpack-dev-middleware in Server
        // 前后端都在服务端启动 运行在3000端口
    }
})