const {VueLoaderPlugin} = require('vue-loader');
const LodashPlugin = require('lodash-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',

    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    MiniCssPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.scss/,
                use: [
                    MiniCssPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(ttf|woff|svg|eot)/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/uin-icon.[ext]'
                }
            },

            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader',
            },
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
    },

    plugins: [
        new MiniCssPlugin({
            filename: 'uin.css',
        }),
        new LodashPlugin(),
        new VueLoaderPlugin(),
    ]
};
