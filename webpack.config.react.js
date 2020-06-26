const webpack = require('webpack')
const path = require('path')
module.exports = {
    mode: 'development',
    entry: {
        // react: './src/react.js'
        react: ['react', 'react-dom']
    },
    output: {
        filename: '_dll_[name].js',
        path: path.resolve(__dirname, 'dist'),
        library: '_dll_[name]', // define how the lib is exposed
        // libraryTarget: 'var' //commonjs:module.exports
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-react']
            }
        }]
    },
    plugins: [
        // drastically improve the build time performance
        new webpack.DllPlugin({
            name: '_dll_[name]',
            path: path.resolve(__dirname, 'dist', 'manifest.json')
        })
    ]
}