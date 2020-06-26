const {
    smart
} = require('webpack-merge')
const base = require('./webpack.base')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// npx webpack--config webpack.prod.js
module.exports = smart(base, {
    mode: 'production',
    optimization: {
        minimizer: [
            new UglifyJsPlugin()
        ]
    },
    plugins: [
        new OptimizeCssAssetsPlugin(),
    ]
})