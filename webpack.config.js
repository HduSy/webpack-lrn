const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const Webpack = require('webpack')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin') //clean/remove build folder files
const CopyWebpackPlugin = require('copy-webpack-plugin') //copy individual files or dirs to build folder
module.exports = {
    // or 'development'
    mode: 'production',
    // stats: 'errors-only',
    // fast develop application
    devServer: {
        port: 3000,
        progress: true,
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true
    },
    // entry config multi files
    entry: {
        index: './src/index.js',
        home: './src/home.js',
        other: './src/other.js'
    },
    // output config
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    // source map config(eval、source-map、cheap、inline、module)
    // eval 不生成.map 文件但是在每个模块后面执行eval将.map以DataURL的形式打包进模块，增加模块体积
    // source-map 生成.map
    // module 模块间的source map
    // cheap 忽略列信息
    // inline 
    devtool: 'cheap-module-source-map',
    watch: true,
    watchOptions: {
        poll: 1000,
        aggregateTimeout: 600,
        ignored: /node_modules/
    },

    plugins: [
        // simplify creation of html serving for bundle.js
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['index'],
            minify: {
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'home.html',
            chunks: ['home']
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'other.html',
            chunks: ['other']
        }),
        new MiniCssExtractPlugin({
            filename: 'css/main.css'
        }),
        new OptimizeCssAssetsPlugin(),
        // every module inject
        new Webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [{
                from: 'docs',
                to: './'
            }]
        })
    ],
    // ignore the dependencies in bundleJs
    externals: {
        jquery: '$'
    },
    module: {
        rules: [
            // html <img src=''> pack
            {
                test: /\.html$/,
                use: 'html-withimg-loader'
            },
            // A loader for webpack which transforms files into base64 URIs.
            {
                test: /\.(png|jpg|gif)$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 280 * 1024, // when the img-size < 300Kb use base64
                        outputPath: '/img/'
                    }
                }
            },
            // transform sass/less to css and pack
            {
                test: /\.(css|less|sass)$/,
                use: [
                    // MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader',
                    'less-loader',
                    'sass-loader'
                ]
            },
            {
                test: require.resolve('jquery'),
                use: 'expose-loader?$'
            },
            {
                test: /\.js$/,
                use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env'
                            ],
                            plugins: [
                                ['@babel/plugin-proposal-class-properties', {
                                    loose: true
                                }],
                                '@babel/plugin-transform-runtime'
                            ]
                        }
                    },
                    // 'eslint-loader'
                ],
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/
            }
        ]
    }
}