const {
    smart
} = require('webpack-merge')
const base = require('./webpack.base')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// npx webpack--config webpack.prod.js
module.exports = smart(base, {
    mode: 'development',
    optimization: {
        minimizer: [
            new UglifyJsPlugin()
        ],
        splitChunks: {
            cacheGroups: {
                // another.js other.js 共同的import的模块
                common: {
                    chunks: 'initial',
                    minSize: 0, //Minimum size, in bytes, for a chunk to be generated.
                    minChunks: 2, //Minimum number of chunks that must share a module before splitting.
                },
                // 单独抽离第三方模块 e.g.jQuery
                // 因为配置了CDN webpack.providePlugin externals 固并未打包
                vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    minSize: 1,
                    minChunks: 2,
                    // priority: 1
                },
            }
        }
    },
    plugins: [
        new OptimizeCssAssetsPlugin(),
    ]
})